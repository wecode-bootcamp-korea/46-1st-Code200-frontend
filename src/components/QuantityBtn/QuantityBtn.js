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
    postCount();
  };

  const postCount = () => {
    fetch('http://10.58.52.133:8000/carts/10/2', {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: count,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
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
