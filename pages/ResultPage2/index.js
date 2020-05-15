import React from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage1 from '../../comps/ResultImage1';
import ResultExplanation1 from '../../comps/ResultExplanation1';
import '../HomePage/page1.css';

const picToShow = require('../../comps/ResultImage1/face2.png')

const ResultPage2 = ({ profpic }) =>
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
        <div class="resultbox second">
            <ResultExplanation1
                text="Wow, you are on the right track but there's still room for improvement. We have some tips to help you out! " />
        </div>

        <Link href="/TipPage1">
            <Button
                width="190px"
                text="Check Tips" />
        </Link>

    </div>

export default ResultPage2;