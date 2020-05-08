import React from 'react';
import './resultimage1.css';

const defaultProfPic = require('./face1.png');

const ResultImage1 = ({ profpic }) =>
    <div id="resultimage"><img src={profpic} />
    </div>;

ResultImage1.defaultProps = {
    profpic: defaultProfPic,
}

export default ResultImage1;

