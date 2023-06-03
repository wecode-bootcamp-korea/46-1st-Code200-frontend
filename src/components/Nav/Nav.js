import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyPage from '../MyPage/MyPage';
import './Nav.scss';

const Nav = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [hide, setHide] = useState(true);
  const [myHide, setMyHide] = useState(true);
  const [isSubCategory, setIsSubCategory] = useState(false);

  useEffect(() => {
    fetch('data/category.json')
      .then(response => response.json())
      .then(result => {
        setCategoryList(result.data);
        setIsSubCategory(true);
      });
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
          {IMG_SRC.map(img =>
            img.alt !== 'myPage' ? (
              <img
                className="imgIcons"
                src={img.value}
                alt={img.alt}
                key={img.id}
              />
            ) : (
              <>
                {!myHide && <MyPage />}
                <img
                  className="imgIcons"
                  src={img.value}
                  alt={img.alt}
                  key={img.id}
                  onClick={() => {
                    setMyHide(!myHide);
                  }}
                />
              </>
            )
          )}
        </div>
      </div>
      {!hide && (
        <div
          className="bottomNav"
          onMouseLeave={() => {
            setHide(true);
          }}
        >
          <div className="subCategory">
            <div className="dev">
              {isSubCategory &&
                categoryList.map(category => {
                  return (
                    <ul
                      className="bottomMenuCategoryUl"
                      key={category.category_id}
                    >
                      {category.subCategories.map(subCategory => {
                        return (
                          <li
                            className="bottomMenuCategoryLi"
                            key={subCategory.subCategory_id}
                          >
                            <Link className="dev1Link" to="/">
                              {subCategory.subCategory_name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
            </div>
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
