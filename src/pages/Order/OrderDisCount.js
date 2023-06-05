import React, { useState } from 'react';
import './OrderDisCount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderDisCount() {
  const [isDisCount, setIsDisCount] = useState(false);
  return (
    <div className="orderDisCount">
      <div className="orderArea">
        <h1 className="hStyle">할인/포인트 </h1>
        <FontAwesomeIcon
          className={isDisCount ? 'chevronDown' : 'chevronUp'}
          icon={isDisCount ? faChevronDown : faChevronUp}
          onClick={() => {
            setIsDisCount(!isDisCount);
          }}
        />
      </div>
      {!isDisCount && (
        <div className="orderDisCountInner">
          <div className="pointDiv">
            <span className="blackSpan">포인트 적용</span>
            <input className="pointInput" />
            <button className="pointButton">적용</button>
          </div>
          <div className="orderInner">
            <span>적용금액</span>
            <span>-0</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDisCount;
