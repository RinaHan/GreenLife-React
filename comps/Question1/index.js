import React from 'react';
import './question1.css';
import './questioncolor1.css';

const pic1 = require('./pic1.png')
const pic2 = require('./pic2.png')
const pic3 = require('./pic3.png')

const Question1 = ({ question, text1, text2, text3, onClick1, onClick2, onClick3}) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid1">
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
    document.querySelector(".first").style.backgroundColor="rgb(252, 223, 59)";
    document.querySelector(".second").style.backgroundColor="rgb(252, 175, 59)";
    document.querySelector(".third").style.backgroundColor="rgb(252, 130, 59)";
}

function IconClick1(){
    Reset();
    document.querySelector(".first").style.backgroundColor="rgb(224, 197, 43)";
}
function IconClick2(){
    Reset();
    document.querySelector(".second").style.backgroundColor="rgb(207, 138, 34)";
}
function IconClick3(){
    Reset();
    document.querySelector(".third").style.backgroundColor="rgb(216, 97, 41)";
}

Question1.defaultProps = {
    question: "What are you wearing today?",
    text1: "1.Recycled",
    text2: "2.Cotton",
    text3: "3.Polyester",
    onClick1: IconClick1,
    onClick2: IconClick2,
    onClick3: IconClick3
}

export default Question1;

