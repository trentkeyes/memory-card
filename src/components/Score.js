import React from 'react';

export default function Score(props) {
  const { score, bestScore } = props;
  return (
    <div className="scoreboard">
      <p>
        Best Score: <span>{bestScore}</span>
      </p>
      <p>
        Current Score: <span>{score}</span>
      </p>
    </div>
  );
}
