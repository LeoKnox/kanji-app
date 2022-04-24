import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

function KanjiMap() {
    const [loading, setLoading] = useState(true);
    const [kanji, setKanji] = useState();
    const [ans, setAns] = useState();

/*    axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setKanji(response.data.sort(() => Math.random() - 0.5).slice(0,6));
            console.log(kanji);
        })
        .catch(function (error) {
            console.log(error);
        })  */
    
    useEffect(() => {
        const data = async () => {
            setLoading(true);
            try {
                const {kanji: response} = await axios.get('http://127.0.0.1:8000/');
                console.log("response");
                setKanji(response);
                setAns(kanji);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        data();
    }, []);

/*    useEffect(() => {
        return () => {
            let i = kanji.sort(() => Math.random() - 0.5).slice(0,6);
            setKanji(i);
            setAns(i[Math.floor(Math.random()*kanji.length)]);
        }
    }, [])  */

    const changeKanji = (x) => {
        if (x === ans.kanji) {
            let newData = kanji.sort(() => Math.random() - 0.5).slice(0,6);
            setAns(newData)
            setKanji(newData);
            setAns(newData[Math.floor(Math.random()*kanji.length)]);
        }
    }

    return (
        <>
        <h3 className="answer">Select Kanji for {ans.meaning}</h3>
        <div className="kanjiWrapper">
            {kanji.map((k, i) => (
                <p key={i} onClick={() => changeKanji(k.kanji)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
}

export default KanjiMap;