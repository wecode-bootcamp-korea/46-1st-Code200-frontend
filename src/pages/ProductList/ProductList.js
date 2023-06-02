import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.154:8000/products?categoryId=1')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductList(data.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div className="productList">
      <aside className="filtering">
        <h4 className="h4">FILTER</h4>
        <div className="priceFilter option">
          <h5>가격</h5>
          <button onClick={() => {}}>~ 29,000</button>
          <button>30,000 ~ 39,000</button>
          <button>40,000 ~ 49,000</button>
          <button>50,000 ~ </button>
        </div>
        <div className="roastingFilter option">
          <h5>로스트</h5>
          <button>블론드</button>
          <button>미디엄</button>
          <button>다크</button>
        </div>
      </aside>

      <main className="main">
        <h3 className="h3">원두</h3>
        {productList.map(product => {
          return (
            <ProductCard
              key={product.id}
              imgUrl={product.imageUrls}
              name={product.name}
              price={product.price}
              rating={product.avgRating}
              numReview={product.countReview}
            />
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;
