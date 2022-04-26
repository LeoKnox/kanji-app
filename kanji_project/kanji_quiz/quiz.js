import { useState, useEffect } from 'react';
import axios from 'axios';
import RandomKanji from './randomKanji.js';

const KanjiMap = () => {
    const [kanji, setKanji] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [ans, setAns] = useState('');
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/') 
            .then(function (response) {
                setKanji(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function() {
                console.log(kanji);
                const quizList = kanji.sort(() => Math.random() - 0.5).slice(0,6);
                setQuiz(quizList);
                setAns(quizList[Math.floor(Math.random()*quizList.length)].kanji);
            })
    }, []);

    function check(answer) {
        if (answer == ans) {
            console.log("tttt");
            console.log(kanji);
        }
    }

    return (
        <>
        <h1>Answer: {ans}</h1>
        <div className="kanjiWrapper">
            {quiz.map((k, i) => (
                <p key={i} onClick={check(k.kanji)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
};

export default KanjiMap;