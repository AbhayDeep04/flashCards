import React, { useState } from 'react';
import './App.css';
import Card from "./components/card.jsx";

const App = () => {
  const flashcardsData = [
    {
      question: "What is photosynthesis?",
      answer: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll."
    },
    {
      question: "How often should I water my succulents?",
      answer: "Succulents prefer to dry out between watering, so it's best to water them thoroughly when the top inch of soil is dry."
    },
    {
      question: "What is the ideal temperature range for most houseplants?",
      answer: "Most houseplants thrive in temperatures between 65°F to 75°F (18°C to 24°C)."
    },
    {
      question: "What are the benefits of using a well-draining potting mix?",
      answer: "A well-draining potting mix prevents root rot by allowing excess water to drain away from plant roots, ensuring better aeration and healthy growth."
    },
    {
      question: "How can I propagate a snake plant?",
      answer: "Snake plants can be propagated by dividing the rhizomes and repotting them into separate containers."
    },
    {
      question: "What is the main purpose of fertilizing plants?",
      answer: "Fertilizing provides essential nutrients to plants, promoting healthy growth, and enhancing their ability to produce flowers and fruits."
    },
    {
      question: "What is the best lighting for indoor herbs?",
      answer: "Indoor herbs typically require at least 6 hours of direct sunlight each day or bright, indirect light to thrive."
    },
    {
      question: "How do I control common indoor plant pests like aphids?",
      answer: "Aphids can be controlled by using insecticidal soap, neem oil, or a strong jet of water to dislodge them from the plant."
    },
    {
      question: "What is the purpose of pruning in gardening?",
      answer: "Pruning helps remove dead or diseased plant parts, shape the plant, and encourage new growth, ultimately promoting a healthier and more attractive plant."
    },
    {
      question: "What is the recommended humidity level for tropical houseplants?",
      answer: "Tropical houseplants thrive in humidity levels between 50% to 60%. You can increase humidity by misting the plant or using a humidity tray."
    }
  ];
  

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true);
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const getRandomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcardsData.length);
    } while (newIndex === currentCardIndex);
  
    setCurrentCardIndex(newIndex);
  
    if (showAnswer) {
      toggleAnswer();
    }
  };
  



  return (
    <div className='container'>
      <div className='title'>
        <h1>The Ultimate Plant Parent!</h1>
        <h3>How good of a plant parent are you? Test all of your planty knowledge here!</h3>
        <h4>Number of cards: {flashcardsData.length}</h4>
      </div>
      <div>
        <Card
          question={flashcardsData[currentCardIndex].question}
          answer={flashcardsData[currentCardIndex].answer}
          showAnswer={showAnswer}
          toggleAnswer={toggleAnswer}
        />
        <button onClick={getRandomCard}>Next</button>
      </div>
    </div>
  );
}

export default App;
