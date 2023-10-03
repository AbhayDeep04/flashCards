import React, { useState } from 'react';
import './App.css';
import Card from "./components/Card.jsx";
import FuzzySet from 'fuzzyset';

const App = () => {
  const flashcardsData = [
    {
      question: "What is a flower's purpose? TRY FUZZY ANSWER: Reproduxtion",
      answer: "Reproduction"
    },
    {
      question: "What gas do plants absorb? TRY FUZZY ANSWER: Casbon Dioxide. You may try your own for the ones ahead too!",
      answer: "Carbon dioxide"
    },
    {
      question: "What do plants need for photosynthesis?",
      answer: "Sunlight"
    },
    {
      question: "What do plant roots anchor into?",
      answer: "Soil"
    },
    {
      question: "What part of a plant conducts photosynthesis?",
      answer: "Leaves"
    },
    {
      question: "What do plants release during photosynthesis?",
      answer: "Oxygen"
    },
    {
      question: "What is the process of water movement in plants?",
      answer: "Transpiration"
    },
    {
      question: "What do bees collect from flowers?",
      answer: "Nectar"
    },
    {
      question: "What type of plant stores water in its leaves?",
      answer: "Succulent"
    },
    {
      question: "What do you call a plant grown for its beauty?",
      answer: "Ornamental"
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const checkGuess = () => {
    const correctAnswer = flashcardsData[currentCardIndex].answer.toLowerCase();
    const userGuessLower = userGuess.toLowerCase();
    
    const fs = FuzzySet([correctAnswer]);

    const similarity = fs.get(userGuessLower);

    const threshold = 0.8; 

    if (similarity && similarity[0][0] >= threshold) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
    setShowAnswer(false);
    setUserGuess('');
    setIsCorrect(null);
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcardsData.length) % flashcardsData.length);
    setShowAnswer(false);
    setUserGuess('');
    setIsCorrect(null);
  };

  return (
    <div className='container'>
      <div className='title'>
        <h1>The Ultimate Plant Parent!</h1>
        <h3>How good of a plant parent are you? Test your knowledge of plants!</h3>
        <h4>Number of cards: {flashcardsData.length}</h4>
      </div>
      <div>
        <Card
          question={flashcardsData[currentCardIndex].question}
          answer={flashcardsData[currentCardIndex].answer}
          showAnswer={showAnswer}
          toggleAnswer={toggleAnswer}
        />
        {!showAnswer && (
          <div>
            <input
              type="text"
              placeholder="Enter your guess"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
            />
            <button onClick={checkGuess}>Submit</button>
            {isCorrect === true && <p>Correct!</p>}
            {isCorrect === false && <p>Incorrect!</p>}
          </div>
        )}
        <button onClick={goToPreviousCard}>Previous</button>
        <button onClick={goToNextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;
