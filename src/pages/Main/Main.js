import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div>
      <div className="slide">slide</div>
      <div className="weekly">weekly best</div>
      <div className="newPrd">
        <div className="title">신메뉴</div>
        <a href="@@">
          <img
            className="newBev"
            src="https://github.com/dxxcw/code200-images/blob/main/images/Main/new.png?raw=true"
            alt="newprd"
          />
        </a>
      </div>
    </div>
  );
}

export default Main;
