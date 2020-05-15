import React from 'react';
import Link from 'next/link';
import Question3 from '../../comps/Question3';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import '../HomePage/page1.css';

const QuestionPage3 = ({}) =>
    <div id="app">
        <Header />

        <Link href="/QuestionPage2">
        <div className="backbutton">
        <BackButton/>
        </div>
        </Link>

        <Question3/>

        <Link href="/ResultPage1">
        <div class="questionbutton">
            <Button
                width="200px"
                text="View Result" />
        </div>
        </Link>
        </div>

export default QuestionPage3;