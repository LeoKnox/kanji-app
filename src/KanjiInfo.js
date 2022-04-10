export const KanjiInfor = ({ user }) => {
    const { kanji, strokes, meaning, pronounciation, reading, grade}

    return kanji ? (
        <>
            <h3>Name: {kanji}</h3>
            <p>Meaning: {meaning}</p>
            <p>Pronounciation: {pronounciation}</p>
            <p>Reading: {reading}</p>
            <p>Grade: {grade}</p>
        </>
    ) : <p>Loading ...</p>
}