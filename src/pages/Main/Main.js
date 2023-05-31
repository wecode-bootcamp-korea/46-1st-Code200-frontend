import React, { useEffect, useState } from 'react';
import './Main.scss';
import RedDot from '../../components/RedDot/RedDot';

function Main() {
  const [clicked, setClicked] = useState('taps1');
  const [circle, setCircle] = useState('circle1');

  const [prdList, setPrdList] = useState([]);

  // 위클리 베스트 데이터 받아오기
  useEffect(() => {
    if (clicked === 'taps1') {
      fetch('/data/bean.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          setPrdList(data);
        });
    } else if (clicked === 'taps2') {
      fetch('/data/beverage.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          setPrdList(data);
        });
    } else if (clicked === 'taps3') {
      fetch('/data/food.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          setPrdList(data);
        });
    }
  }, [clicked]);
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
        {/* 원두 카테고리 top4 */}

        <div className="prdListWrap">
          {' '}
          {prdList.map(prd => {
            return (
              <ul key={prd.id} className="prdList">
                <li className="prdBox">
                  <div className="box">{prd.text}</div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Main;
