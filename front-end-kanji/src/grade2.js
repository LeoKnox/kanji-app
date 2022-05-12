import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import KanjiMap from './quiz.js';

let selections = [];

const SelectGrade = () => {
    const [grades, setGrades] = useState([]);
    const [checked, setChecked] = useState(true);
    let navigate = useNavigate();

    function selected(e) {
        let link =""
        e.preventDefault();
        for(let i = 1; i < selections.length; i++) {
            if (selections[i] === true) {
                link += i;
            }
        }
        console.log("aa");
        setChecked(true);
        navigate("/quiz/"+link+"/test");
        return (<KanjiMap grades="1" />);
    }

    function handleCheck(e) {
        e.preventDefault();
        setChecked(!checked);
        selections[e.target.value] = !selections[e.target.value];
        console.log("xx"+selections);
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/g/') 
            .then(function (response) {
                console.log(response.data);
                setGrades(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
        <h1 className="gradeHeading">Choose grade</h1>
        <form onSubmit={selected}>
        {grades.map((g, i) => (
            <>
            <label key={i} className="container">{g.grade}:{selections}
                <input type="checkbox" onClick={handleCheck} checked={selections[i]} name="grade" value={g.grade-1} />
                <span className="checkmark"></span>
            </label>
            </>
        ))}
        <input className="selectGrade" type="submit" value="Submit" />
        </form>
        </>
    )
}

export default SelectGrade;