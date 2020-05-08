import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import TransportationTip1 from '../../comps/TransportationTip1';
import '../HomePage/page1.css';

const TransportationtipPage1 = ({ }) =>
    <div id="tipapp">
        <Header />
        <TransportationTip1 />
        <Link href="/TipPage1">
        <div class="tipbutton">
            <Button
                width="220px"
                text="< Back" />
        </div>
        </Link>
    </div>
    
export default TransportationtipPage1;

