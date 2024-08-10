import React, { useState } from 'react';
import './Quiz.css';
import Result from './Result';
const questions = [
    {
        question: "What amount of bits commonly equals one byte?",
        options: ["12","8","10","4"],
        answer: "8"
    },
    {
        question:"HTML is what type of language?",
        options: ["Markup Language", "Macro Language","Programming Language", "Scripting Language"],
        answer: "Markup Language"
    },
    {
        question: "Which programming language shares its name with an island in Indonesia?",
        options: ["Python", "c++", "Java", "JavaScript"],
        answer: "Java"
    },
    {
        question : "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        options : ["static", "private", "public", "final"],
        answer : "final"
    },
    {
        question : "What is the most preferred image format used for logos in the Wikimedia database?",
        options : [".png",".jpeg",".svg",".gif"],
        answer : ".svg"
    },
    {
        question : "Which computer hardware device provides an interface for all other connected devices to communicate?",
        options : ["Hard Disc","Monitor","Motherboard","CPU"],
        answer : "Motherboard"
    }
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showScore, setShowScore] = useState(false);
   

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

    };

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
           document.getElementById('pre-button').style.display = 'block'


        } else {
            setShowScore(true);
        }

    };

    const handlePrevClick =()=>{
        if (currentQuestionIndex > 0 ) {
            setCurrentQuestionIndex(currentQuestionIndex -1)
            setSelectedOption(null)
          
        } 
        else{
            document.getElementById('pre-button').style.display = 'none'
            alert('You reached the minimum index')
        }
        
    }

    if (showScore) {
        return <Result score={score} totalQuestions={questions.length} />;
    }

    return (
        <div className="quiz-container">
            <div id="question-container">
                <div id="question">{questions[currentQuestionIndex].question}</div>
                <div id="options">
                    {questions[currentQuestionIndex].options.map(option => (
                        <button
                            key={option}
                            className={`option ${selectedOption === option? 
                                (option === questions[currentQuestionIndex].answer ?'selected' : 'selected incorrect'):""}`}
                            onClick={() => handleOptionClick(option)}
                            disabled={selectedOption !== null}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div><div className="buttons">
            <button id='pre-button' onClick={handlePrevClick}>pre⏮️</button>
            <button id="next-button" onClick={handleNextClick} >
                Next⏭️
            </button>
            </div>
        </div>
    );
};

export default Quiz;
