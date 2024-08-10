import React, { useState } from 'react';
import Quiz from './Quiz';
import LandingPage from './LandingPage';

const App = () => {
    const [startQuiz, setStartQuiz] = useState(false)


    const handleStartQuiz =()=>{
        setStartQuiz(true)
    }
    return (
        <div className="App">
            {startQuiz?<Quiz/> : <LandingPage onStart={handleStartQuiz}/>}

        </div>
    );
};

export default App;
