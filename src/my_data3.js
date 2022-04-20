import React, { Component, useState, useEffect } from 'react';
import data from './data.json';
import KanjiMap2 from './my_data4.js';

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
    
    function newKanji() {
        //console.log(i)
        console.log(kanji);
        setKanji(data.sort(() => Math.random() - 0.5).slice(0,6));
        //setAns(kanji[i]);
        console.log("ddd"+makeAns());
        //setAns(kanji[Math.floor(Math.random()*kanji.length)]);
        //console.log("blue");
    }
    
    const changeKanji = (x) => {
        newKanji();
        console.log(kanji);
    }

            //<h3 className="answer">Meaning: {ans.meaning}</h3>  from return
    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.meaning)} className="kanjiCube">{k.kanji}</p>
            ))}
            <KanjiMap2 meaning="one" />
        </div>
    )
}

export default KanjiMap;