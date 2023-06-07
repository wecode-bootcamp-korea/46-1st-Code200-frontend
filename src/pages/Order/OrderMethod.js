import React, { useState } from 'react';
import './OrderMethod.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CARD } from './OrderUiData/card';
import { PAY_METHOD } from './OrderUiData/payMethod';
import { PERIOD } from '../Order/OrderUiData/period';

function OrderMethod() {
  const [isMethod, setIsMethod] = useState(false);
  return (
    <div className="orderMethod">
      <div className="orderArea">
        <h1 className="hStyle">결제수단</h1>
        <FontAwesomeIcon
          className={isMethod ? 'chevronDown' : 'chevronUp'}
          icon={isMethod ? faChevronDown : faChevronUp}
          onClick={() => {
            setIsMethod(!isMethod);
          }}
        />
      </div>
      {!isMethod && (
        <div className="payMethodInner">
          <div className="payMethod">
            {PAY_METHOD.map(pay => {
              return (
                <button className="payMethodBtn" key={pay.id}>
                  {pay.name}
                </button>
              );
            })}
          </div>
          <hr />
          <div className="payMethodBottom">
            <table className="payMethodTable">
              <tr>
                <td className="grayFont">카드선택</td>
                <td>
                  <select className="cardSelect">
                    {CARD.map(card => {
                      return (
                        <option className="message" key={card.id}>
                          {card.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="grayFont">할부기간</td>
                <td>
                  <select className="cardSelect">
                    {PERIOD.map(period => {
                      return (
                        <option className="message" key={period.id}>
                          {period.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
            </table>
            <span className="graySpan">
              법인카드는 무이자 할부 적용이 되지 않습니다.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderMethod;
