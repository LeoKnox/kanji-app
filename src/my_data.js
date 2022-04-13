import React, { Component } from 'react';
import data from './data.json';

data.sort(() => Math.random() - 0.5)
const datatwo = data.slice(0,6);

function Single() {
    return (
        datatwo.map((d, i) =>
            <p key={i} className="kanjiCube">{d.kanji}</p>
        )
    )
}

export default Single;