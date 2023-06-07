import React from 'react';
import { Link } from 'react-router-dom';
import './MyPage.scss';

function MyPage({ userId }) {
  return (
    <div className="bottomNav">
      <div className="bottomNavMy">
        <ul className="myPageUl">
          {userId !== null &&
            LOGIN.map(myPage => {
              return (
                <li className="myPageLi" key={myPage.id}>
                  <Link className="myPageLink" to={myPage.to}>
                    {myPage.name}
                  </Link>
                </li>
              );
            })}
          {userId === null &&
            NOT_LOGIN.map(myPage => {
              return (
                <li className="myPageLi" key={myPage.id}>
                  <Link className="myPageLink" to={myPage.to}>
                    {myPage.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default MyPage;

const LOGIN = [
  {
    id: '1',
    name: 'MYPAGE',
    to: '/myWediya',
  },
  {
    id: '2',
    name: 'LOGOUT',
    to: '/',
  },
];

const NOT_LOGIN = [
  {
    id: '1',
    name: 'LOGIN',
    to: '/login',
  },
];
