import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyPage from '../MyPage/MyPage';
import './Nav.scss';
import './navShowTop.scss';

const Nav = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [hide, setHide] = useState(true);
  const [myHide, setMyHide] = useState(true);
  const [isSubCategory, setIsSubCategory] = useState(false);
  const userId = window.localStorage.getItem('userId');

  const handleIcon = name => {
    if (userId !== null) {
      if (name === 'search') {
        navigate('/');
      } else if (name === 'wish') {
        navigate('/');
      } else if (name === 'cart') {
        navigate('/cart');
      }
    } else {
      alert('로그인 후 이용 바랍니다.');
    }
  };
  useEffect(() => {
    fetch('data/category.json')
      .then(response => response.json())
      .then(result => {
        handleCategory(result);
      });
  }, [categoryList]);

  const handleCategory = result => {
    setCategoryList(result.data);
    setIsSubCategory(true);
  };

  return (
    <div className="nav">
      <div className="topNav">
        <div className="topLogo">
          <Link
            className="link"
            to="/"
            onClick={() => {
              setHide(true);
            }}
          >
            <img
              className="logoIcons"
              src="https://raw.githubusercontent.com/dxxcw/code200-images/35f700c12816ed36ec7194d724a60969c7efaad7/images/Main/logo/3.png"
              alt="spao_logo"
            />
          </Link>
        </div>
        <div className="topMenu">
          {categoryList.map(category => {
            return (
              <span className="topMenuCategoryLi" key={category.categoryId}>
                <Link
                  className="navLink"
                  to={category.link}
                  onMouseEnter={() => {
                    setHide(false);
                  }}
                >
                  {category.categoryName}
                </Link>
              </span>
            );
          })}
        </div>
        <div className="topMember">
          {IMG_SRC.map(img =>
            img.alt !== 'myPage' ? (
              <img
                className="imgIcons"
                src={img.value}
                alt={img.alt}
                key={img.id}
                onClick={() => {
                  handleIcon(img.alt);
                }}
              />
            ) : (
              <>
                {!myHide && (
                  <MyPage
                    userId={userId}
                    setMyHide={setMyHide}
                    myHide={myHide}
                  />
                )}
                <img
                  className="imgIcons"
                  src={img.value}
                  alt={img.alt}
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
          className="subCategory"
          onMouseLeave={() => {
            setHide(true);
          }}
        >
          <div className="topLogo" />
          <div className="dev">
            {isSubCategory &&
              categoryList.map(category => {
                return (
                  <ul
                    className="bottomMenuCategoryUl"
                    key={category.categoryId}
                  >
                    {category.subCategories.map(subCategory => {
                      return (
                        <li
                          className="bottomMenuCategoryLi"
                          key={subCategory.subCategoryId}
                        >
                          <Link
                            className="dev1Link"
                            to={subCategory.subLink}
                            onClick={() => {
                              setHide(true);
                            }}
                          >
                            {subCategory.subCategoryName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
          </div>
          <div className="topMember" />
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
