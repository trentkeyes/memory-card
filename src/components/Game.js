import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';
import '../styles/style.css';

export default function Game() {
  const [cards, setCards] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffle = (arr) => {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const handleClick = (e) => {
    if (clickedCards.some((card) => card === e.target.id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore((prevScore) => {
        return prevScore + 1;
      });
      if (score >= bestScore) {
        setBestScore((prevBestScore) => {
          return prevBestScore + 1;
        });
      }
    }
    setClickedCards((prevClickedCards) => {
      return [...prevClickedCards, e.target.id];
    });
    setCards((prevCards) => {
      return shuffle(prevCards);
    });
  };

  useEffect(() => {
    setCards((prevCards) => {
      return shuffle(prevCards);
    });
  }, []);

  const cardElements = cards.map((card) => {
    return <Card key={card} id={card} handleClick={handleClick} />;
  });

  console.log(`Clicked cards: ${clickedCards}`, `cards: ${cards}`);

  return (
    <div>
      <nav>
        <h1>Memory Card Game</h1>
        <p>
          Remember what images you've clicked! Get points by clicking on a
          different image.
        </p>
        <Score score={score} bestScore={bestScore} />
      </nav>
      <div className="card--container">{cardElements}</div>
    </div>
  );
}
