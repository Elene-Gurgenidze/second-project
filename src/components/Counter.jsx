import React from 'react';

export default function Counter({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="counter" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <button onClick={onDecrease} style={{ cursor: 'pointer' }}>-</button>
      
      <span style={{ color: 'black', fontWeight: 'bold' }}>
        {quantity ? quantity : 1} 
      </span>
      
      <button onClick={onIncrease} style={{ cursor: 'pointer' }}>+</button>
    </div>
  );
}