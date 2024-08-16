import React, { useState } from 'react';
import './LandingPage.css';
import html from './Assets/html5.jpg'
import css from './Assets/css.jpg'
import js from './Assets/js.jpg'
import c from './Assets/c.png'
import cpp from './Assets/cpp.png'
 import java from './Assets/java.jpeg'
import python from './Assets/python.jpeg'
import sql from './Assets/sql.jpeg'

const LandingPage = ({ onCategorySelect }) => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory,setSelectedCategory] = useState(null)

    const handleImageClick = (category) => {
        setSelectedImage(category);
        setSelectedCategory(category)
    
        // For example: navigate(`/page/${imageName}`);
    };

    const onStart=()=>{
        if(selectedCategory){
            onCategorySelect(selectedCategory);
        }
        else{
            window.alert("Please select category to start Quiz")
        }
    }

    const images = [
        { name: 'HTML', questions: 20, src:html ,category : 'html'},
        { name: 'CSS', questions: 20, src: css ,category : 'css'},
        { name: 'JavaScript', questions: 20, src: js,category: 'js' },
        { name: 'C Language', questions: 20, src: c ,category : 'cLang'},
        { name: 'Python', questions: 20, src: python ,category : 'python'},
        { name: 'Java', questions: 20, src: java,category: 'java' },
        { name: 'CPP', questions: 20, src: cpp ,category : 'cpp'},
        { name: 'MySQL', questions: 20, src: sql ,category : 'sql'},
    ];


    return (
        <>
            <h1 className="landing-title">Welcome to the Quiz App</h1>
            <div className="container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`card ${selectedImage && selectedImage !== image.category? 'blur' : ''}`}
                        onClick={() => handleImageClick(image.category)}
                    >
                        <img src={image.src} alt={image.category} />
                        <div className="content">
                            <h3>{image.name}</h3>
                            <p>{image.questions} Questions</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="landing-page">

                <button className="start-button" onClick={onStart}>
                    Start Quiz
                </button>
            </div>


        </>
    );
};

export default LandingPage;
