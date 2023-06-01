import React, { useEffect, useState } from 'react';
import './WeeklyBest.scss';
import RedDot from '../../components/RedDot/RedDot';
import TAP_LIST from './tapList';

function WeeklyBest() {
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
          {TAP_LIST.map(tapList => (
            <li key={tapList.id}>
              <span
                onClick={() => {
                  setClicked(tapList.clicked);
                  setCircle(tapList.circle);
                }}
                className={`${tapList.clicked} ${
                  clicked === tapList.clicked ? 'on' : ''
                }`}
              >
                {tapList.name}
                <div
                  className={`${circle === tapList.circle ? 'onRed' : ''}`}
                />
              </span>
            </li>
          ))}
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
export default WeeklyBest;
