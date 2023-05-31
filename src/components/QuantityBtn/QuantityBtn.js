import React, { useState } from 'react';
import './QuantityBtn.scss';

const QuantityBtn = () => {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  return (
    <div className="quantityBtn">
      <button onClick={incrementCount}>+</button>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default QuantityBtn;
