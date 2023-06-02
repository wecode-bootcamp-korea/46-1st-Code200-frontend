import React from 'react';
import './ProductCard';

const ProductCard = ({ key, url, productName, price, rating, numReview }) => {
  return (
    <div className="product">
      <a href="#">
        <img src={url} alt="product thumbnail" className="thumbnail" />
      </a>
      <div className="box">
        <a href="#">
          <p className="name">{productName}</p>
        </a>
        <p className="price">{price.toLocaleString()}</p>
        <p className="rating">★★★★★ {rating}</p>
        <p className="review">리뷰 1건</p>
      </div>
    </div>
  );
};

export default ProductCard;
