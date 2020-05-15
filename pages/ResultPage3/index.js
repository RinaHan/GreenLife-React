import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage1 from '../../comps/ResultImage1';
import ResultExplanation1 from '../../comps/ResultExplanation1';
import '../HomePage/page1.css';

const picToShow = require('../../comps/ResultImage1/face3.png')

const ResultPage3 = ({ profpic }) =>
    <div id="app">
        <Header />

        <Link href="/QuestionPage3">
            <div className="backbutton">
                <BackButton />
            </div>
        </Link>

        <ResultTitle />
        <ResultImage1
            profpic={picToShow} />
        <div class="resultbox third">
            <ResultExplanation1
                text="You are a sustainable superstar! Looks like you already know the benefits of a sustainable lifestyle. 
            We have some tips on how you can best spread your knowledge to those around you!"/>
        </div>

        <Link href="/TipPage1">
            <Button
                width="190px"
                text="Check Tips" />
        </Link>
    </div>

export default ResultPage3;