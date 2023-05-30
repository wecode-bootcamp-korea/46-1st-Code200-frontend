import React, { useState } from 'react';
import './Main.scss';

function Main() {
  const [clicked, setClicked] = useState('');
  const [circle, setCircle] = useState('');
  return (
    <div>
      {/* 위클리 베스트 div 시작 */}
      <div className="slide">slide</div>
      <div className="mainWeeklyBest">
        {/* 위클리 베스트 타이틀 */}
        <div className="mainTitle">위클리 베스트</div>
        {/* 위클리 베스트 카테고리 탭 */}

        <ul className="weeklyTap">
          <li>
            <span
              onClick={() => {
                setClicked('taps1');
                setCircle('circle1');
              }}
              className={`taps1 ${clicked === 'taps1' ? 'on' : ''}`}
            >
              원두
              <div className={`${circle === 'circle1' ? 'onRed' : ''}`} />
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setClicked('taps2');
                setCircle('circle2');
              }}
              className={`taps2 ${clicked === 'taps2' ? 'on' : ''}`}
            >
              음료
              <div className={`${circle === 'circle2' ? 'onRed' : ''}`} />
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setClicked('taps3');
                setCircle('circle3');
              }}
              className={`taps3 ${clicked === 'taps3' ? 'on' : ''}`}
            >
              푸드
              <div className={`${circle === 'circle3' ? 'onRed' : ''}`} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
