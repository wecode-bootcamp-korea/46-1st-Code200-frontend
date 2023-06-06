import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import TAP_LIST from './TapList';
import './WeeklyBest.scss';

function WeeklyBest() {
  const [clicked, setClicked] = useState('taps1');
  const [circle, setCircle] = useState('circle1');

  const [prdList, setPrdList] = useState([]);

  // 위클리 베스트 데이터 받아오기
  useEffect(() => {
    let url = '';
    if (clicked === 'taps1') {
      url = 'http://10.58.52.198:8000/products';
    } else if (clicked === 'taps2') {
      url = 'http://10.58.52.198:8000/products/?subcategoryId=12';
    } else if (clicked === 'taps3') {
      url = 'http://10.58.52.198:8000/products/?subcategoryId=10';
    }

    if (url) {
      fetch(url, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.data);
          setPrdList(data.data);
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
      <div className="prdList">
        {prdList.slice(0, 4).map(prd => {
          return (
            // <ul key={prd.id} className="prdList">
            <ProductCard
              key={prd.id}
              prd={prd}
              prdList={prdList}
              setPrdList={setPrdList}
              imgUrl={prd.imageUrls}
              id={prd.id}
              name={prd.name}
              price={prd.price}
              rating={prd.avgRating}
              numReview={prd.countReview}
            />
            // </ul>
          );
        })}
      </div>

      {/* 
      <div className="prdListWrap">
        {prdList.slice(0, 4).map(prd => {
          return (
            // <ul key={prd.id} className="prdList">
            <ProductCard
              key={prd.id}
              prd={prd}
              prdList={prdList}
              setPrdList={setPrdList}
              imgUrl={prd.imageUrls}
              id={prd.id}
              name={prd.name}
              price={prd.price}
              rating={prd.avgRating}
              numReview={prd.countReview}
            />
            // </ul>
          );
        })}
      </div> */}
    </div>
  );
}
export default WeeklyBest;
