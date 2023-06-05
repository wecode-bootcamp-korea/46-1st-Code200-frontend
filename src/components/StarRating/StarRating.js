import React, { useState } from 'react';
import './StarRating.scss';

const StarRating = ({
  rating,
  setRating,
  hover,
  setHover,
  reviewRating,
  setReviewRating,
  handleReviewRating,
}) => {
  return (
    <div className="starRating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => {
              setRating(index);
              handleReviewRating(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
