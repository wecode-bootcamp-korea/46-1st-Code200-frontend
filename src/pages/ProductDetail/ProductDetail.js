import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

function ProductDetail() {
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    fetch('http://10.58.52.145:8000/products/4', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setProductDetail(res);
      });
  }, []);
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
              <span className="title">{productDetail.data[0].name}</span>
            </div>
            <div className="productTag">
              <span className="freePrd">무료배송</span>
              <span className="redPrd">품절임박</span>
              <span className="newPrd">신상품</span>
            </div>
            <div className="productDetailInner">
              <div className="productAmount">
                <span>{productDetail.data[0].price}</span>
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
              신규 가입 시 웰컴 쿠폰팩 즉시 지급
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
            {productDetail.data[0].description}
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
