import React from 'react';
import './question3.css';
import './questioncolor3.css';


const pic1 = require('./pic7.png')
const pic2 = require('./pic8.png')
const pic3 = require('./pic9.png')

const Question3 = ({ question, text1, text2, text3 }) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid3">
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

Question3.defaultProps = {
    question: "Q3. What did you transport today?",
    text1: "1. Bicycle",
    text2: "2. Bus",
    text3: "3. Car"
}

export default Question3;

