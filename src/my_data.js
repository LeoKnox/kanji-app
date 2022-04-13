import React, { Component } from 'react';
import data from './data.json';

const datatwo = [{"idkanji_dict":1, "kanji":"一", "strokes":1, "meaning":"one","prounciation":"ichi, itsu","reading":"hito-tsu","grade":1},
{"idkanji_dict":2, "kanji":"二", "strokes":2, "meaning":"two","prounciation":"ni, ji","reading":"futa-tsu","grade":1}]

function Single() {
    return (
        datatwo.map((d, i) =>
            <p key={i}> {d.kanji} : {d.meaning}</p>
        )
    )
}

export default Single;