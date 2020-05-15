import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import ResultTitle from '../../comps/ResultTitle';
import TipsIcons1 from '../../comps/TipsIcons1';
import '../HomePage/page1.css';

const TipPage1 = ({ }) =>
    <div id="tipapp">
        <Header />

        <Link href="/ResultPage1">
        <div className="backbutton">
        <BackButton/>
        </div>
        </Link>

        <div id="tiptitle">
        <ResultTitle
          text="Choose Tips!"/>
          </div>
        <TipsIcons1/>
        <Link href="/ResultPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default TipPage1;
