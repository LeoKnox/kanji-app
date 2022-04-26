import { useState, useEffect } from 'react';
import axios from 'axios';
import RandomKanji from './randomKanji.js';

const KanjiMap = () => {
    //const [kanji, setKanji] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [ans, setAns] = useState('');
    let allKanji = []; // had to use because kanji use caused undefined error
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/') 
            .then(function (response) {
                allKanji = response.data;
                //setKanji(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function() {
                const quizList = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                setQuiz(quizList);
                setAns(quizList[Math.floor(Math.random()*quizList.length)].kanji);
            })
    }, []);

    function check(answer) {
        if (answer == ans) {
            const newQuiz = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
            console.log(newQuiz);
            //setQuiz(newQuiz);
            //setAns(newQuiz[Math.floor(Math.random()*newQuiz.length)].kanji);
            console.log("Right!");
        } else {
            console.log("wrong");
        }
    }

    return (
        <>
        <h1>Answer: {ans}</h1>
        <div className="kanjiWrapper">
            {quiz.map((k, i) => (
                <p key={i} onClick={() => check(k.kanji)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
};

export default KanjiMap;