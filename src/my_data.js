import data from './data.js';
import React, {useEffect, useState} from 'react';

const Single = () => {

    return (
        <div>
            {data.map( d =>
                <p>{d.kanji}:{d.meaning}</p>
                )
            }
        </div>
      );
}

export default Single;