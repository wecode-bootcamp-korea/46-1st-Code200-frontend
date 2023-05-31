import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="productContainer">
        <div className="productDetailImg">
          <div className="detailTopImg">
            <ul className="detailTopImgUl">
              <li className="detailTopImgli">
                <img
                  className="bestItemImg"
                  src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/coffe-bag/jon-tyson-KRedbshBxEk-unsplash.jpg"
                  alt="bestitem"
                />
                <img
                  className="bestItemImg"
                  src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/photo-1562051036-e0eea191d42f.avif"
                  alt="bestitem"
                />
                <img
                  className="bestItemImg"
                  src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/photo-1541469406036-71229832e06e.avif"
                  alt="bestitem"
                />
                <img
                  className="bestItemImg"
                  src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/photo-1573628684835-ca186702bbde.avif"
                  alt="bestitem"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="productDetailInfo">
          <div className="productRoute">
            <Link to="/" className="productRouteCategory">
              <span>디카페인 하우스 블렌드 250g</span>
            </Link>
            <Link to="/" className="productRouteCategory">
              <span>원두 </span>
              <img
                className="shareSns"
                src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                alt="shareSns"
              />
            </Link>
            <Link to="/" className="productRouteCategory">
              <span>커피 </span>
              <img
                className="shareSns"
                src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                alt="shareSns"
              />
            </Link>
          </div>
          <div className="productDetail">
            <div className="productTitle">
              <span className="title">디카페인 하우스 블렌드 250g</span>
            </div>
            <div className="productTag">
              <span className="freePrd">무료배송</span>
              <span className="redPrd">품절임박</span>
              <span className="newPrd">신상품</span>
            </div>
            <div className="productDetailInner">
              <div className="productAmount">
                <span>44,910</span>
              </div>
              <div className="productShare">
                <img
                  className="shareSns"
                  src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/detail_sns.png"
                  alt="shareSns"
                />
              </div>
            </div>
            <div className="productDetailInner">
              <span className="userLevelPrice">등급별 쿠폰 적용가</span>
            </div>
          </div>
          <div className="detailDescription">
            <span className="welcomeSpan">신규가입 혜택</span>
            <Link to="/" className="welcomeLink">
              신규 가입 시 웰컴 쿠폰팩 즉시 지급<sapn> </sapn>
              <img
                className="shareSns"
                src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                alt="shareSns"
              />
            </Link>
          </div>
          <div className="detailSize">
            <span> 수량 컴포넌트 </span>
          </div>
          <div className="buttonArea">
            <button className="likeMove">
              <img
                className="shareSns"
                src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/detail_wish.png"
                alt="shareSns"
              />
            </button>
            <button className="subCartMove">장바구니</button>
            <button className="buyMove">바로구매</button>
          </div>
          <div className="productReviewEventCard">
            <div className="eventCard">
              <span className="eventBigSpan">REVIEW EVENT</span>
              <span className="eventSmallSpan">
                리뷰 작성 시 최대 10,000원 적립
              </span>
            </div>
          </div>
          <div className="detailTotalAmount">
            <div className="productAllAmount">
              <span className="productCountBig">총 상품 금액</span>
            </div>
            <div className="productAllCount">
              <span className="productCountSmall">0 </span>
              <span className="productCountBig">(0개)</span>
            </div>
          </div>
          <div className="detailInfo">
            <span className="detailInfoSpan">상품정보 제공공시</span>
            <Link to="/" className="detailInfoLink">
              <img
                className="shareSns"
                src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                alt="shareSns"
              />
            </Link>
          </div>
          <div className="detailInfo">
            <span className="detailInfoSpan">배송안내</span>
            <Link to="/" className="detailInfoLink">
              <img
                className="shareSns"
                src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                alt="shareSns"
              />
            </Link>
          </div>
          <div className="detailInfo">
            <span className="detailInfoSpan">취소/반품/교환/환불 안내</span>
            <Link to="/" className="detailInfoLink">
              <img
                className="shareSns"
                src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                alt="shareSns"
              />
            </Link>
          </div>
          <span />
        </div>
      </div>
      <div className="productInfo">
        <div className="productDescArea">
          <p className="productDescAreaPtag">
            인도네시아 커피는 묵직하고 흙 내음이 날 것이라는 편견을 가지고
            있지는 않나요?
          </p>
          <p className="productDescAreaPtag">
            하워드 슐츠가 사랑한 커피로 알려진 우리의 코어 수마트라 커피는
            묵직한 바디감과 풍부한 흙 내음이 인상적인 커피입니다.
          </p>
          <p className="productDescAreaPtag">
            하지만 인도네시아에는 여러 개의 섬이 있고, 각각의 섬에 위치한 수
            많은 농장에서는 각양각색의 풍미를 가진 커피들이 재배되고 있습니다.
          </p>
          <p className="productDescAreaPtag">
            웨스트 자바 프리앙 안도 이처럼 색다른 매력을 가진 커피 중
            하나입니다.
          </p>
          <p className="productDescAreaPtag">
            이 커피는 부드럽고 우아한 달콤함이 느껴지는 바닐라빈의 풍미와 함께
            여름에 잘 어울리는 청매실 같은 새콤달콤한 산미가 아주 매력적인
            블론드 로스트 커피입니다.
          </p>

          <div className="productDescAreaImg">
            <img
              className="productDescImg"
              src="https://raw.githubusercontent.com/dxxcw/code200-images/d849eca915eb8e65f06ec390ea2590e85c6600fe/images/Main/coffe-bag/nathan-dumlao-KixfBEdyp64-unsplash.jpg"
              alt="productDescImg"
            />
            <img
              className="productDescImg"
              src="https://raw.githubusercontent.com/dxxcw/code200-images/d849eca915eb8e65f06ec390ea2590e85c6600fe/images/Main/coffe-bag/pariwat-pannium-EdzGd9cTI0Y-unsplash.jpg"
              alt="productDescImg"
            />
          </div>

          <div />
        </div>
        <div className="productNoticeTop">
          <div className="productNotice">
            <div className="productTastingNotes">
              <span className="bigSpan">Tasting Notes</span>
            </div>
            <div className="productTastingNotesExp">
              <span className="smallSpan">부드럽고 균형이 잡힘</span>
            </div>
          </div>
          <div className="productNotice">
            <div className="productEnjoyWith">
              <span className="bigSpan">Enjoy with</span>
            </div>
            <div className="productEnjoyWithExp">
              <span className="smallSpan">
                요거트 한 컵과 조간신문과 함께 즐기세요.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>리뷰 컴포넌트</div>
    </div>
  );
}

export default ProductDetail;
