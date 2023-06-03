import React, { useState, useEffect } from 'react';
import QuantityBtn from '../../components/QuantityBtn/QuantityBtn';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import './Cart.scss';

function Cart() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.108:8000/carts?userId=10')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductList(data.data);
      });
  }, []);

  const deleteItem = id => {
    fetch(`http://10.58.52.108:8000/carts/${id}}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Delete was not successful');
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <div className="cart">
      <h1 className="header">장바구니</h1>
      <table className="cartTable">
        <thead>
          <tr>
            <th>
              <button>v</button>
            </th>
            <th />
            <th>상품정보</th>
            <th>수량</th>
            <th>배송구분</th>
            <th>합계</th>
            <th />
          </tr>
        </thead>
        {productList.map(data => {
          return (
            <tr key={data.cartId}>
              <td className="checkbox">
                <button>v</button>
              </td>
              <td className="thumbnailBox">
                <a href="#">
                  <img
                    src={data.url}
                    alt={`${data.name}`}
                    className="thumbnail"
                  />
                </a>
              </td>
              <td className="productName">
                <a href="#">{data.name}</a>
              </td>
              <td className="quantity">
                <QuantityBtn
                  count={data.quantity}
                  productList={productList}
                  setProductList={setProductList}
                  id={data.cartId}
                />
              </td>
              <td className="shippingType">{data.shipping}</td>
              <td className="totalPrice">{data.price * data.quantity}</td>
              <td className="deleteItem">
                <button
                  onClick={() => {
                    deleteItem(data.cartId);
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="deleteBtnBox">
        <button>선택상품 삭제</button>
        <button
          onClick={() => {
            deleteItem('');
          }}
        >
          장바구니비우기
        </button>
      </div>
      <div className="priceSummary">
        <div className="totalItemPrice">
          <span>총 상품금액</span>
          <h3>20,000</h3>
        </div>
        <h3>+</h3>
        <div className="totalShippingFee">
          <span>총 배송비</span>
          <h3>0</h3>
        </div>
        <h3>=</h3>
        <div className="finalPrice">
          <span>결제예정금액</span>
          <h3>20,000</h3>
        </div>
      </div>
      <div className="orderBtnBox">
        <button className="orderSelectedBtn">선택상품주문</button>
        <button className="continueShoppingBtn">쇼핑계속하기</button>
        <button className="orderAllBtn">전체상품주문</button>
      </div>
    </div>
  );
}

export default Cart;
