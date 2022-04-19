import React, { Component, useState, useEffect } from 'react';
import data from './data.json';

function KanjiMap() {
    const [kanji, setKanji] = useState(data);
    const [ans, setAns] = useState(kanji[Math.floor(Math.random()*kanji.length)])

    useEffect(() => {
        return () => {
            setKanji(data.sort(() => Math.random() - 0.5).slice(0,6));
        }
    }, [])
    
    const changeKanji = (x) => {
        let i = Math.floor(Math.random()*kanji.length);
        console.log(i)
        console.log(kanji);
        setKanji(data.sort(() => Math.random() - 0.5).slice(0,6));
        console.log(kanji);
        setAns(kanji[i]);
        //setAns(kanji[Math.floor(Math.random()*kanji.length)]);
        //console.log("blue");
    }

    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.meaning)} className="kanjiCube">{k.kanji}</p>
            ))}
            <h3 className="answer">Meaning: {ans.meaning}</h3>
        </div>
    )
}

export default KanjiMap;