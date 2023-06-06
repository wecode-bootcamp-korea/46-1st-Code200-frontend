import React from 'react';
import MYPAGE_LIST from './myPageList';
import './myWediya.scss';

function MyWediya() {
  return (
    <div className="myWediya">
      <div className="mypageTitle">
        김유저 님 위디야를 이용해 주셔서 감사합니다.
      </div>

      <div className="pageWrap">
        <div className="mypageSide">
          <div className="mypageTitle">마이 페이지</div>
          <div className="myPageList">
            {MYPAGE_LIST.map(mypage => {
              return (
                <ul key={mypage.id}>
                  <li className="subTitle">{mypage.title}</li>
                  <li>{mypage.sub1}</li>
                  <li>{mypage.sub2}</li>
                  <li>{mypage.sub3}</li>
                  <li>{mypage.sub4}</li>
                  <li>{mypage.sub5}</li>
                  <li>{mypage.sub6}</li>
                  <li>{mypage.sub7}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="myPageMain">
          <div className="mypageTitle">주문처리 현황</div>
          <div className="myPageContent">
            <ul>
              <li className="firstchild">
                입금대기
                <span>0</span>
              </li>
              <li className="listStyle">
                상품준비중
                <span>0</span>
              </li>
              <li className="listStyle">
                배송중
                <span>0</span>
              </li>
              <li className="listStyle">
                배송완료
                <span>0</span>
              </li>
              <li className="listStyle">
                취소/교환
                <span>0/0</span>
              </li>
            </ul>
          </div>
          <div className="myPageOrder">
            <div className="mypageTitle">최근 주문내역</div>
            <div className="myPageOrder">
              <tr>
                <th>주문일자 [주문번호]</th>
                <th>상품정보</th>
                <th>수량</th>
                <th>주문금액</th>
                <th>주문상태</th>
                <th>취소/교환</th>
              </tr>
              <p className="contents">주문 내역이 없습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWediya;
