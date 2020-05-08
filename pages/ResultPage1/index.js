import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage1 from '../../comps/ResultImage1';
import ResultExplanation1 from '../../comps/ResultExplanation1';
import '../HomePage/page1.css';

const picToShow = require('../../comps/ResultImage1/face1.png')

const ResultPage1 = ({ profpic }) =>
    <div id="app">
        <Header />
        <ResultTitle />
        <ResultImage1 />
        <div class="resultbox">
            <ResultExplanation1
                text="Sorry, you contribute to the creation of environmental pollutants. - 
            but don't worry. We have some tips to improve. Check tips to improve! "/>
        </div>
        <Link href="/TipPage1">
            <Button
                width="190px"
                text="Check Tips" />
                </Link>
    </div>
    

export default ResultPage1;