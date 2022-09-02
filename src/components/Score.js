import React from 'react';

export default function Score(props) {
  const { score, bestScore } = props;
  return (
    <div>
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {score}</p>
    </div>
  );
}
