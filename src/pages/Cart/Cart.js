import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuantityBtn from '../../components/QuantityBtn/QuantityBtn';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import './Cart.scss';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const totalPrice = (cartList.price * cartList.quantity).toLocaleString();
  const [itemIdsToDelete, setItemIdsToDelete] = useState([]);
  //const token =
  //  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE2ODU4Nzc5Mjl9.V7MFmcHgiC4CBGg0WtAxwr19elCJ2Nlvn1tTfSsGbhk';
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://10.58.52.154:8000/carts?userId=14', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCartList(data.data);
      });
  }, []);

  const deleteItem = id => {
    fetch(`http://10.58.52.154:8000/carts/${id}}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Delete was not successful');
        }
      })
      .catch(error => console.error('error: ', error));
  };

  const deleteSelected = () => {
    fetch('http://10.58.52.154:8000/carts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        cartIds: itemIdsToDelete,
      }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Selected data deleted successfully');
        } else {
          console.log('Failed to delete selected data');
        }
      })
      .catch(error => console.error('error: ', error));
  };

  const addItemToDelete = cartId => {
    cartList.map(list => {
      if (list.cartId === cartId) {
        setItemIdsToDelete([...itemIdsToDelete, cartId]);
        console.log(itemIdsToDelete);
      }
      return list;
    });
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
        {cartList.map(data => {
          return (
            <tr key={data.cartId}>
              <td className="checkbox">
                <button onClick={() => addItemToDelete(data.cartId)}>v</button>
              </td>
              <td className="thumbnailBox">
                <Link to="/product-detail">
                  <img
                    src={data.url}
                    alt={`${data.name}`}
                    className="thumbnail"
                  />
                </Link>
              </td>
              <td className="productName">
                <Link to="/product-detail">{data.name}</Link>
              </td>
              <td className="quantity">
                <QuantityBtn
                  quantity={data.quantity}
                  cartList={cartList}
                  setCartList={setCartList}
                  cardId={data.cartId}
                  userId={data.userId}
                />
              </td>
              <td className="shippingType">{data.shipping}</td>
              <td className="totalPrice">{totalPrice}</td>
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
        <button className="deleteSelected" onClick={deleteSelected}>
          선택상품 삭제
        </button>
        <button className="deleteAll" onClick={deleteSelected}>
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
