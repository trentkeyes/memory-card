import React, { useState } from 'react';
import Card from './Card';
import '../styles/style.css';

export default function Game() {
  const [cards, setCards] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  const [clickedCards, setClickedCards] = useState([]);

  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    if (clickedCards.some((card) => card === e.target.id)) {
      setScore(0);
    } else {
      setScore((prevScore) => {
        return prevScore + 1;
      });
    }
    setClickedCards((prevClickedCards) => {
      return [...prevClickedCards, e.target.id];
    });
    console.log(score, clickedCards);
    // shuffle array
  };

  const cardElements = cards.map((card) => {
    return <Card key={card} id={card} handleClick={handleClick} />;
  });

  return (
    <div>
      <div className="container">{cardElements}</div>
    </div>
  );
}
