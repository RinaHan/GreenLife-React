import React from 'react';
import './homelogo.css';

const homelogoimg = require('./homelogo.png')

const HomeLogo1 = ({ }) =>
    <div id="whole">
        <div></div>
        <div id="homeimage"><img id="homelogoimage" src={homelogoimg} /></div>
    </div>;

// ResultImage.defaultProps = {
//     profpic:defaultProfPic,
// }

export default HomeLogo1;

