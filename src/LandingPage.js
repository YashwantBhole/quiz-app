import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onStart }) => {
    return (
        
        <div className="landing-page">
            <h1 className="landing-title">Welcome to the Quiz App</h1>
            <button className="start-button" onClick={onStart}>
                Start Quiz
            </button>
        </div>
    );
};

export default LandingPage;
