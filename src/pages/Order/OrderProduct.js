import React, { useState } from 'react';
import './OrderProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderProduct({
  cartList,
  isFetchTrueInfo,
  setCartList,
  fetchCartList,
}) {
  const [isProduct, setIsProduct] = useState(false);
  const cancelProduct = id => {
    fetch(`http://10.58.52.62:7000/carts?cartId=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        if (res.ok) fetchCartList();
      })
      .catch(error => console.error('error: ', error));
    const resultProduct = cartList.filter(cartItem => cartItem.cartId !== id);
    setCartList(resultProduct);
  };

  return (
    <div className="orderProduct">
      <div className="orderArea">
        <h1 className="hStyle">주문 상품</h1>
        <FontAwesomeIcon
          className={isProduct ? 'chevronDown' : 'chevronUp'}
          icon={isProduct ? faChevronDown : faChevronUp}
          onClick={() => {
            setIsProduct(!isProduct);
          }}
        />
      </div>
      {!isProduct && (
        <div className="orderProductInner">
          {cartList.map(product => {
            return (
              <div className="productFlexTop" key={product.cartId}>
                <div className="productFlex">
                  <div className="orderProductImg">
                    <img
                      className="productOrder"
                      src={product.image}
                      alt="product"
                    />
                  </div>
                  {isFetchTrueInfo && (
                    <div className="orderProductInfo">
                      <p>{product.name}</p>
                      <br />
                      <spa className="grayFont">
                        수량 : {product.quantity}개
                      </spa>
                      <br />
                      <span className="">{Math.floor(product.price)}</span>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="cancelBtn"
                    onClick={() => cancelProduct(product.cartId)}
                  >
                    ✖
                  </button>
                </div>
              </div>
            );
          })}

          <div className="orderInner">
            <span>배송비</span>
            <span>0(무료)</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderProduct;
