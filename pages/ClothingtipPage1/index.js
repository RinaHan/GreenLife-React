import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import ClothingTip1 from '../../comps/ClothingTip1';
import '../HomePage/page1.css';

const ClothingtipPage1 = ({ }) =>
    <div id="tipapp">
        <Header />
        
        <div className="backbutton">
        <BackButton/>
        </div>

        <ClothingTip1/>
        <Link href="/TipPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default ClothingtipPage1;
