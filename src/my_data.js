import React, { useState, useEffect } from 'react';
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

    const changeKanji = (x) => {
        if (x === ans.kanji) {
            let newData = data.sort(() => Math.random() - 0.5).slice(0,6);
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