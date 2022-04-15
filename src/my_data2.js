import React, { Component, useState, useEfect } from 'react';
import data from './data.json';

function KanjiMap() {
    const [kanji, setKanji] = useState(KanjiMap());

    function kanjiTest(myData) {
        setKanji(myData.sort(() => Math.random() - 0.5));
        console.log(myData);
        return(data.slice(0,6));
    }

    //const datatwo = kanjiTest(data);

    return (
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={kanjiTest(data)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
    )
}

export default KanjiMap;