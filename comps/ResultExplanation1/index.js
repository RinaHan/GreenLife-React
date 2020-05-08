import React from 'react';
import './resultexplanation1.css';

const ResultExplanation1 = ({ text }) =>
    <div id="resultexplanationtext">{text}
    </div>;

ResultExplanation1.defaultProps = {
    text: "imtirediwanttorestilikemeilikecanada",
}

export default ResultExplanation1;

