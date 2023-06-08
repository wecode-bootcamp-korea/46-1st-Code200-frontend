import React, { useState } from 'react';
import './OrderDisCount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderDisCount({ userInfo, isFetchTrueInfo, point, setIsPoint }) {
  const [isDisCount, setIsDisCount] = useState(false);
  const [pointUse, setPointUse] = useState(false);
  const [pointInput, setPointInput] = useState('');

  const handlePointUse = () => {
    setPointUse(true);
    setIsPoint(pointInput);
  };
  const handlePointInput = e => {
    if (Number(e.target.value) > Number(userInfo[0].point)) {
      alert('사용가능 포인트는 ' + userInfo[0].point + '입니다.');
      setPointInput('');
      return;
    }
    setPointInput(e.target.value);
  };

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
            <input
              className="pointInput"
              value={pointInput}
              onChange={handlePointInput}
            />
            <button
              className="pointButton"
              onClick={() => {
                handlePointUse();
              }}
            >
              적용
            </button>
            {isFetchTrueInfo && (
              <span className="userPoint">
                사용가능 포인트 : {userInfo[0].point} 점
              </span>
            )}
          </div>
          <div className="orderInner">
            <span>적용금액</span>
            {pointUse && <span>-{point}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDisCount;
