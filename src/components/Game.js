import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';
import characters from '../seinfeld-characters';
import '../styles/style.css';

export default function Game() {
  const [cards, setCards] = useState(characters);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffle = (arr) => {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const play = (e) => {
    if (clickedCards.some((card) => card.id === e.target.id)) {
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

  const cardElements = cards.map((card) => {
    return (
      <Card
        key={card.id}
        id={`card${card.id}`}
        name={card.name}
        handleClick={play}
      />
    );
  });

  // useEffect(() => {
  //   setCards((prevCards) => {
  //     return shuffle(prevCards);
  //   });
  // }, []);

  console.log(`Clicked cards: ${clickedCards}`, `cards: ${cards}`);

  return (
    <div>
      <nav>
        <h1>Seinfeld Memory Game</h1>
        <p>
          What's the deal with the human memory? First you think you haven't
          already clicked on the character, then you lose your streak! You
          stupid idiot! How hard is it to click on a unique character 16 times
          in a row?
        </p>
        <Score score={score} bestScore={bestScore} />
      </nav>
      <div className="cards--container">{cardElements}</div>
    </div>
  );
}
