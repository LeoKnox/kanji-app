import { useState, useEffect } from 'react';
import axios from 'axios';

const KanjiMap = () => {
    const [kanji, setKanji] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [answer, setAnswer] = useState();
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/') 
            .then(function (response) {
                const selectKanji = response.data;
                setKanji(selectKanji);
                setQuiz(kanji.sort(() => Math.random() - 0.5).slice(0,6));
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log(quiz[2].kanji)
                setAnswer(quiz[Math.floor(Math.random()*kanji.length)].kanji);
                console.log(answer);
            })
            .then(function () {
                console.log(quiz[2].kanji)
                setAnswer(quiz[2].kanji);
                console.log(answer);
            })
    }, []);

    function changeKanji() {
        setQuiz(kanji.sort(() => Math.random() - 0.5).slice(0,6));
        setAnswer(quiz[Math.floor(Math.random()*kanji.length)].kanji);
        console.log(answer);
    }

    return (
        <>
        <h1>Answer: {answer}</h1>
        <div className="kanjiWrapper">
            {quiz.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.kanji)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
};

export default KanjiMap;