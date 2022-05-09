import { useState, useEffect } from 'react';
import axios from 'axios';

let allKanji = [];
let ans = '';

const KanjiMap = (grades) => {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        console.log("tt"+Object.keys(grades));
        console.log(grades.grades);
        const x = `http://127.0.0.1:8000/quiz/${grades.grades}`;
        axios.get(x)
            .then(function (response) {
                allKanji = response.data;
                console.log(allKanji+"dd")
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function check() {
                const quizList = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                setQuiz(quizList);
                ans = quizList[Math.floor(Math.random()*quizList.length)].meaning;
            })

        }, []);

    function check(answer) {
        if (answer === ans) {
            const newQuiz = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
            setQuiz(newQuiz);
            ans = newQuiz[Math.floor(Math.random()*newQuiz.length)].meaning;
            console.log("Right!");
        } else {
            console.log("wrong");
        }
    }

    return (
        <>
        <h1 className="answer">Answer: {ans}</h1>
        <h2>{grades}</h2>
        <div className="kanjiWrapper">
            {quiz.map((k, i) => (
                <p key={i} onClick={() => check(k.meaning)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
};

export default KanjiMap;