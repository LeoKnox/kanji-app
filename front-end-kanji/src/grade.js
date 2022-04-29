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
        <h1>Choose grade</h1>
        <form>
        {grades.map((g, i) => (
            <>
            <input type="checkbox" id="{g.grade}" name="{g.grade}" value="{g.grade}" key={i} />
            <label for="{g.grade}">{g.grade}</label><br />
            </>
        ))}
        </form>
        </>
    )
}

export default SelectGrade;