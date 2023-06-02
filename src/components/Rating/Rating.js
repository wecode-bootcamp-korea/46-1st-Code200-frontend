import React, { useState } from 'react';
import './Rating.scss';

const Rating = () => {
  const [star, setStar] = useState('☆');
  const [rating, setRating] = useState(0);

  return (
    <div className="rating">
      <button id="1" onClick={() => console.log('1')}>
        {star}
      </button>
      <button id="2" onClick={() => console.log(2)}>
        {star}
      </button>
      <button id="3">{star}</button>
      <button id="4">{star}</button>
      <button id="5">{star}</button>
    </div>
  );
};

export default Rating;
