import { useState, useEffect } from 'react';
import axios from 'axios';

const SelectGrade = () => {
    const [grades, setGrades] = useState([]);

    function selected(e) {
        e.preventDefault();
        const grades = Array.from(e.target.grade).map(g => [
            g.grade
        ]);
        console.log("ddd"+grades);
        axios.post('http://127.0.0.1:8000/g/', {
            grade: e.target.grade
        })
        .then(function(response) {
            console.log(e.target.value)
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
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
                <input type="checkbox" name="grade" value={g.grade} />
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