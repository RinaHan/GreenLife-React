import React from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import ResultTitle from '../../comps/ResultTitle';
import ResultImage2 from '../../comps/ResultImage2';
import ResultExplanation2 from '../../comps/ResultExplanation2';
import '../HomePage/page1.css';

const picToShow = require('../../comps/ResultImage/face2.png')

const ResultPage2 = ({profpic}) =>
    <div id="app">
        <Header />
        <ResultTitle />
        <ResultImage2 
        profpic={picToShow}/>
        <div class="resultbox second">
        <ResultExplanation2
            text="Wow, you are on the right track but there's still room for improvement. We have some tips to help you out! "/>
        </div>
    
            <Button
                width="190px"
                text="Check Tips" />
        
    </div>

export default ResultPage2;