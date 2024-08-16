import React, { useState } from 'react';
import Quiz from './Quiz';
import LandingPage from './LandingPage';


const App = () => {
    const [startQuiz, setStartQuiz] = useState(false)
    const [selectedCategory,setSelectedCategory] = useState(null)


   
    const handleCategorySelect =(category)=>{
       setSelectedCategory(category)
       setStartQuiz(true);
    }
    return (
        <div className="App">
            {/* {startQuiz?<Quiz/> : <LandingPage onStart={handleStartQuiz} onCategorySelect={handleCategorySelect}/>    } */}
             {!selectedCategory && (
                <LandingPage onCategorySelect={handleCategorySelect} /> 
             )}
      {startQuiz && <Quiz category={selectedCategory} />}
     
        </div>
    );
};

export default App;
