import AnswerKanji from './answerKanji.js';
import { useState, useEffect } from 'react';

const RandomKanji = (kanji, ans) => {
    const displayKanji = kanji.kanji.sort(() => Math.random() - 0.5).slice(0,6);
    console.log(kanji);
    //console.log(ans);

    return (
        <>
        <h1>Answer: {kanji.ans}</h1>
        {displayKanji.map((k, i) => (
            <p key={i} onClick='' className="kanjiCube">{k.kanji}</p>
        ))}
        </>
    )
}

export default RandomKanji;