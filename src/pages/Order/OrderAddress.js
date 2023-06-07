import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './OrderAddress.scss';
import './modalShowTop.scss';

import { DELIVERY } from './OrderUiData/delivery';
import { PHONE } from './OrderUiData/phone';
import { MESSAGE } from '../Order/OrderUiData/message';

function OrderAddress({ userInfo, isFetchTrueInfo }) {
  const [isAddress, setIsAddress] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const [isAdd, setIsAdd] = useState('add1');

  const handAddress = e => {
    const add = e.target.value;
    setIsAdd(add);
  };

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
                <button
                  className={
                    isDelivery === del.id ? 'selectedBtn' : 'deliveryBtn'
                  }
                  key={del.id}
                  onClick={() => setIsDelivery(del.id)}
                >
                  {del.name}
                </button>
              );
            })}
          </div>
          <hr />
          <div className="selectAddress">
            <label for="add1">
              <input
                id="add1"
                type="radio"
                name="address"
                value="add1"
                checked={isAdd === 'add1'}
                onChange={handAddress}
                className="addInput"
              />
              주문자 정보와 동일
            </label>
            <label for="add2">
              <input
                id="add2"
                type="radio"
                name="address"
                value="add2"
                checked={isAdd === 'add2'}
                onChange={handAddress}
                className="addInput"
              />
              새로운 배송지
            </label>
          </div>
          <div className="userAddressInfo">
            {isAdd === 'add1' && (
              <table className="userAddressTable">
                <tr>
                  <td className="grayFont">받는사람 *</td>
                  <td>
                    {isFetchTrueInfo && (
                      <input
                        type="text"
                        className="userName"
                        value={userInfo[0].name}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="grayFont">주소 *</td>
                  <td>
                    {isFetchTrueInfo && (
                      <input
                        type="text"
                        className="userAdd"
                        value={userInfo[0].address}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    {isFetchTrueInfo && (
                      <input
                        type="text"
                        className="userAdd2"
                        value={userInfo[0].address2}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="grayFont">휴대폰 *</td>
                  <td>
                    {isFetchTrueInfo && (
                      <input
                        type="text"
                        readOnly="true"
                        className="userPhone"
                        value={userInfo[0].phone}
                      />
                    )}
                  </td>
                </tr>
              </table>
            )}
            {isAdd === 'add2' && (
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
            )}
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
