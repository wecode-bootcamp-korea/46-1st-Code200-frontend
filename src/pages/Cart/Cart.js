import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuantityBtn from '../../components/QuantityBtn/QuantityBtn';
import './Cart.scss';

function Cart() {
  const [cartList, setCartList] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const navigate = useNavigate();
  let subTotal = 0;
  let shippingFee = 0;
  let totalPrice = 0;
  let query = '';

  useEffect(() => {
    fetchCartList();
  }, []);

  const fetchCartList = () => {
    fetch('http://10.58.52.192:8000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCartList(data.data);
      })
      .catch(error => console.error('error: ', error));
  };

  const addSelectedItems = cartId => {
    // setSelectedItemIds([...selectedItemIds, cartId]);
    if (query.includes(cartId)) {
      console.log('included');
      let lookFor = `cartId=${cartId}`;
      const index = query.indexOf(lookFor);
      console.log(index);
      const test = '&' + lookFor;
      if (index > 0) query = query.replace(test, '');
      else query = query.replace(lookFor, '');
      console.log(query);
      return query;
    }
    if (query.length > 0) query += '&';
    query += `cartId=${cartId}`;
    console.log(query);
  };

  const deleteItem = id => {
    fetch(`http://10.58.52.192:8000/carts?cartId=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => {
        if (response.ok) {
          throw new Error('Delete was not successful');
        }
        setCartList(prevCartList =>
          prevCartList.filter(item => item.cartId !== id)
        );
      })
      .catch(error => console.error('error: ', error));
  };

  const deleteSelected = () => {
    fetch(`http://10.58.52.192:8000/carts?${query}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('error: ', error));
    fetchCartList();
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
        <tbody>
          {cartList.map(data => {
            const itemTotalPrice = Number(data.price) * data.quantity;
            subTotal += itemTotalPrice;
            const itemTotalPriceStr = itemTotalPrice.toLocaleString();
            totalPrice = subTotal + shippingFee;

            return (
              <tr key={data.cartId}>
                <td className="checkbox">
                  <button onClick={() => addSelectedItems(data.cartId)}>
                    v
                  </button>
                </td>
                <td className="thumbnailBox">
                  <Link to="/product-detail">
                    <img
                      src={data.image}
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
                    cartId={data.cartId}
                    userId={data.userId}
                  />
                </td>
                <td className="shippingType">{data.shipping}</td>
                <td className="itemTotalPrice">{itemTotalPriceStr}</td>
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
        </tbody>
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
          <h3>{subTotal.toLocaleString()}</h3>
        </div>
        <h3>+</h3>
        <div className="totalShippingFee">
          <span>총 배송비</span>
          <h3>{shippingFee}</h3>
        </div>
        <h3>=</h3>
        <div className="finalPrice">
          <span>결제예정금액</span>
          <h3>{totalPrice.toLocaleString()}</h3>
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
