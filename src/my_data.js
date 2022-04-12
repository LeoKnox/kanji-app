import React, { Component } from 'react';
import data from './data.json';

class Single extends Component {
    render() {
        return (
            <p>{data[0].kanji} : {data[0].meaning}</p>
        )
    }
}

export default Single;