import React from 'react';
import Link from 'next/link';
import Question2 from '../../comps/Question2';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import BackButton from '../../comps/BackButton';
import '../HomePage/page1.css';

const QuestionPage2 = ({}) =>
    <div id="app">
        <Header />

        <Link href="/QuestionPage1">
        <div className="backbutton">
        <BackButton/>
        </div>
        </Link>

        <Question2
            question="Q2. What did you eat today?"
            text1="1. Homemade"
            text2="2. Restaurant"
            text3="3. Fastfood" />

        <Link href="/QuestionPage3">
        <div class="questionbutton">
            <Button />
        </div>
        </Link>

    </div>

export default QuestionPage2;