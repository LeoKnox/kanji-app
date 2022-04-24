import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

function KanjiMap() {
    const [loading, setLoading] = useState(true);
    const [kanji, setKanji] = useState();
    
    useEffect(() => {
        const data = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://127.0.0.1:8000/');
                console.log(response);
                setKanji(response);
                console.log(kanji);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        data();
    }, []);

    const changeKanji = (x) => {
        let newData = kanji.sort(() => Math.random() - 0.5).slice(0,6);
        setKanji(newData);
    }

    return (
        <>
        <h1>test</h1>
        <div className="kanjiWrapper">
        </div>
        </>
    )
}

export default KanjiMap;