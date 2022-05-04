import { useState, useEffect } from 'react';
import axios from 'axios';

const SelectGrade = () => {
    const [grades, setGrades] = useState([]);

    function selected(e) {
        e.preventDefault();
        console.log("ccc"+e.target.grade);
        const grades = Array.from(e.target.grade).map(g => [
            g.grade
        ]);
    }

    function handleCheck(e) {
        e.preventDefault();
        e.target.checked = !(e.target.checked);
        console.log(e.target.grade);
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