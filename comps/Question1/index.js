import React from 'react';
import './question1.css';
import './questioncolor1.css';

const pic1 = require('./pic1.png')
const pic2 = require('./pic2.png')
const pic3 = require('./pic3.png')

const Question1 = ({ question, text1, text2, text3, }) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid1">
            <div className="iconback first" >
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

// function IconClick(){

// }

Question1.defaultProps = {
    question: "What are you wearing today?",
    text1: "1.Recycled",
    text2: "2.Cotton",
    text3: "3.Polyester"
}

export default Question1;

