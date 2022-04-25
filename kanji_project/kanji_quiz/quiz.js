import { useState, useEffect } from 'react';
import axios from 'axios';

const KanjiMap = () => {
    const [kanji, setKanji] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [loading, setLoading] = useState(false);
    
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
            .then(
                console.log(kanji)
            )
    }, []);

    function changeKanji() {
        setQuiz(kanji.sort(() => Math.random() - 0.5).slice(0,6));
        console.log(quiz);
    }

    return (
        <>
        <div className="kanjiWrapper">
            {quiz.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.kanji)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
};

export default KanjiMap;