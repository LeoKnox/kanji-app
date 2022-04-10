import React, {useState, useEffect} from 'react';

export const withKanji = (Component, userId) => {
    return props => {
        const [kanji, setKanji] = useState(null);

        useEffect(() => {
            (async () => {
                //const respoonse = await axios.get(`/users/${userId}`);
                const response = [
                    {idkanji_dict:1, kanji:"一", strokes:1, meaning:"one",prounciation:"ichi, itsu",reading:"hito-tsu",grade:1}
                ];
                setKanji(response.data);
        })();
    });

    return <Component {...props} kanji={kanji} />
    }
}