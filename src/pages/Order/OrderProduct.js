import React, { useState } from 'react';
import './OrderProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderProduct({ productInfo, isFetchTrueInfo, setProductInfo }) {
  const [isProduct, setIsProduct] = useState(false);

  const cancelProduct = id => {
    const resultProduct = productInfo.filter(
      productInfo => productInfo.id !== id
    );
    setProductInfo(resultProduct);
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
          {productInfo.map(product => {
            return (
              <div className="productFlexTop" key={product.id}>
                <div className="productFlex">
                  <div className="orderProductImg">
                    <img
                      className="productOrder"
                      src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Img/wholebean/bean01.png"
                      alt="product"
                    />
                  </div>
                  {isFetchTrueInfo && (
                    <div className="orderProductInfo">
                      <p>{product.name}</p>
                      <span className="grayFont">[{product.category}]</span>
                      <br />
                      <spa className="grayFont">
                        수량 : {product.quantity}개
                      </spa>
                      <br />
                      <span className="">{product.price}</span>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="cancelBtn"
                    onClick={() => cancelProduct(product.id)}
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

const test = () => {
  //
};

test();
