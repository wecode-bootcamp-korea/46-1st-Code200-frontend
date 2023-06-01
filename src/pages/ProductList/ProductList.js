import React, { useEffect, useState } from 'react';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/sample.json')
      .then(res => res.json())
      .then(data => {
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
          <button>50,000 ~ 59,000</button>
          <button>60,000 ~ </button>
        </div>
        <div className="roastingFilter option">
          <h5>로스트</h5>
          <button>블론드</button>
          <button>미디엄</button>
          <button>다크</button>
        </div>
        <div className="acidityFilter option">
          <h5>산미</h5>
          <button>상</button>
          <button>중</button>
          <button>하</button>
        </div>
      </aside>

      <main className="main">
        <h3 className="h3">원두</h3>
        {productList.map(product => {
          return (
            <div key={product.id} className="product">
              <a href="#">
                <img
                  src={product.url}
                  alt="coffee bean"
                  className="thumbnail"
                />
              </a>
              <div className="box">
                <a href="#">
                  <p className="name">{product.name}</p>
                </a>
                <p className="price">{product.priceInt.toLocaleString()}</p>
                <p className="rating">★★★★★ {product.rating}</p>
                <p className="review">리뷰 1건</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;
