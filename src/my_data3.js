import React, { Component, useState, useEffect } from 'react';
import data from './data.json';

function KanjiMap() {
    const [kanji, setKanji] = useState(data);

    //setKanji(data.sort(() => Math.random() - 0.5).slice(0,6))
/*
    useEffect(() => {
        setKanji(data.sort(() => Math.random() - 0.5).slice(0,6))
    }, [])*/

    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={function setKanji(data.sort(() => Math.random() - 0.5).slice(0,6))} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default KanjiMap;