import React, { Component, useState } from 'react';
import data from './data.json';

function kanjiMap() {
    data.sort(() => Math.random() - 0.5)
    const datatwo = data.slice(0,6);
    console.log("red");

    return (
        <div className="kanjiWrapper">
            {datatwo.map((k, i) => (
                <p key={i} onClick={kanjiMap} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default kanjiMap;