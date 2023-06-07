import './Slide.scss';
import React, { useEffect, useState } from 'react';
import SLIDE_LIST from '../Data/SlideList';
import SLIDE_BUTTON_LIST from '../Data/SlideButtonList';

function Slide() {
  const [checked, setChecked] = useState(1);

  const handleRight = () => {
    let slideNumer = checked;
    if (slideNumer === 4) {
      slideNumer = 1;
    } else {
      slideNumer++;
    }
    setChecked(slideNumer);
  };

  const handleLeft = () => {
    let slideNumer = checked;
    if (slideNumer === 1) {
      slideNumer = 4;
    } else {
      slideNumer--;
    }
    setChecked(slideNumer);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

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
            {SLIDE_BUTTON_LIST.map(buttonList => (
              <input
                key={buttonList.id}
                type="radio"
                name="slide"
                id={buttonList.idName}
                onClick={() => setChecked(buttonList.id)}
                checked={checked === buttonList.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
