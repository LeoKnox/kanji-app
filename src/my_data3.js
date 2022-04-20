import React, { Component, useState, useEffect } from 'react';
import data from './data.json';

function KanjiMap() {
    const [kanji, setKanji] = useState(data);
    const [ans, setAns] = useState(kanji[Math.floor(Math.random()*kanji.length)])

    useEffect(() => {
        return () => {
            let i = data.sort(() => Math.random() - 0.5).slice(0,6);
            setKanji(i);
            setAns(i[Math.floor(Math.random()*kanji.length)]);
        }
    }, [])

    function makeAns() {
        let i = Math.floor(Math.random()*kanji.length);
        return (kanji[i].meaning);
    }
    
    const changeKanji = (x) => {
        let newData = data.sort(() => Math.random() - 0.5).slice(0,6);
        setAns(newData)
        setKanji(newData);
        //setAns(kanji[i]);
        console.log(newData);
        setAns(newData[Math.floor(Math.random()*kanji.length)]);
        //console.log("blue");
    }

            //<h3 className="answer">Meaning: {ans.meaning}</h3>  from return
    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.meaning)} className="kanjiCube">{k.kanji}</p>
            ))}
            <h3 className="answer">{ans.meaning}</h3>
        </div>
    )
}

export default KanjiMap;