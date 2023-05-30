import './Main.scss';
import React, { useState } from 'react';
import SLIDE_LIST from './Slide/SlideList';

function Main() {
  const [checked, setChecked] = useState(1);

  const handleRight = evnet => {
    let slideNumer = checked;
    if (slideNumer === 4) {
      slideNumer = 1;
    } else {
      slideNumer++;
    }
    setChecked(slideNumer);
  };

  const handleLeft = evnet => {
    let slideNumer = checked;
    if (slideNumer === 1) {
      slideNumer = 4;
    } else {
      slideNumer--;
    }
    setChecked(slideNumer);
  };

  return (
    <div className="main">
      <div className="slideWrap">
        <div className="slidee">
          <ul
            className="slideList"
            style={{ transform: `translateX(-${(checked - 1) * 100}%)` }}
          >
            {SLIDE_LIST.map(slide => (
              <li key={slide.id}>
                <a>
                  <label
                    htmlFor={slide.leftLabel}
                    className="left"
                    onClick={handleLeft}
                  />
                  <img src={slide.img} alt={slide.alt} />
                  <label
                    htmlFor={slide.rightLabel}
                    className="right"
                    onClick={handleRight}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="buttons">
            <input
              type="radio"
              name="slide"
              id="slide01"
              onClick={() => setChecked(1)}
              checked={checked === 1}
            />
            <input
              type="radio"
              name="slide"
              id="slide02"
              onClick={() => setChecked(2)}
              checked={checked === 2}
            />
            <input
              type="radio"
              name="slide"
              id="slide03"
              onClick={() => setChecked(3)}
              checked={checked === 3}
            />
            <input
              type="radio"
              name="slide"
              id="slide04"
              onClick={() => setChecked(4)}
              checked={checked === 4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
