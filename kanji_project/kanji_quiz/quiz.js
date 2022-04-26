import { useState, useEffect } from 'react';
import axios from 'axios';
import RandomKanji from './randomKanji.js';

const KanjiMap = () => {
    const [kanji, setKanji] = useState([]);
    let quiz = [];
    let ans = "";
    //let allKanji = []; // had to use because kanji use caused undefined error
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/') 
            .then(function (response) {
                //kanji = response.data;
                setKanji(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function check() {
                quiz = kanji.sort(() => Math.random() - 0.5).slice(0,6);
                console.log(quiz);
                ans = quiz[Math.floor(Math.random()*quiz.length)].kanji;
                console.log(ans);
                //setQuiz(quizList);
                //setAns(quizList[Math.floor(Math.random()*quizList.length)].kanji);
            })
    }, []);

    function check(answer) {
        if (answer === answer) {
            quiz = kanji.sort(() => Math.random() - 0.5).slice(0,6);
            ans = quiz[Math.floor(Math.random()*quiz.length)].kanji;
            //setQuiz(newQuiz);
            //setAns(newQuiz[Math.floor(Math.random()*newQuiz.length)].kanji);
            console.log("Right!");
        } else {
            console.log("wrong");
        }
    }

    return (
        <>
        <h1>Answer: {}</h1>
        <div className="kanjiWrapper">
            {quiz.map((k, i) => (
                <p key={i} onClick={() => check(k.kanji)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
};

export default KanjiMap;