import { useState, useEffect } from 'react';
import axios from 'axios';

const KanjiMap = () => {
    const [kanji, setKanji] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/') 
            .then(function (response) {
                console.log(response.data);
                setKanji(response.data);
                console.log(kanji);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <p>test</p>
        </>
    )
};

export default KanjiMap;