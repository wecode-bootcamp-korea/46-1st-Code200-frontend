import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const skip = searchParams.get('skip');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products?sort=${sort}&limit=${limit}&skip=${skip}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductList(data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, [sort, skip, limit]);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const setSortParams = (key, params) => {
    searchParams.set(key, params);
    setSearchParams(searchParams);
  };

  const appendSortParams = (key, params) => {
    searchParams.append(key, params);
    setSearchParams(searchParams);
  };

  const movePage = pageNumber => {
    searchParams.set('sort', sort);
    searchParams.set('skip', (pageNumber - 1) * 5);
    searchParams.set('limit', 5);
    setSearchParams(searchParams);
  };

  return (
    <div className="productList">
      <aside className="filtering">
        <h4 className="h4">FILTER</h4>
        <div className="priceFilter option">
          <h5>가격</h5>
          <button
            onClick={() => {
              setSortParams();
            }}
          >
            ~ 29,000
          </button>
          <button>30,000 ~ 39,000</button>
          <button>40,000 ~ 49,000</button>
          <button>50,000 ~ </button>
        </div>
        <div className="roastingFilter option">
          <h5>Category</h5>
          <button onClick={() => setSortParams('category', 'smartphones')}>
            Smartphone
          </button>
          <button>Frangrances</button>
          <button>Grocery</button>
        </div>
      </aside>

      <main className="main">
        <h3 className="h3">원두</h3>
        <div className="sortDropDown">
          <button className="dropDownBtn" onClick={toggleDropDown}>
            <span>상품정렬</span>
            <span className="arrow">▼</span>
          </button>
          {isDropDownOpen && (
            <ul className="dropDownContent">
              <li>
                <button onClick={() => setSortParams('sort', 'desc')}>
                  최신순
                </button>
              </li>
              <li>
                <button onClick={() => setSortParams('sort', 'asc')}>
                  인기순
                </button>
              </li>
              <li>
                <button onClick={() => setSortParams('sort', 'review')}>
                  별점순
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className="productContainer">
          {productList.map(product => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                imgUrl={product.image}
                name={product.title}
                price={product.price}
                rating={product.rating.rating}
                numReview={product.rating.count}
              />
            );
          })}
        </div>
        <div>
          <button onClick={() => movePage(1)}>1</button>
          <button onClick={() => movePage(2)}>2</button>
          <button onClick={() => movePage(3)}>3</button>
        </div>
      </main>
    </div>
  );
}

export default ProductList;
