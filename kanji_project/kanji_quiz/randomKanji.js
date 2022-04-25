
const RandomKanji = (kanji) => {
    console.log(kanji.kanji[0]);

    return (
        <>
        <h1>More Kanji Fun</h1>
        {kanji.kanji.map((k, i) => (
            <p key={i} onClick="" className="kanjiCube">{k.kanji}</p>
        ))}
        </>
    )
}

export default RandomKanji;