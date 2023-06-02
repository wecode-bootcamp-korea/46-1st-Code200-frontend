import React from 'react';

const ProductCard = ({ imgUrl, name, price, rating, numReview }) => {
  return (
    <div className="product">
      <a href="#">
        <img src={imgUrl[0]} alt="coffee bean" className="thumbnail" />
      </a>
      <div className="box">
        <a href="#">
          <p className="name">{name}</p>
        </a>
        <p className="price">{price}</p>
        <p className="rating">★★★★★ {rating}</p>
        <p className="review">리뷰 {numReview}건</p>
      </div>
    </div>
  );
};

export default ProductCard;
