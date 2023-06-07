import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ id, imgUrl, name, price, rating, numReview }) => {
  return (
    <div className="product">
      <Link to={`/product-detail/${id}`}>
        <img src={imgUrl} alt="coffee bean" className="thumbnail" />
      </Link>
      <div className="box">
        <Link to={`/product-detail/${id}`}>
          <p className="name">{name}</p>
        </Link>
        <p className="price">{Number(price).toLocaleString()}</p>
        <p className="rating">★★★★★ {rating}</p>
        <p className="review">리뷰 {numReview}건</p>
      </div>
    </div>
  );
};

export default ProductCard;
