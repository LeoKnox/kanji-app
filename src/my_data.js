import React, { Component } from 'react';
import data from './data.json';

data.sort(() => Math.random() - 0.5)
const datatwo = data.slice(0,3);

function Single() {
    return (
        datatwo.map((d, i) =>
            <p key={i}> {d.kanji} : {d.meaning}</p>
        )
    )
}

export default Single;