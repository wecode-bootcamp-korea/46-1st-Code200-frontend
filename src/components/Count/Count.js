import React from 'react';
import './Count.scss';

const Count = ({ count, setCount }) => {
  const handleCount = value => {
    if (value + count < 1) {
      alert('최소 주문수량은 1개 입니다.');
      return;
    }
    setCount(count + value);
  };

  return (
    <div className="count">
      <div className="quantityBtn">
        <button onClick={() => handleCount(-1)}>-</button>
        <div>{count}</div>
        <button onClick={() => handleCount(1)}>+</button>
      </div>
    </div>
  );
};

export default Count;
