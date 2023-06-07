import React, { useEffect, useState } from 'react';
import './WeeklyBest.scss';
import TAP_LIST from '../Data/TapList';

function WeeklyBest() {
  const [clicked, setClicked] = useState('taps1');
  const [circle, setCircle] = useState('circle1');

  const [prdList, setPrdList] = useState([]);

  // 위클리 베스트 데이터 받아오기
  useEffect(() => {
    let url = '';
    if (clicked === 'taps1') {
      url = '/data/bean.json';
    } else if (clicked === 'taps2') {
      url = '/data/beverage.json';
    } else if (clicked === 'taps3') {
      url = '/data/food.json';
    }

    if (url) {
      fetch(url, {
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
              <div className={`${circle === tapList.circle ? 'onRed' : ''}`} />
            </span>
          </li>
        ))}
      </ul>
      {/* 원두 카테고리 top4 */}

      <div className="prdListWrap">
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
  );
}
export default WeeklyBest;
