import { useState, useEffect } from 'react';
import axios from 'axios';

const KanjiMap = () => {
    const [kanji, setKanji] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { kanji: response } = await axios.get('http://127.0.0.1:8000/');
                console.log(kanji);
                setKanji(response);
            } catch (error) {
                console.error(error);
            }
        setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <>
            <p>test</p>
        </>
    )
};

export default KanjiMap;