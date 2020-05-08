import React from 'react';
import './question2.css';
import './questioncolor2.css';

const pic1 = require('./pic4.png')
const pic2 = require('./pic5.png')
const pic3 = require('./pic6.png')

const Question2 = ({ question, text1, text2, text3 }) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid2">
            <div className="iconback first">
                <img src={pic1} />
                <div className="text">{text1}</div>
            </div>
            <div className="iconback second">
                <img src={pic2} />
                <div className="text">{text2}</div>
            </div>
            <div className="iconback third">
                <img src={pic3} />
                <div className="text">{text3}</div>
            </div>
        </div>
    </div>;

export default Question2;

