import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [hide, setHide] = useState(true);

  // let categoryTop = [
  //   {
  //     id: '1',
  //     value: categoryListLev2,
  //   },
  //   {
  //     id: '2',
  //     value: categoryListLev3,
  //   },
  // ];

  useEffect(() => {
    fetch('data/category.json')
      .then(response => response.json())
      .then(result => setCategoryList(result));
    fetch('data/subCategory.json')
      .then(response => response.json())
      .then(result => setSubCategoryList(result));
  }, []);

  return (
    <div className="nav">
      <div className="topNav">
        <div className="topLogo">
          <Link className="link" to="/">
            <img
              className="logoIcons"
              src="https://raw.githubusercontent.com/dxxcw/code200-images/35f700c12816ed36ec7194d724a60969c7efaad7/images/Main/logo/3.png"
              alt="spao_logo"
            />
          </Link>
        </div>
        <div className="topMenu">
          <ul className="topMenuCategoryUl">
            {categoryList.map(category => {
              return (
                <li className="topMenuCategoryLi" key={category.category_id}>
                  <Link
                    className="navLink"
                    to="/"
                    onMouseEnter={() => {
                      setHide(false);
                    }}
                  >
                    {category.category_name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="topMember">
          {/* {IMG_SRC.map(img =>
            img.alt !== 'myPage' ? (
              <img
                className="imgIcons"
                src={img.value}
                alt={img.alt}
                key={img.id}
              />
            ) : (
              <img
                className="imgIcons"
                src={img.value}
                alt={img.alt}
                key={img.id}
                onMouseEnter={() => {
                  console.log(1);
                }}
              />
            )
          )} */}
        </div>
      </div>
      <div className="bottomNavMy">
        <ul>
          <li>LOGIN</li>
          <li>LOGOUT</li>
          <li>ORDER</li>
        </ul>
      </div>
      {!hide && (
        <div
          className="bottomNav"
          onMouseLeave={() => {
            setHide(true);
          }}
        >
          <div className="subCategory">
            {/* <div className="dev" key={top.id}>
              <ul className="bottomMenuCategoryUl">
                {top.value.map(category => {
                  return (
                    <li
                      className="bottomMenuCategoryLi"
                      key={category.category_id}
                    >
                      <Link className="dev1Link" to="/">
                        {category.category_name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div> */}
          </div>
          <div className="subCategoryImg">
            <img
              className="bestItemImg"
              src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/coffe-bag/brad-oqxYVNkWgQc-unsplash.jpg"
              alt="bestItem"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

const IMG_SRC = [
  {
    id: '1',
    value:
      'https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_mypage.png',
    alt: 'myPage',
  },
  {
    id: '2',
    value:
      'https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_search.png',
    alt: 'search',
  },
  {
    id: '3',
    value:
      'https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_wish.png',
    alt: 'wish',
  },
  {
    id: '4',
    value:
      'https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_cart_pc.png',
    alt: 'cart',
  },
];
