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
    fetch('http://10.58.52.62:7000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartList(data.data))
      .catch(error => console.error('error: ', error));
  };

  const handleSelectedItems = (e, cartId) => {
    const cartIdStr = `cartId=${cartId}`;
    let newSelectedItemIds = [...selectedItemIds];

    if (e.target.checked) {
      newSelectedItemIds.push(cartIdStr);
    } else {
      const idx = newSelectedItemIds.indexOf(cartIdStr);
      if (idx > -1) {
        newSelectedItemIds.splice(idx, 1);
      }
    }
    setSelectedItemIds(newSelectedItemIds);
  };

  // const handleSelectedItems = (e, cartId) => {
  //   const cartIdStr = `cartId=${cartId}`;
  //   let newSelectedItemIds = [];
  //   if (e.target.checked) {
  //     newSelectedItemIds = [...selectedItemIds, cartIdStr];
  //   } else {
  //     const idx = selectedItemIds.indexOf(cartIdStr);
  //     if (idx > -1) {
  //       selectedItemIds.splice(idx, 1);
  //       newSelectedItemIds = selectedItemIds;
  //     }
  //   }
  //   setSelectedItemIds(newSelectedItemIds);
  // };

  // const handleSelectAll = e => {
  //   const selectEachCheckboxes = document.querySelectorAll('.selectEach');
  //   const selectedIds = Array.from(selectEachCheckboxes).map(checkbox => {
  //     checkbox.checked = e.target.checked;
  //     return `cartId=${checkbox.dataset.cartId}`;
  //   });
  //   setSelectedItemIds(e.target.checked ? selectedIds : []);
  // };

  const handleSelectAll = e => {
    if (!e.target.checked) {
      setSelectedItemIds([]);
    } else {
      let aa = [];
      let arr = [...cartList];
      aa = arr.map(item => `cartId=${item.cartId}`);
      setSelectedItemIds(aa);
    }
  };

  useEffect(() => {
    query = selectedItemIds.join('&');
  }, [selectedItemIds]);

  const deleteItem = id => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/cart/data/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        if (res.ok) fetchCartList();
      })
      .catch(error => console.error('error: ', error));
  };

  const deleteAll = () => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/cart/data`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        if (res.ok) fetchCartList();
      })
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
              <input
                type="checkbox"
                className="checkbox selectAll"
                onClick={e => handleSelectAll(e)}
              />
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
                  <input
                    type="checkbox"
                    className="checkbox selectEach"
                    checked={selectedItemIds.includes(`cartId=${data.cartId}`)}
                    onClick={e => handleSelectedItems(e, data.cartId)}
                  />
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
        <button className="deleteSelected">선택상품 삭제</button>
        <button className="deleteAll">장바구니비우기</button>
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
        <Link to="/order">
          <button className="orderAllBtn">전체상품주문</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
