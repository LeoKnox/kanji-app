
const RandomKanji = (kanji) => {
    const displayKanji = kanji.kanji.sort(() => Math.random() - 0.5).slice(0,6);
    console.log(displayKanji);

    return (
        <>
        {displayKanji.map((k, i) => (
            <p key={i} onClick="" className="kanjiCube">{k.kanji}</p>
        ))}
        </>
    )
}

export default RandomKanji;