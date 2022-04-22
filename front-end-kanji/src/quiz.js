import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/";

function KanjiMap() {
    axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default KanjiMap;