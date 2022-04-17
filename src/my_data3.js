import React, { Component, useState, useEffect } from 'react';
import data from './data.json';

function KanjiMap() {
    const [kanji, setKanji] = useState(data);

    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={console.log("red")} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default KanjiMap;