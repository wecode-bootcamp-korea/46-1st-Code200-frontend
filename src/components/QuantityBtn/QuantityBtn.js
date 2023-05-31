import React from 'react';
import './QuantityBtn.scss';

const QuantityBtn = ({ count, setCount }) => {
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 1) {
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <div className="quantityBtn">
      <button
        onClick={e => {
          decrementCount;
        }}
      >
        -
      </button>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default QuantityBtn;
