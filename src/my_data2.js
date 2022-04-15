import React, { Component, useState } from 'react';
import data from './data.json';

function kanjiTest(myData) {
    myData.sort(() => Math.random() - 0.5)
    console.log(myData);
    return(data.slice(0,6));
}

function kanjiMap() {
    const datatwo = kanjiTest(data);

    return (
        <div className="kanjiWrapper">
            {datatwo.map((k, i) => (
                <p key={i} onClick={kanjiMap} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default kanjiMap;