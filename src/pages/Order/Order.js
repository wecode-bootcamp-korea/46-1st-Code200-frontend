import React from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faBagShopping,
  faUser,
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
          <FontAwesomeIcon className="userIcon" icon={faUser} />
        </div>
      </div>
      <div className="orderTitle">
        <span className="titleSpan">주문/결제</span>
      </div>
      <div className="orderDesc">
        <p className="descPtag">
          온라인몰 특성상 실시간 재고변동으로 인해 품절 시 별도의 안내 업시 취소
          될 수 있으며 품절로 인해 결제 취소될 시 문자 또는 카카오톡으로 결제
          취소 안내 문자를 드립니다. <br />
          분리 배송 안내 : 주문하신 상품이 2개 이상인 경우 출고지별 재고 상황에
          따라 분리 배송 될 수 있습니다.
        </p>
      </div>
      <div className="orderInfo">
        <div className="orderArea">
          <h1 className="hStyle">주문자</h1>
        </div>
        <table>
          <tr>
            <td className="grayFont">주문자 *</td>
            <td>
              <input type="text" className="orderUserName" />
            </td>
          </tr>
          <tr>
            <td className="grayFont">휴대전화 *</td>
            <td>
              <input type="text" className="orderUserPhone" />
            </td>
          </tr>
          <tr>
            <td className="grayFont">이메일 *</td>
            <td>
              <input type="text" className="orderUserEmail" />
            </td>
          </tr>
        </table>
      </div>
      <div className="orderAddress">
        <div className="orderArea">
          <h1 className="hStyle">배송지</h1>
        </div>
        <span className="spanStyle">배송방법 선택</span>
        <div className="selectDelivery">
          <button className="delivery">택배</button>
        </div>
        <div className="selectAddress">
          <input type="radio" name="add" checked />
          주문자 정보와 동일
          <input type="radio" name="add" />
          새로운 배송지
        </div>
        <div className="userAddressInfo">
          <table>
            <tr>
              <td className="grayFont">받는사람 *</td>
              <td>
                <input type="text" className="orderUserName" />
              </td>
              <td className="grayFont">
                <button>주소검색</button>
              </td>
            </tr>
            <tr>
              <td className="grayFont">주소 *</td>
              <td>
                <input type="text" className="orderUserPhone" />
              </td>
              <td>
                <input type="text" className="orderUserPhone" />
              </td>
              <td>
                <input type="text" className="orderUserPhone" />
              </td>
            </tr>
            <tr>
              <td>휴대폰 *</td>
              <td>
                <input type="text" className="orderUserEmail" />
              </td>
            </tr>
          </table>
          <select className="deliveryMessage">
            <option className="message">--메세지 선택(선택사항)--</option>
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
          <h1 className="hStyle">상품</h1>
        </div>
        <div>
          <div>
            <img />
            <div>
              <p>(담곰이)날 안입겠담곰? 반팔 잠옷(BLACK)_SPPPD37U03</p>
              <span>[옵션 : (19)BLACK/M(095)]</span>
              <span>수량 : 1개</span>
              <span>39,900</span>
            </div>
            <button>X</button>
          </div>
          <span>베송비</span>
          <span>0(무료)</span>
        </div>
      </div>
      <div className="orderDisCount">
        <div className="orderArea">
          <h1 className="hStyle">할인/부가결제</h1>
        </div>
        <div className="h">
          <span>할인코드 적용</span>
          <input />
          <button>적용</button>
        </div>
      </div>
      <div className="orderPay">
        <div className="orderArea">
          <h1 className="hStyle">결제정보</h1>
        </div>
        <table>
          <tr>
            <td className="grayFont">주문상품</td>
            <td>
              <input type="text" className="" />
            </td>
          </tr>
          <tr>
            <td className="grayFont">배송비</td>
            <td>
              <input type="text" className="" />
            </td>
          </tr>
          <tr>
            <td className="grayFont">할인/부가결제</td>
            <td>
              <input type="text" className="" />
            </td>
          </tr>
        </table>
      </div>
      <div className="orderPaySelect">
        <div className="orderArea">
          <h1 className="hStyle">결제수단</h1>
        </div>
        <div>
          <ul>
            <li>
              <button>신용카드</button>
            </li>
            <li>
              <button>에스크로(계좌이체)</button>
            </li>
            <li>
              <button>네이버페이</button>
            </li>
            <li>
              <button>카카오페이</button>
            </li>
            <li>
              <button>토스</button>
            </li>
            <li>
              <button>페이코</button>
            </li>
          </ul>
        </div>
        <div>
          <table>
            <tr>
              <td className="grayFont">카드선택</td>
              <td>
                <select>
                  <option className="message">--메세지 선택(선택사항)--</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="grayFont">할부기간</td>
              <td>
                <select>
                  <option className="message">일시불</option>
                </select>
                <span>법인카드는 무이자 할부 적용이 되지 않습니다.</span>
              </td>
            </tr>
            <tr>
              <td className="grayFont">결제안내</td>
              <td>
                <ul>
                  <li>
                    <button>공인인증서 발급안내</button>
                  </li>
                  <li>
                    <button>안심클릭 안내</button>
                  </li>
                  <li>
                    <button>안전결제(ISP) 안내</button>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <p className="descPtagBottom">
          최소 결제 가능 금액은 총 결제금액에서 배송비를 제외한 금액입니다.
          <br />
          -소액 결제의 경우 PG사 정책에 따라 결제 금액 제한이 있을 수 있습니다.
        </p>
      </div>
      <div className="orderBottom">
        <h1 className="hStyle">최종 결제 금액</h1>
        <span>39,900</span>
        <div className="orderBottomInfo">
          <button>39,900원 결제하기</button>
          <p className="descPtagBottom">
            - 무이자할부가 적용되지 않은 상품과 무이자할부가 가능한 상품을
            동시에 구매할 경우 전체 주문 상품 금액에 대해 무이자할부가 적용되지
            않습니다. 무이자할부를 원하시는 경우 장바구니에서 무이자할부 상품만
            선택하여 주문하여 주시기 바랍니다. <br />- 최소 결제 가능 금액은
            결제금액에서 배송비를 제외한 금액입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
