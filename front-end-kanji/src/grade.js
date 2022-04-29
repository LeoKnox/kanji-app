import { useState, useEffect } from 'react';
import axios from 'axios';

const SelectGrade = () => {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/grades/') 
            .then(function (response) {
                console.log(response.data);
                setGrades(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
        <h1 className="gradeHeading">Choose grade</h1>
        <form action="http://127.0.0.1:8000/grades/" method="POST">
        {grades.map((g, i) => (
            <>
            <label key={i} className="container">{g.grade}
                <input type="checkbox" />
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