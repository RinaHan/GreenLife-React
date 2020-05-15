import React from 'react';
import './question3.css';
import './questioncolor3.css';


const pic1 = require('./pic7.png')
const pic2 = require('./pic8.png')
const pic3 = require('./pic9.png')

const Question3 = ({ question, text1, text2, text3, onClick1, onClick2, onClick3}) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid3">
            <div className="iconback first" onClick={onClick1}>
                <img src={pic1} />
                <div className="text">{text1}</div>
            </div>
            <div className="iconback second" onClick={onClick2}>
                <img src={pic2} />
                <div className="text">{text2}</div>
            </div>
            <div className="iconback third" onClick={onClick3}>
                <img src={pic3} />
                <div className="text">{text3}</div>
            </div>
        </div>
    </div>;

function Reset(){
    document.querySelector(".first").style.backgroundColor="rgb(253, 223, 179)";
    document.querySelector(".second").style.backgroundColor="rgb(250, 196, 116)";
    document.querySelector(".third").style.backgroundColor="rgb(250, 143, 56)";
}

function IconClick1(){
    Reset();
    document.querySelector(".first").style.backgroundColor="rgb(233, 204, 160)";
}
function IconClick2(){
    Reset();
    document.querySelector(".second").style.backgroundColor="rgb(230, 177, 97)";
}
function IconClick3(){
    Reset();
    document.querySelector(".third").style.backgroundColor="rgb(228, 121, 33)";
}

Question3.defaultProps = {
    question: "Q3. How did you transport today?",
    text1: "1. Bicycle",
    text2: "2. Bus",
    text3: "3. Car",
    onClick1: IconClick1,
    onClick2: IconClick2,
    onClick3: IconClick3
}

export default Question3;

