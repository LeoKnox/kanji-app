import React, { Component } from 'react';
import data from './data.json';

data.sort(() => Math.random() - 0.5)
const datatwo = data.slice(0,6);

function kanjiMap() {
    return (
        <div className="kanjiWrapper">
            <Single />
        </div>
    )
}

function updateKanji(e, key) {
    data.sort(() => Math.random() - 0.5)
    const datatwo = data.slice(0,6);
    console.log(key);
    return (
        <kanjiMap />
    )
}

function Single() {
    return (
        datatwo.map((d, i) =>
            <p key={i} className="kanjiCube" onClick={updateKanji}>{d.kanji}</p>
        )
    )
}

export default kanjiMap;