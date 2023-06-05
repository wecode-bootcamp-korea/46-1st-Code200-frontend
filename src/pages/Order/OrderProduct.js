import React, { useState } from 'react';
import './OrderProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderProduct() {
  const [isProduct, setIsProduct] = useState(false);
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
          <div className="orderProductImg">
            <img
              className="productOrder"
              src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Img/wholebean/bean01.png"
              alt="product"
            />
            <div className="orderProductInfo">
              <p>(담곰이)날 안입겠담곰? 반팔 잠옷(BLACK)_SPPPD37U03</p>
              <span className="grayFont">[옵션 : (19)BLACK/M(095)]</span>
              <br />
              <spa className="grayFont">수량 : 1개</spa>
              <br />
              <span className="">39,900</span>
            </div>
          </div>
          <div className="orderInner">
            <span>베송비</span>
            <span>0(무료)</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderProduct;
