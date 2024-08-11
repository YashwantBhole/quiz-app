import React from 'react';
import './Result.css';

const Result = ({ score, totalQuestions,onRestart,onClose }) => {

    return (

        <>
            <div className="result-container">

                <div className="result-content">
                    <h1 id='score'>You scored <span id='points'>{score}</span> out of<span id='outof'> {totalQuestions}</span></h1>
                </div>
                <div className="buttons">
                <button onClick={onRestart}>Restart</button>
                <button onClick={onClose}>Close</button>
            </div>
            </div>
          
        </>


    );
};

export default Result;
