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
    fetch('http://10.58.52.133:8000/carts/10/2', {
      method: 'PATCH',
      body: JSON.stringify({
        quantity: quantity,
        cartId: cartId,
        userId: userId,
      }),
    }).then(response => response.json());
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
