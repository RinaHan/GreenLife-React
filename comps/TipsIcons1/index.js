import React from 'react';
import Link from 'next/link';
import './tipsicons1.css';

const pic1 = require('./food.png');
const pic2 = require('./clothing.png');
const pic3 = require('./car.png');

const TipsIcons1 = ({ }) =>
    <div id="tipbordereee">
        <Link href="/FoodtipPage2">
            <div className="tipsicons"><img src={pic1} />Food</div>
        </Link>
        <Link href="/ClothingtipPage2">
            <div className="tipsicons"><img src={pic2} />Clothing</div>
        </Link>
        <Link href="/TransportationtipPage2">
            <div className="tipsicons"><img src={pic3} />Transportation</div>
        </Link>
    </div>;

export default TipsIcons1;

