import React from 'react';
import './New.scss';
import NEW_LIST from './NewList';

function New() {
  return (
    <div>
      <div className="slide">slide</div>
      <div className="weekly">weekly best</div>

      {/* 신메뉴 Wrap */}
      <div className="newPrd">
        <div className="title">신메뉴</div>
        <div className="newWrap">
          {/* 신메뉴 이미지 */}
          {NEW_LIST.map(newList => (
            <div key={newList.id} className={newList.classWarp}>
              <div className="imgWrapper">
                <img
                  className={newList.name}
                  src={newList.src}
                  alt={newList.alt}
                />
              </div>
              <p className="description">{newList.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New;
