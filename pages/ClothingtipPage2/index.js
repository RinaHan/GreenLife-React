import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import ClothingTip1 from '../../comps/ClothingTip1';
import '../HomePage/page1.css';

const ClothingtipPage2 = ({ }) =>
    <div id="tipapp">
        <Header />
        
        <Link href="/TipPage1">
        <div className="backbutton">
        <BackButton/>
        </div>
        </Link>

        <ClothingTip1
          text1= "💧Less dependence on imported raw materials2222"
          text2= "💧Helps promote jobs and industries that are ecofriendly"
          text3= "💧Quality of clothing is usually better"/>

        <Link href="/TipPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default ClothingtipPage2;
