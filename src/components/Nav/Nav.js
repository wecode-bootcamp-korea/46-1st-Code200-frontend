import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryListLev2, setCategoryListLev2] = useState([]);
  const [categoryListLev3, setCategoryListLev3] = useState([]);
  const [categoryListLev4, setCategoryListLev4] = useState([]);
  const [categoryListLev5, setCategoryListLev5] = useState([]);
  const [categoryListLev6, setCategoryListLev6] = useState([]);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    fetch('data/category.json')
      .then(response => response.json())
      .then(result => setCategoryList(result));
    fetch('data/categorylev2.json')
      .then(response => response.json())
      .then(result => setCategoryListLev2(result));
    fetch('data/categorylev3.json')
      .then(response => response.json())
      .then(result => setCategoryListLev3(result));
    fetch('data/categorylev4.json')
      .then(response => response.json())
      .then(result => setCategoryListLev4(result));
    fetch('data/categorylev5.json')
      .then(response => response.json())
      .then(result => setCategoryListLev5(result));
    fetch('data/categorylev6.json')
      .then(response => response.json())
      .then(result => setCategoryListLev6(result));
  }, []);

  const mouseEnterEvent = e => {
    return console.log(e.target);
  };

  return (
    <div className="nav">
      <div className="topNav">
        <div className="topLogo">
          <Link className="link" to="/">
            <img
              className="logoIcons"
              src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/logo/wediysda%20%EB%B3%B5%EC%82%AC%EB%B3%B8.png"
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
                    onMouseLeave={() => {
                      setHide(true);
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
          <img
            className="imgIcons"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_mypage.png"
            alt="mypage"
          />
          <img
            className="imgIcons"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_search.png"
            alt="search"
          />
          <img
            className="imgIcons"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_wish.png"
            alt="wish"
          />
          <img
            className="imgIcons"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/top_cart_pc.png"
            alt="cart"
          />
        </div>
      </div>
      <div className="bottomNav">
        <div className="subCategory">
          <div className="dev">
            <ul className="bottomMenuCategoryUl">
              {categoryListLev2.map(category2 => {
                return (
                  <li
                    className="bottomMenuCategoryLi"
                    key={category2.category_id}
                  >
                    <Link className="dev1Link" to="/">
                      {category2.category_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dev">
            <ul className="bottomMenuCategoryUl">
              {categoryListLev3.map(category3 => {
                return (
                  <li
                    className="bottomMenuCategoryLi"
                    key={category3.category_id}
                  >
                    <Link className="dev1Link" to="/">
                      {category3.category_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dev">
            <ul className="bottomMenuCategoryUl">
              {categoryListLev4.map(category4 => {
                return (
                  <li
                    className="bottomMenuCategoryLi"
                    key={category4.category_id}
                  >
                    <Link className="dev1Link" to="/">
                      {category4.category_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dev">
            <ul className="bottomMenuCategoryUl">
              {categoryListLev5.map(category5 => {
                return (
                  <li
                    className="bottomMenuCategoryLi"
                    key={category5.category_id}
                  >
                    <Link className="dev1Link" to="/">
                      {category5.category_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dev">
            <ul className="bottomMenuCategoryUl">
              {categoryListLev5.map(category5 => {
                return (
                  <li
                    className="bottomMenuCategoryLi"
                    key={category5.category_id}
                  >
                    <Link className="dev1Link" to="/">
                      {category5.category_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dev">
            <ul className="bottomMenuCategoryUl">
              {categoryListLev6.map(category6 => {
                return (
                  <li
                    className="bottomMenuCategoryLi"
                    key={category6.category_id}
                  >
                    <Link className="dev1Link" to="/">
                      {category6.category_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="subCategoryImg">
          <img
            className="bestItemImg"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/coffe-bag/brad-oqxYVNkWgQc-unsplash.jpg"
            alt="bestitem"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
