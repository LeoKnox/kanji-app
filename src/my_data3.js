import React, { Component, useState, useEffect } from 'react';
import data from './data.json';

function KanjiMap() {
    const [kanji, setKanji] = useState(data);

    function changeKanji(data) {
        const newdata = (data.sort(() => Math.random() - 0.5).slice(0,6));
        setKanji(newdata);
    }
/*
    useEffect(() => {
        setKanji(data.sort(() => Math.random() - 0.5).slice(0,6))
    }, [])*/

    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={changeKanji(data)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default KanjiMap;