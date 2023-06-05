import React from 'react';
import youtubeimg from '../../../public/images/youtube_logo.jpg';
import instagramimg from '../../../public/images/instagram.jpg';
import facebookimg from '../../../public/images/facebook.jpg';
import '../Footer/Footer.scss';

function Footer() {
  return (
    <footer>
      <nav className="all">
        <div className="wrapallright1">
          <a href="##">
            <p>브랜드소개</p>
          </a>
          <a href="##">
            <p>오프라인 매장안내</p>
          </a>
          <a href="##">
            <p>개인정보처리방침</p>
          </a>
          <a href="##">
            <p>공지사항</p>
          </a>
          <a href="##">
            <p>회원혜택</p>
          </a>
          <a href="##">
            <p>자주묻는질문 FAQ</p>
          </a>
        </div>
        <p className="phonenumber">1234-5678</p>
        <div className="wrapall">
          <p className="wrapalltop">
            <h1>상담시간 : 오전 10시-오후5시 (토요일, 공휴일 휴무)</h1>
            <h2>email : helloworld@gmail.com(단체주문 문의)</h2>
            <h3>email : goodbyeworld@naver.com (마케팅 협찬 문의)</h3>
          </p>
          <p className="wrapallmid">
            <h4>주식회사 WEDIYA </h4>
            <h5>사업자등록번호 : 123-45-67890</h5>
            <h6>
              사옥 주소로 상품을 발송할시에 교환 환불이 불가하므로, 사이트내에서
              신청해주시기 바랍니다
            </h6>
          </p>
        </div>
        <div className="underline" />
        <div className="uibutton">
          <a href="https://www.youtube.co.kr">
            <img className="ui" src={youtubeimg} alt="youtube_image" />
          </a>
          <a href="https://www.instagram.com">
            <img className="ui" src={instagramimg} alt="instagram_image" />
          </a>
          <a href="https://www.facebook.com">
            <img className="ui" src={facebookimg} alt="facebook_image" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
