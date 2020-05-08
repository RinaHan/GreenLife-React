import React from 'react';
import Header from '../comps/Header';
import HomeLogo from '../comps/HomeLogo1';
import Button from '../comps/Button';
import HomeText from '../comps/HomeText';
import Question1 from '../comps/Question1';
import Question2 from '../comps/Question2';
import Question3 from '../comps/Question3';
import ResultTitle from '../comps/ResultTitle';
import ResultImage1 from '../comps/ResultImage1';
import ResultExplanation1 from '../comps/ResultExplanation1';
import TipsIcons1 from '../comps/TipsIcons1';
import FoodTip1 from '../comps/FoodTip1';
import ClothingTip1 from '../comps/ClothingTip1';
import TransportationTip1 from '../comps/TransportationTip1';
import './qpages.css';



export default {
    title: 'Comps',
    component: null,
}

export const Headerr = () =>
    <div>
        <Header />
    </div>

export const HomeLogoo = () =>
    <div>
        <HomeLogo />
    </div>

export const HomeTextt = () =>
<div>
    <HomeText />
</div>

export const QuestionComp1 = () =>
    <div>
        <Question1 />
    </div>

export const QuestionComp2 = () =>
    <div>
        <Question2
            question="What did you eat today?"
            text1="Homemade"
            text2="Restaurant"
            text3="Fastfood" />
    </div>

export const QuestionComp3 = () =>
    <div>
        <Question3
            question="What did you transport today?"
            text1="Bicycle"
            text2="Bus"
            text3="Car" />
    </div>

export const Buttonn = () =>
<div>
    <Button />
</div>

export const ResultTitlee = () =>
<div>
    <ResultTitle />
</div>

export const ResultImage1e = () =>
<div>
    <ResultImage1 />
</div>

export const ResultExplanation1n = () =>
<div>
    <ResultExplanation1 />
</div>

export const TipsIcons1s = () =>
<div>
    <TipsIcons1 />
</div>

export const FoodTip1p = () =>
<div>
    <FoodTip1 />
</div>

export const ClothingTip1p = () =>
<div>
    <ClothingTip1 />
</div>

export const TransportationTip1p = () =>
<div>
    <TransportationTip1 />
</div>