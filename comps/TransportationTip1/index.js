import React from 'react';
// import '../FoodTip1/foodtip1.css';
import './foodtip1.css';

const pic3 = require('../TipsIcons1/car.png');

const TransportationTip1 = ({ text1, text2, text3, text4, text5, color }) =>
    <div id="tipbordereee">
        <div id="tipimagearea" style={{ backgroundColor: color }}>
            <img src={pic3} />
            <span id="tiptitle">Walking/Biking to work..</span>
        </div>
        <span id="transportationtiptext">
            {text1}<br></br>
            {text2}<br></br>
            {text3}<br></br>
            {text4}<br></br>
            {text5}<br></br></span>
    </div>;

TransportationTip1.defaultProps = {
    color: "#rgb(129, 248, 198)",
    text1: "🌿Saves gas money",
    text2: "🌿Less pollution is healthy",
    text3: "🌿Decreases stress"
}

export default TransportationTip1;
