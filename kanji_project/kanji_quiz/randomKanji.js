import AnswerKanji from './answerKanji.js';
import { useState, useEffect } from 'react';

const RandomKanji = (kanji) => {
    const displayKanji = kanji.kanji.sort(() => Math.random() - 0.5).slice(0,6);
    const [ans, setAns] = useState(displayKanji[Math.floor(Math.random()*displayKanji.length)].kanji);
    console.log(ans);

    return (
        <>
        <h1>Answer: {ans}</h1>
        {displayKanji.map((k, i) => (
            <p key={i} onClick='' className="kanjiCube">{k.kanji}</p>
        ))}
        </>
    )
}

export default RandomKanji;