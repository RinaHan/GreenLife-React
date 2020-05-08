import React from 'react';
import './foodtip1.css';

const pic1 = require('../TipsIcons1/food.png');

const FoodTip1 = ({ text1, text2, text3, text4, text5, color }) =>
    <div id="tipbordereee">
        <div id="tipimagearea" style={{ backgroundColor: color }}>
            <img src={pic1} />
            <span id="tiptitle">Eating homecooked meals..</span>
        </div>
        <span id="tiptext">
            {text1}<br></br>
            {text2}<br></br>
            {text3}<br></br>
            {text4}<br></br>
            {text5}<br></br></span>
    </div>;

FoodTip1.defaultProps = {
    color: "gold",
    text1: "🧀Saves money",
    text2: "🧀Is Healty",
    text3: "🧀Is Sustainable",
    text4: "🧀Is good for the planet",
    text5: "🧀Improves your cooking"
}

export default FoodTip1;

