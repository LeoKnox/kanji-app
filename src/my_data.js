import React, { Component } from 'react';
import data from './data.json';

class Single extends Component {
    render() {
        return (
            this.data = data.map((d) =>
                <p>{d.kanji} : {d.meaning}</p>
            )
        )
    }
}

export default Single;