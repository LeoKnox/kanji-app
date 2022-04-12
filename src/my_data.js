export const Single = ({ data }) => {
    const {kanji, meaning } = data;

    return (
        <p>{kanji}: {meaning}</p>
    );
}