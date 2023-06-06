import React, { useState } from 'react';
import './OrderInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderInfo({ userInfo, isFetchTrueInfo }) {
  const [isInfo, setIsInfo] = useState(false);
  return (
    <div className="orderInfo">
      <div className="orderArea">
        <h1 className="hStyle">주문자</h1>
        <FontAwesomeIcon
          className={isInfo ? 'chevronDown' : 'chevronUp'}
          icon={isInfo ? faChevronDown : faChevronUp}
          onClick={() => {
            setIsInfo(!isInfo);
          }}
        />
      </div>
      {!isInfo && (
        <table className="userInfoTable">
          <tr>
            <td className="grayFont">주문자 *</td>
            <td>
              {isFetchTrueInfo && (
                <input
                  type="text"
                  readOnly="true"
                  className="userName"
                  value={userInfo[0].name}
                />
              )}
            </td>
          </tr>
          <tr>
            <td className="grayFont">휴대전화 *</td>
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
          <tr>
            <td className="grayFont">이메일</td>
            <td>
              {isFetchTrueInfo && (
                <input
                  type="text"
                  readOnly="true"
                  className="userEmail"
                  value={userInfo[0].email}
                />
              )}
            </td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default OrderInfo;
