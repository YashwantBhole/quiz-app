import React from 'react';
import './Result.css';

const Result = ({ score, totalQuestions }) => {

    return (
        <>
            <video autoPlay muted loop className="background-video" >
                <source src="/fireworks.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="result-container">

                <div className="result-content">
                    <h1 id='score'>You scored <span id='points'>{score}</span> out of<span id='outof'> {totalQuestions}</span></h1>
                </div>
            </div>
        </>
    );
};

export default Result;
