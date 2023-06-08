import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import TAP_LIST from '../Data/TapList';
import './WeeklyBest.scss';

function WeeklyBest() {
  const [clicked, setClicked] = useState('taps1');
  const [circle, setCircle] = useState('circle1');
  const [prdList, setPrdList] = useState([]);

  // 위클리 베스트 데이터 받아오기
  useEffect(() => {
    let url = '';
    if (clicked === 'taps1') {
      url = `${process.env.REACT_APP_SERVER_HOST}/products/?categoryId=2`;
    } else if (clicked === 'taps2') {
      url = `${process.env.REACT_APP_SERVER_HOST}/products/?categoryId=3&subcategoryId=12`;
    } else if (clicked === 'taps3') {
      url = `${process.env.REACT_APP_SERVER_HOST}/products/?categoryId=3&subcategoryId=10`;
    }

    if (url) {
      fetch(url, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          setPrdList(data.data.products);
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
        {prdList.slice(0, 4).map((prd, index) => {
          const { productId, imageUrls, name, price, avgRating, countReview } =
            prd;
          return (
            <div key={productId}>
              <div className="rank">
                <span className="rankNum">{index + 1}</span>
              </div>

              <ProductCard
                prdList={prdList}
                setPrdList={setPrdList}
                imgUrl={imageUrls}
                id={productId}
                name={name}
                price={price}
                rating={avgRating}
                numReview={countReview}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default WeeklyBest;
