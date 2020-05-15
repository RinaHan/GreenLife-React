import React from 'react';
import './question2.css';
import './questioncolor2.css';

const pic1 = require('./pic4.png')
const pic2 = require('./pic5.png')
const pic3 = require('./pic6.png')

const Question2 = ({ question, text1, text2, text3, onClick1, onClick2, onClick3 }) =>
    <div id="whole">
        <div id="questiontext">{question}</div>
        <div id="picid2">
            <div className="iconback first" onClick={onClick1}>
                <img src={pic1} />
                <div className="text" id="small">{text1}</div>
            </div>
            <div className="iconback second" onClick={onClick2}>
                <img src={pic2} />
                <div className="text" id="small">{text2}</div>
            </div>
            <div className="iconback third" onClick={onClick3}>
                <img src={pic3} />
                <div className="text">{text3}</div>
            </div>
        </div>
    </div>;

function Reset(){
    document.querySelector(".first").style.backgroundColor="rgb(187, 247, 255)";
    document.querySelector(".second").style.backgroundColor="rgb(125, 240, 248)";
    document.querySelector(".third").style.backgroundColor="rgb(45, 215, 245)";
}

function IconClick1(){
    Reset();
    document.querySelector(".first").style.backgroundColor="rgb(122, 219, 223)";
}
function IconClick2(){
    Reset();
    document.querySelector(".second").style.backgroundColor="rgb(79, 218, 223)";
}
function IconClick3(){
    Reset();
    document.querySelector(".third").style.backgroundColor="rgb(31, 193, 221)";
}

Question2.defaultProps = {
    onClick1: IconClick1,
    onClick2: IconClick2,
    onClick3: IconClick3
}

export default Question2;

