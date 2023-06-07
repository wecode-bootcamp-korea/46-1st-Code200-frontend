import React from 'react';
import './Scroll.scss';

function Scroll() {
  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div className="scroll">
      <div className="scrollBtn">
        <img
          className="scrollUp"
          src="/images/up-arrow.png"
          alt="up"
          onClick={handleUp}
        />
        <img
          className="scrollDown"
          src="/images/down-arrow.png"
          alt="down"
          onClick={handleDown}
        />
      </div>
    </div>
  );
}

export default Scroll;
