import React from './node_modules/react';
import './homelogo.css';

const homelogoimg = require('./homelogo.png')

const HomeLogo = ({ }) =>
    <div id="whole">
        <div></div>
        <div id="homeimage"><img id="homelogoimage" src={homelogoimg} /></div>
    </div>;

// ResultImage.defaultProps = {
//     profpic:defaultProfPic,
// }

export default HomeLogo;

