import React from 'react';
import './QuantityBtn.scss';

const QuantityBtn = ({ count, productList, setProductList, id }) => {
  const handleCount = value => {
    const arr = productList.map(list => {
      if (list.id === id) {
        return { ...list, count: list.count + value };
      } else {
        return list;
      }
    });
    setProductList(arr);
  };

  return (
    <div className="quantityBtn">
      <button onClick={() => handleCount(-1)}>-</button>
      <div>{count}</div>
      <button onClick={() => handleCount(1)}>+</button>
    </div>
  );
};

export default QuantityBtn;
