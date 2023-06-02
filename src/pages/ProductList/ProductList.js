import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.154:8000/products?categoryId=1')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductList(data);
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
          <button>50,000 ~</button>
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
              url={product.imageUrls[0]}
              productName={product.name}
              price={product.price}
              rating={product.avgRating}
              numReview={product.countReview}
            />
            // <div key={product.id} className="product">
            //   <a href="#">
            //     <img
            //       src={product.url}
            //       alt="coffee bean"
            //       className="thumbnail"
            //     />
            //   </a>
            //   <div className="box">
            //     <a href="#">
            //       <p className="name">{product.name}</p>
            //     </a>
            //     <p className="price">{product.priceInt.toLocaleString()}</p>
            //     <p className="rating">★★★★★ {product.rating}</p>
            //     <p className="review">리뷰 1건</p>
            //   </div>
            // </div>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;
