import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

function KanjiMap() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://127.0.0.1:8000/');
                setData(response);
                console.log(data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    const changeKanji = (x) => {
        //let newData = kanji.sort(() => Math.random() - 0.5).slice(0,6);
        //setKanji(newData);
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