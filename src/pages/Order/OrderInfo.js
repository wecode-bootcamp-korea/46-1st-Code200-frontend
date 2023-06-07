import React, { useState } from 'react';
import './OrderInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderInfo() {
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
              <input type="text" className="userName" defaultValue="김유저" />
            </td>
          </tr>
          <tr>
            <td className="grayFont">휴대전화 *</td>
            <td>
              <input
                type="text"
                className="userPhone"
                defaultValue="010-1234-1234"
              />
            </td>
          </tr>
          <tr>
            <td className="grayFont">이메일</td>
            <td className="">
              <input
                type="text"
                className="userEmail"
                defaultValue="wecode@wecode.com"
              />
            </td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default OrderInfo;
