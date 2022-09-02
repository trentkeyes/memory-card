import React from 'react';

export default function Card(props) {
  const { id, name, handleClick } = props;
  return (
    <div>
      <div className="card">
              <div className="card--image" id={id} onClick={handleClick}>
        
      </div><div className="card--text-background">{name}</div>
      </div>

    </div>
  );
}
