import { useState, useEffect } from 'react';
import axios from 'axios';

let selections = [];

const SelectGrade = () => {
    const [grades, setGrades] = useState([]);

    function selected(e) {
        let link =":"
        e.preventDefault();
        for(let i = 1; i < selections.length; i++) {
            link += selections[i];
        }
        console.log(link);
    }

    function handleCheck(e) {
        e.preventDefault();
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
            <label key={i} className="container">{g.grade}
                <input type="checkbox" onClick={handleCheck} name="grade" value={g.grade} />
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