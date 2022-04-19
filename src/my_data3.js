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
        setKanji(data.sort(() => Math.random() - 0.5).slice(0,6));
        let i = Math.floor(Math.random()*kanji.length);
        setAns(kanji[i]);
        console.log(ans);
        //setAns(kanji[Math.floor(Math.random()*kanji.length)]);
        //console.log("blue");
    }

    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.meaning)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default KanjiMap;