import React from 'react';
import '../FoodTip1/foodtip1.css';

const pic2= require('../TipsIcons1/clothing.png');

const ClothingTip1 = ({text1, text2, text3, text4, text5, color}) =>
<div id="tipbordereee">
    <div id="tipimagearea" style={{backgroundColor:color}}>
        <img src={pic2}/>
        <span id="tiptitle">Buying sustainable clothing..</span>
    </div>
    <span id="clothingtiptext">
    {text1}<br></br>
    {text2}<br></br>
    {text3}<br></br>
    {text4}<br></br>
    {text5}<br></br></span>
</div>;

ClothingTip1.defaultProps = {
    color: "paleturquoise",
    text1: "💧Less dependence on imported raw materials",
    text2: "💧Helps promote jobs and industries that are ecofriendly",
    text3: "💧Quality of clothing is usually better",
}

export default ClothingTip1;

