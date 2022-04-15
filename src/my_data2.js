import React, { Component, useState, useEfect } from 'react';
import data from './data.json';

function kanjiTest(myData) {
    const newData = myData.sort(() => Math.random() - 0.5);
    console.log(newData);
    return(newData.slice(0,6));
}

function KanjiMap() {
    const [kanji, setKanji] = useState(kanjiTest(data));

    function changeData() {
        setKanji(kanjiTest(data));
    }

    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={changeData(data)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default KanjiMap;