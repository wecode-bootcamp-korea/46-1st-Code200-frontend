import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div>
      <div className="slide">slide</div>
      <div className="weekly">weekly best</div>
      <div className="newPrd">
        <div className="title">신메뉴</div>
        <div className="newWrap">
          <div className="newBevWrap">
            <a href="@@">
              <img
                className="newBev"
                src="https://github.com/dxxcw/code200-images/blob/main/images/Main/new.png?raw=true"
                alt="newbv"
              />
            </a>
            <div className="description">
              <p> 2023 WEDIYA SUMMER SEASON | 리얼 생 초콜릿 라떼</p>
            </div>
          </div>

          <div className="newFdWrap">
            <a href="@@">
              <img
                className="newFood"
                src="https://github.com/dxxcw/code200-images/blob/main/images/Main/newFood.png?raw=true"
                alt="newfd"
              />
            </a>
            <div className="description">
              <p> 2023 WEDIYA'S NEW CHOICE | 스모어 모어 쿠키</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
