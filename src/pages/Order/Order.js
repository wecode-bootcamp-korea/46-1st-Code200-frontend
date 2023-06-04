import React from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faBagShopping,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

function Order() {
  return (
    <div className="order">
      <div className="orderTop">
        <FontAwesomeIcon className="chevronLeftIcon" icon={faChevronLeft} />
        <Link className="link" to="/">
          <img
            className="logoIcons"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/35f700c12816ed36ec7194d724a60969c7efaad7/images/Main/logo/3.png"
            alt="wediyaLogo"
          />
        </Link>
        <div className="rightInner">
          <FontAwesomeIcon className="bagShoppingIcon" icon={faBagShopping} />
        </div>
      </div>
      <div className="orderTitle">
        <span className="titleSpan">주문/결제</span>
      </div>
      <div className="orderDesc">
        <p className="descPtag">
          &#8251;온라인몰 특성상 실시간 재고변동으로 인해 품절 시 별도의 안내
          업시 취소 될 수 있으며 품절로 인해 결제 취소될 시 문자 또는
          카카오톡으로 결제 취소 안내 문자를 드립니다. <br />
          &#8251;분리 배송 안내 : 주문하신 상품이 2개 이상인 경우 출고지별 재고
          상황에 따라 분리 배송 될 수 있습니다.
        </p>
      </div>
      <div className="orderInfo">
        <div className="orderArea">
          <h1 className="hStyle">주문자</h1>
          <FontAwesomeIcon className="chevronUp" icon={faChevronUp} />
        </div>
        <table className="userInfoTable">
          <tr>
            <td className="grayFont">주문자 *</td>
            <td>
              <input type="text" className="userName" defaultValue="김유저" />
            </td>
          </tr>
          <tr>
            <td className="grayFont">휴대전화 *</td>
            <td>
              <input
                type="text"
                className="userPhone"
                defaultValue="010-1234-1234"
              />
            </td>
          </tr>
          <tr>
            <td className="grayFont">이메일</td>
            <td className="">
              <input
                type="text"
                className="userEmail"
                defaultValue="wecode@wecode.com"
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="orderAddress">
        <div className="orderArea">
          <h1 className="hStyle">배송지</h1>
          <FontAwesomeIcon className="chevronUp" icon={faChevronUp} />
        </div>
        <span className="spanStyle">배송방법 선택</span>
        <div className="selectDelivery">
          <button className="deliveryBtn">택배</button>
          <button className="deliveryBtn">매장픽업</button>
        </div>
        <hr />
        <div className="selectAddress">
          <input type="radio" name="add" />
          주문자 정보와 동일
          <input type="radio" name="add" checked />
          새로운 배송지
        </div>
        <div className="userAddressInfo">
          <table className="userAddressTable">
            <tr>
              <td className="grayFont">받는사람 *</td>
              <td>
                <input type="text" className="orderUserName" />
              </td>
            </tr>
            <tr>
              <td className="grayFont">주소 *</td>
              <td>
                <input type="text" className="orderUserAdd" />
                <button className="addSearchBtn">주소검색</button>
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <input type="text" className="orderUserAdd1" />
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <input type="text" className="orderUserAdd2" />
              </td>
            </tr>
            <tr>
              <td className="grayFont">휴대폰 *</td>
              <td>
                <select className="phoneSelect">
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                </select>
                -<input type="text" className="orderUserPhone1" />
                -<input type="text" className="orderUserPhone2" />
              </td>
            </tr>
          </table>
          <hr />
          <select className="deliveryMessage">
            <option className="message">-- 메세지 선택 ( 선택사항 ) --</option>
            <option className="message">부재 시 경비실에 맡겨주세요.</option>
            <option className="message">부재 시 문 앞에 놓아주세요.</option>
            <option className="message">빠른 배송 부탁드립니다.</option>
            <option className="message">택배함에 보관해 주세요.</option>
            <option className="message">직접 입력</option>
          </select>
        </div>
      </div>
      <div className="orderProduct">
        <div className="orderArea">
          <h1 className="hStyle">주문 상품</h1>
          <FontAwesomeIcon className="chevronUp" icon={faChevronUp} />
        </div>
        <div className="orderProductImg">
          <img
            className="productOrder"
            src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Img/wholebean/bean01.png"
            alt="product"
          />
          <div className="orderProductInfo">
            <p>(담곰이)날 안입겠담곰? 반팔 잠옷(BLACK)_SPPPD37U03</p>
            <span className="grayFont">[옵션 : (19)BLACK/M(095)]</span>
            <br />
            <spa className="grayFont">수량 : 1개</spa>
            <br />
            <span className="">39,900</span>
          </div>
        </div>
        <div className="orderInner">
          <span>베송비</span>
          <span>0(무료)</span>
        </div>
      </div>
      <div className="orderDisCount">
        <div className="orderArea">
          <h1 className="hStyle">할인/포인트 </h1>
          <FontAwesomeIcon className="chevronUp" icon={faChevronUp} />
        </div>
        <div className="pointDiv">
          <span className="blackSpan">포인트 적용</span>
          <input className="pointInput" />
          <button className="pointButton">적용</button>
        </div>
        <div className="orderInner">
          <span>적용금액</span>
          <span>-0</span>
        </div>
      </div>
      <div className="orderPay">
        <div className="orderArea">
          <h1 className="hStyle">결제정보</h1>
          <FontAwesomeIcon className="chevronUp" icon={faChevronUp} />
        </div>
        <div className="orderPayInfo">
          <span>주문상품</span>
          <span>39,900</span>
        </div>
        <div className="orderPayInfo">
          <span>배송비</span>
          <span>+0</span>
        </div>
        <div className="orderPayInfo">
          <span>할인/포인트</span>
          <span>-0</span>
        </div>
        <div className="orderInner">
          <span>최종 결제 금액</span>
          <span>39,900</span>
        </div>
      </div>
      <div className="orderPaySelect">
        <div className="orderArea">
          <h1 className="hStyle">결제수단</h1>
          <FontAwesomeIcon className="chevronUp" icon={faChevronUp} />
        </div>
        <div className="payMethod">
          <button className="payMethodBtn">신용카드</button>
          <button className="payMethodBtn">에스크로(계좌이체)</button>
          <button className="payMethodBtn">네이버페이</button>
          <button className="payMethodBtn">카카오페이</button>
          <button className="payMethodBtn">토스</button>
          <button className="payMethodBtn">페이코</button>
        </div>
        <hr />
        <div className="payMethodBottom">
          <table className="payMethodTable">
            <tr>
              <td className="grayFont">카드선택</td>
              <td>
                <select className="cardSelect">
                  <option className="message">--선택해주세요--</option>
                  <option className="message">신한카드</option>
                  <option className="message">비씨카드</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="grayFont">할부기간</td>
              <td>
                <select className="cardSelect">
                  <option className="message">일시불</option>
                  <option className="message">1개월</option>
                  <option className="message">2개월</option>
                  <option className="message">3개월</option>
                  <option className="message">4개월</option>
                  <option className="message">5개월</option>
                  <option className="message">6개월</option>
                </select>
              </td>
            </tr>
          </table>
          <span className="graySpan">
            법인카드는 무이자 할부 적용이 되지 않습니다.
          </span>
        </div>
      </div>
      <div className="orderBottom">
        <div className="orderBottomTitle">
          <span className="titleSpan">
            주문 내용을 확인하였으며 약관에 동의합니다.
          </span>
        </div>
        <div className="orderBottomInfo">
          <button className="orderBtn">39,900원 결제하기</button>
          <p className="descPtagBottom">
            - 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을
            동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가 적용되지
            않습니다. 무이자할부를 원하시는 경우 장바구니에서 무이자할부 상품만
            선택하여 주문하여 주시기 바랍니다. <br />
            <br />- 최소 결제 가능 금액은 결제금액에서 배송비를 제외한
            금액입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
