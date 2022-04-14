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

function updateKanji(e) {
    /*
    const find = e.target.value;
    const ans = datatwo[Math.floor(datatwo.length*Math.random())]
    console.log(ans);
    data.sort(() => Math.random() - 0.5)
    const datatwo = data.slice(0,6);
    return (
        <kanjiMap />
    ) */
    kanjiMap();
}

function Single() {
    return (
        datatwo.map((d, i) =>
            <p key={i}>
                <button className="kanjiCube" value="red" onClick={updateKanji}>
                {d.kanji}
                </button>
            </p>
        )
    )
}

export default kanjiMap;