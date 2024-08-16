import React, { useEffect, useState } from 'react';
import './Quiz.css';
import Result from './Result';
import questions from './questions.js';


const Quiz = ({category}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showScore, setShowScore] = useState(false);
    
    const categoryQuestions = questions[category];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === categoryQuestions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

    };

    const handleNextClick = () => {
        if (currentQuestionIndex < categoryQuestions.length - 1) {

            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);

        } else {
            setShowScore(true);
        }

    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0)
        setScore(0)
        setSelectedOption(null)
        setShowScore(false)

    }

    const handleClose = () => {
        window.close(true);
     
    }

    useEffect(() => {
            const question = document.getElementById('question')
            if(question){

                question.classList.remove('animate')
                void question.offsetWidth;
                question.classList.add('animate')
            }
  
    }, [currentQuestionIndex]);

    if (showScore) {
        return <Result score={score} totalQuestions={categoryQuestions.length} onRestart={handleRestart} onClose={handleClose} />;
    }



    return (
        <div className="quiz-container">
            <div id="question-container">
                <div id="question" className="question animate">{categoryQuestions[currentQuestionIndex].question}</div>
                <div id="options">
                    {categoryQuestions[currentQuestionIndex].options.map(option => (
                        <button
                            key={option}
                            className={`option ${selectedOption === option ?
                                (option === categoryQuestions[currentQuestionIndex].answer ? 'selected' : 'selected incorrect') : ""}`}
                            onClick={() => handleOptionClick(option)}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div><div className="next-button">

                <button id="next-button" onClick={handleNextClick} disabled={selectedOption === null}>
                    {currentQuestionIndex < categoryQuestions.length - 1 ? 'Next⏭️' : 'Submit'}

                </button>
            </div>
        </div>
    );
};

export default Quiz;
