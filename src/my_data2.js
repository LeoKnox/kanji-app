import React, { Component, useState, useEffect } from 'react';
import data from './data.json';

function KanjiMap() {
    const [kanji, setKanji] = useState(KanjiTest(data));

    function KanjiTest(myData) {
        useEffect(() => {
            const newData = myData.sort(() => Math.random() - 0.5);
            console.log(newData);
            return(newData.slice(0,6));
    }, []);
};

    function changeData() {
        setKanji(KanjiTest(data));
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