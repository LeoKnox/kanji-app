import { useState, useEffect } from 'react';
import axios from 'axios';

const SelectGrade = () => {
    const [grades, setGrades] = [];

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
        <div>
            {grades.map((g, i) => (
                <p key={i}>{g.grade}</p>
            ))}
        </div>
        </>
    )
}

export default SelectGrade;