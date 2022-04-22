import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

function KanjiMap() {
    const [kanji, setKanji] = useState();
    const [ans, setAns] = useState();

    axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            setKanji(response);
        })
        .catch(function (error) {
            console.log(error);
        })

    useEffect(() => {
        return () => {
            let data = kanji;
            let i = data.sort(() => Math.random() - 0.5).slice(0,6);
            setKanji(i);
            setAns(i[Math.floor(Math.random()*kanji.length)]);
        }
    }, [])

    const changeKanji = (x) => {
        if (x === ans.kanji) {
            let newData = kanji.sort(() => Math.random() - 0.5).slice(0,6);
            setAns(newData)
            setKanji(newData);
            setAns(newData[Math.floor(Math.random()*kanji.length)]);
        }
    }

    return (
        <>
        <h3 className="answer">Select Kanji for {ans.meaning}</h3>
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.kanji)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
}

export default KanjiMap;