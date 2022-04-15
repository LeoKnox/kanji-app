import React, { Component, useState } from 'react';
import data from './data.json';

function kanjiMap() {
    data.sort(() => Math.random() - 0.5)
    const datatwo = data.slice(0,6);

    return (
        <div>
            {datatwo.map((k) => (
                <p>{k.kanji}</p>
            ))}
        </div>
    )
}

export default kanjiMap;