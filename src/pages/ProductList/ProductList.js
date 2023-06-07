import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.scss';

function ProductList() {
  const [dataList, setDataList] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const subcategory = searchParams.getAll('subcategoryId');

  useEffect(() => {
    const query = searchParams.toString();

    fetch(`http://10.58.52.198:8000/products/?${query}`)
      .then(res => res.json())
      .then(data => {
        setDataList(data.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
    defaultParams();
  }, [searchParams]);

  // const pageBtnArr =

  const defaultParams = () => {
    searchParams.set('categoryId', 2);
    searchParams.set('limit', 12);
    setSearchParams(searchParams);
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const setSortParams = (key, params) => {
    searchParams.set(key, params);
    setSearchParams(searchParams);
  };

  const filterByPrice = (selectedMinPrice, selectedMaxPrice) => {
    const isSelected =
      selectedMinPrice === Number(minPrice) &&
      selectedMaxPrice === Number(maxPrice);

    if (isSelected) {
      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');
    } else {
      searchParams.set('minPrice', selectedMinPrice);
      searchParams.set('maxPrice', selectedMaxPrice);
    }
    searchParams.set('offset', 0);
    setSearchParams(searchParams);
  };

  const filterBySubcategory = sub => {
    const subStr = sub.toLocaleString();
    const subcategoryCopy = [...subcategory];
    const isSelected = subcategoryCopy.includes(subStr);

    if (!isSelected) searchParams.append('subcategoryId', subStr);
    else {
      if (subcategoryCopy.length === 1) {
        searchParams.delete('subcategoryId');
      }
      const index = subcategoryCopy.indexOf(subStr);
      if (index > -1) subcategoryCopy.splice(index, 1);
      if (subcategoryCopy.length === 1) {
        searchParams.set('subcategoryId', subcategoryCopy[0]);
      } else if (subcategoryCopy.length === 2) {
        searchParams.set('subcategoryId', subcategoryCopy[0]);
        searchParams.append('subcategoryId', subcategoryCopy[1]);
      }
    }
    searchParams.set('offset', 0);
    setSearchParams(searchParams);
  };

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 12);
    setSearchParams(searchParams);
  };

  if (!dataList.products) return null;

  const { products, total } = dataList;
  const pagenationBtnArr = new Array(Math.ceil(total / 12)).fill(1);

  return (
    <div className="productList">
      <aside className="filtering">
        <h4 className="h4">FILTER</h4>
        <div className="priceFilter option">
          <h5>가격</h5>
          {PRICE_FILTER.map(({ id, min, max }) => {
            const isSelected =
              min === Number(minPrice) && max === Number(maxPrice);
            return (
              <button
                key={id}
                className={isSelected ? 'selected' : ''}
                onClick={() => {
                  filterByPrice(min, max);
                }}
              >
                {min.toLocaleString()} ~ {max.toLocaleString()}
              </button>
            );
          })}
        </div>
        <div className="roastingFilter option">
          <h5>로스트</h5>
          {ROAST_FILTER.map(({ id, type, subcategoryId }) => {
            const test = subcategory.includes(String(subcategoryId));
            return (
              <button
                key={id}
                onClick={() => filterBySubcategory(subcategoryId)}
                className={test ? 'selected' : ''}
              >
                {type}
              </button>
            );
          })}
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="제품을 검색해보세요 🔍"
            onChange={e => setSearchInput(e.target.value)}
            className="searchInput"
          />
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
              {SORTING.map(({ id, option, orderBy }) => {
                return (
                  <li key={id}>
                    <button onClick={() => setSortParams('orderBy', orderBy)}>
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="productContainer">
          {products
            .filter(product => product.name.includes(searchInput))
            .map(product => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  imgUrl={product.imageUrls}
                  name={product.name}
                  price={product.price}
                  rating={product.avgRating}
                  numReview={product.countReview}
                />
              );
            })}
        </div>
        <div className="pagination">
          {pagenationBtnArr.map((num, idx) => {
            return (
              <button key={num + idx} onClick={() => movePage(num + idx)}>
                {num + idx}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const PRICE_FILTER = [
  {
    id: 1,
    min: 0,
    max: 29000,
  },
  {
    id: 2,
    min: 30000,
    max: 39000,
  },
  {
    id: 3,
    min: 40000,
    max: 49000,
  },
  {
    id: 4,
    min: 50000,
    max: 69000,
  },
];

const ROAST_FILTER = [
  {
    id: 1,
    type: '블론드',
    subcategoryId: 6,
  },
  {
    id: 2,
    type: '미디엄',
    subcategoryId: 7,
  },
  {
    id: 3,
    type: '다크',
    subcategoryId: 8,
  },
];

const SORTING = [
  {
    id: 1,
    option: '최신순',
    orderBy: 'incomingDsc',
  },
  {
    id: 2,
    option: '인기순',
    orderBy: 'best',
  },
  {
    id: 3,
    option: '별점순',
    orderBy: 'ratingAsc',
  },
];

export default ProductList;
