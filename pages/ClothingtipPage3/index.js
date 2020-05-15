import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import ClothingTip1 from '../../comps/ClothingTip1';
import '../HomePage/page1.css';

const ClothingtipPage3 = ({ }) =>
    <div id="tipapp">
        <Header />
        
        <Link href="/TipPage1">
        <div className="backbutton">
        <BackButton/>
        </div>
        </Link>

        <ClothingTip1
          text1= "💧Encourages those around you to live a more sustainable lifestyle." 
          text2= "💧Showing people the benefits of your lifestyle will encourage them to promote it to their friends." 
        //   text3= "💧It works through positive word of mouth."
          />

        <Link href="/TipPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default ClothingtipPage3;
