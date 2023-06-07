import React, { useState } from 'react';
import './OrderPay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderPay({ isFetchTrueInfo, point, isTotalPrice }) {
  const [isPay, setIsPay] = useState(false);
  return (
    <div className="orderPay">
      <div className="orderArea">
        <h1 className="hStyle">결제정보</h1>
        <FontAwesomeIcon
          className={isPay ? 'chevronDown' : 'chevronUp'}
          icon={isPay ? faChevronDown : faChevronUp}
          onClick={() => {
            setIsPay(!isPay);
          }}
        />
      </div>
      {!isPay && (
        <div className="orderPayInner">
          <div className="orderPayInfo">
            <span>주문상품</span>
            {isFetchTrueInfo && <span>{isTotalPrice}</span>}
          </div>
          <div className="orderPayInfo">
            <span>배송비</span>
            <span>+0</span>
          </div>
          <div className="orderPayInfo">
            <span>할인/포인트</span>
            {isFetchTrueInfo && <span>-{point}</span>}
          </div>
          <div className="orderInner">
            <span>최종 결제 금액</span>
            {isFetchTrueInfo && <span>{isTotalPrice - point}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPay;
