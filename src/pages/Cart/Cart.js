import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuantityBtn from '../../components/QuantityBtn/QuantityBtn';
import './Cart.scss';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const totalPrice = (cartList.price * cartList.quantity).toLocaleString();
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  //const token =
  //  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE2ODU4Nzc5Mjl9.V7MFmcHgiC4CBGg0WtAxwr19elCJ2Nlvn1tTfSsGbhk';
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

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

  const addSelectedItems = cartId => {
    // cartList.map(list => {
    //   if (list.cartId === cartId) {
    //     setSelectedItemIds([...selectedItemIds, cartId]);
    //     console.log(selectedItemIds);
    //   }
    //   return list;
    // });
    setSelectedItemIds([...selectedItemIds, cartId]);
    console.log(selectedItemIds);
  };

  const deleteItem = id => {
    fetch(`http://10.58.52.237:8000/carts/${id}}`, {
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
    fetch('http://10.58.52.237:8000/carts', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        cartIds: selectedItemIds,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('error: ', error));
  };

  // const orderSelected = () => {
  //   fetch('http://10.58.52.237:8000/', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       id: selectedItemIds,
  //     }),
  //   }).then(response => response.json());
  // };

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
                <button onClick={() => addSelectedItems(data.cartId)}>v</button>
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
        <button
          className="continueShoppingBtn"
          onClick={() => {
            navigate(-1);
          }}
        >
          쇼핑계속하기
        </button>
        <button className="orderAllBtn">전체상품주문</button>
      </div>
    </div>
  );
}

export default Cart;
