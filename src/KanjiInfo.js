export const KanjiInfo = ({ kanjiDetail }) => {
    const { kanji, strokes, meaning, pronounciation, reading, grade} = kanjiDetail || {};

    return kanjiDetail ? (
        <>
            <h3>Name: {kanji}</h3>
            <p>Meaning: {meaning}</p>
            <p>Pronounciation: {pronounciation}</p>
            <p>Reading: {reading}</p>
            <p>Strokes: {strokes}</p>
            <p>Grade: {grade}</p>
        </>
    ) : <p>Loading ...</p>
}