import React from 'react';

export default function Score(props) {
  return (
    <div>
      <p>Best Score: {props.bestScore}</p>
      <p>Current Score: {props.score}</p>
    </div>
  );
}
