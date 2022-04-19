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

    function makeAns() {
        let i = Math.floor(Math.random()*kanji.length);
        return (kanji[i].meaning);
    }
    
    const changeKanji = (x) => {
        //console.log(i)
        console.log(kanji);
        setKanji(data.sort(() => Math.random() - 0.5).slice(0,6));
        //setAns(kanji[i]);
        console.log("ddd"+makeAns());
        //setAns(kanji[Math.floor(Math.random()*kanji.length)]);
        //console.log("blue");
    }

            //<h3 className="answer">Meaning: {ans.meaning}</h3>  from return
    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.meaning)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default KanjiMap;