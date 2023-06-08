import React from 'react';
import './QuantityBtn.scss';

const QuantityBtn = ({ quantity, cartList, setCartList, cartId, userId }) => {
  const handleCount = value => {
    const arr = cartList.map(list => {
      if (list.cartId === cartId) {
        return { ...list, quantity: list.quantity + value };
      } else {
        return list;
      }
    });
    setCartList(arr);
    postQuantity();
  };

  const postQuantity = () => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/carts/${cartId}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    });
  };

  return (
    <div className="quantityBtn">
      <button onClick={() => handleCount(-1)}>-</button>
      <div>{quantity}</div>
      <button onClick={() => handleCount(1)}>+</button>
    </div>
  );
};

export default QuantityBtn;
