import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderInfo from '../Order/OrderInfo';
import OrderAddress from './OrderAddress';
import OrderProduct from './OrderProduct';
import OrderDisCount from './OrderDisCount';
import OrderPay from './OrderPay';
import OrderMethod from './OrderMethod';
import './Order.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

function Order() {
  const [userInfo, setUserInfo] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [isFetchTrueInfo, setisFetchTrueInfo] = useState(false);
  const [point, setIsPoint] = useState('');
  const [isTotalPrice, setIsTotalPrice] = useState(0);

  useEffect(() => {
    // fetch('http://10.58.52.133:8000/products/7', { method: 'GET' })
    fetch('data/order.json')
      .then(res => res.json())
      .then(data => {
        setUserInfo(data.data[0].userInfo);
        setProductInfo(data.data[0].productInfo);
        setisFetchTrueInfo(true);
      });
  }, []);

  useEffect(() => {
    const totalPrice = productInfo.reduce(
      (acc, cur) => acc + cur.price * Number(cur.quantity),
      0
    );
    setIsTotalPrice(totalPrice);
  }, [productInfo]);

  // console.log(totalPrice);
  return (
    <div className="order">
      <div className="orderTop">
        <FontAwesomeIcon className="chevronLeftIcon" icon={faChevronLeft} />
        <Link className="link" to="/">
          <img
            className="logoIcons"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/35f700c12816ed36ec7194d724a60969c7efaad7/images/Main/logo/3.png"
            alt="wediyaLogo"
          />
        </Link>
        <div className="rightInner">
          <FontAwesomeIcon className="bagShoppingIcon" icon={faBagShopping} />
        </div>
      </div>
      <div className="orderTitle">
        <span className="titleSpan">주문/결제</span>
      </div>
      <div className="orderDesc">
        <p className="descPtag">
          &#8251;온라인몰 특성상 실시간 재고변동으로 인해 품절 시 별도의 안내
          업시 취소 될 수 있으며 품절로 인해 결제 취소될 시 문자 또는
          카카오톡으로 결제 취소 안내 문자를 드립니다. <br />
          &#8251;분리 배송 안내 : 주문하신 상품이 2개 이상인 경우 출고지별 재고
          상황에 따라 분리 배송 될 수 있습니다.
        </p>
      </div>
      <OrderInfo userInfo={userInfo} isFetchTrueInfo={isFetchTrueInfo} />
      <OrderAddress userInfo={userInfo} isFetchTrueInfo={isFetchTrueInfo} />
      <OrderProduct
        productInfo={productInfo}
        isFetchTrueInfo={isFetchTrueInfo}
        // totalPrice={totalPrice}
      />
      <OrderDisCount
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        isFetchTrueInfo={isFetchTrueInfo}
        point={point}
        setIsPoint={setIsPoint}
      />
      <OrderPay
        isFetchTrueInfo={isFetchTrueInfo}
        point={point}
        isTotalPrice={isTotalPrice}
      />
      <OrderMethod
        productInfo={productInfo}
        isFetchTrueInfo={isFetchTrueInfo}
      />
      <div className="orderBottom">
        <div className="orderBottomTitle">
          <span className="titleSpan">
            주문 내용을 확인하였으며 약관에 동의합니다.
          </span>
        </div>
        <div className="orderBottomInfo">
          <button className="orderBtn">
            {isTotalPrice - point}원 결제하기
          </button>
          <p className="descPtagBottom">
            - 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을
            동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가 적용되지
            않습니다. 무이자할부를 원하시는 경우 장바구니에서 무이자할부 상품만
            선택하여 주문하여 주시기 바랍니다. <br />
            <br />- 최소 결제 가능 금액은 결제금액에서 배송비를 제외한
            금액입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
