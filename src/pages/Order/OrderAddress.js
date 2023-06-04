import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './OrderAddress.scss';
import './modalShowTop.scss';

import { DELIVERY } from './OrderUiData/delivery';
import { PHONE } from './OrderUiData/phone';
import { MESSAGE } from '../Order/OrderUiData/message';

function OrderAddress() {
  const [isAddress, setIsAddress] = useState(false);

  return (
    <div className="orderAddress">
      <div className="orderArea">
        <h1 className="hStyle">배송지</h1>
        <FontAwesomeIcon
          className={isAddress ? 'chevronDown' : 'chevronUp'}
          icon={isAddress ? faChevronDown : faChevronUp}
          onClick={() => {
            setIsAddress(!isAddress);
          }}
        />
      </div>
      {!isAddress && (
        <div className="orderAddressInner">
          <span className="spanStyle">배송방법 선택</span>
          <div className="selectDelivery">
            {DELIVERY.map(del => {
              return (
                <button className="deliveryBtn" key={del.id}>
                  {del.name}
                </button>
              );
            })}
          </div>
          <hr />
          <div className="selectAddress">
            <input type="radio" name="add" />
            주문자 정보와 동일
            <input type="radio" name="add" checked />
            새로운 배송지
          </div>
          <div className="userAddressInfo">
            <table className="userAddressTable">
              <tr>
                <td className="grayFont">받는사람 *</td>
                <td>
                  <input type="text" className="orderUserName" />
                </td>
              </tr>
              <tr>
                <td className="grayFont">주소 *</td>
                <td>
                  <input type="text" className="orderUserAdd" />
                  <button className="addSearchBtn">주소검색</button>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <input type="text" className="orderUserAdd1" />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <input type="text" className="orderUserAdd2" />
                </td>
              </tr>
              <tr>
                <td className="grayFont">휴대폰 *</td>
                <td>
                  <select className="phoneSelect">
                    {PHONE.map(phone => {
                      return <option key={phone.id}>{phone.name}</option>;
                    })}
                  </select>
                  -<input type="text" className="orderUserPhone1" />
                  -<input type="text" className="orderUserPhone2" />
                </td>
              </tr>
            </table>
            <hr />
            <select className="deliveryMessage">
              {MESSAGE.map(ms => {
                return (
                  <option className="message" key={ms.id}>
                    {ms.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderAddress;
