import React from 'react';
import { Link } from 'react-router-dom';
import './MyPage.scss';

function MyPage() {
  return (
    <div className="bottomNav">
      <div className="bottomNavMy">
        <ul className="myPageUl">
          {MY_PAGE.map(myPage => {
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

const MY_PAGE = [
  {
    id: '1',
    name: 'LOGIN',
    to: '/',
  },
  {
    id: '2',
    name: 'LOGOUT',
    to: '/',
  },
  {
    id: '3',
    name: 'ORDER',
    to: '/',
  },
];
