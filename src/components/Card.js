import React from 'react';

export default function Card(props) {
  const { id, handleClick } = props;
  return (
    <div>
      <div className="card" id={id} onClick={handleClick}>
        {id}
      </div>
    </div>
  );
}
