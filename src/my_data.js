import data from './data.js';
import React, {useEffect, useState} from 'react';

function Single() {
    return (
        <div>
            <p>{data[0]}</p>
        </div>
      );
}

export default Single;