import { useState, useEffect } from 'react';
import axios from 'axios';

const KanjiMap = () => {
    const [kanji, setKanji] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/') 
            .then(function (response) {
                setKanji(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
        <h1>Kanji Fun</h1>
        </>
    )
};

export default KanjiMap;