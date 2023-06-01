import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';
import { DETAIL_INFO } from '../UiData/productDetailUiData';
import { DETAIL_NOTE } from '../UiData/productDetailNote';

function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});

  let categoryArr = [
    {
      id: '3',
      value: productDetail.name,
    },
    {
      id: '2',
      value: productDetail.subcategory,
    },
    {
      id: '1',
      value: productDetail.category,
    },
  ];

  useEffect(() => {
    // fetch('http://10.58.52.145:8000/products/7', { method: 'GET' });
    fetch('data/productDetail.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductDetail(data.data[0]);
      });
  }, []);

  return (
    <div className="productDetail">
      <div className="productContainer">
        <div className="productDetailImg">
          <div className="detailTopImg">
            <ul className="detailTopImgUl">
              {/* {productDetail.image.map(productDetailImg => {
                return (
                  <li className="detailTopImgli" key={productDetailImg.index}>
                    <img
                      className="bestItemImg"
                      src={productDetailImg.id}
                      alt="bestitem"
                    />
                  </li>
                );
              })} */}
            </ul>
          </div>
        </div>

        <div className="productDetailInfo">
          <div className="productRoute">
            {categoryArr.map((arr, index) => {
              return (
                <Link to="/" className="productRouteCategory" key={arr.id}>
                  <span className="productSpan">{arr.value}</span>
                  {index !== categoryArr.length - 1 && (
                    <img
                      className="shareSns"
                      src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                      alt="shareSns"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="productDetail">
            <div className="productTitle">
              <span className="title">{productDetail.name}</span>
            </div>
            {/* 태그 컴포넌트 */}
            <div className="productTag">
              <span className="freePrd">무료배송</span>
              <span className="redPrd">품절임박</span>
              <span className="newPrd">신상품</span>
            </div>
            <div className="productDetailInner">
              <div className="productAmount">
                <span>{productDetail.price}</span>
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
              <span className="productCountSmall">{productDetail.price}</span>
              <span className="productCountBig">(0개)</span>
            </div>
          </div>
          {DETAIL_INFO.map(detailInfo => {
            return (
              <div className="detailInfo" key={detailInfo.id}>
                <span className="detailInfoSpan">{detailInfo.infoName}</span>
                <Link to="/" className="detailInfoLink">
                  <img
                    className="shareSns"
                    src="https://raw.githubusercontent.com/dxxcw/code200-images/minji_images/images/Main/icon/icon_arrow.png"
                    alt="shareSns"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="productInfo">
        <div className="productInfoInner">
          <div className="productDescArea">
            <p className="productDescAreaPtag">{productDetail.description}</p>
          </div>
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
        </div>

        <div className="productNoticeTop">
          {DETAIL_NOTE.map(note => {
            return (
              <div className="productNotice" key={note.id}>
                <div className="productTastingNotes">
                  <span className="bigSpan">{note.title}</span>
                </div>

                <div className="productTastingNotesExp">
                  <span className="smallSpan">{note.content}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>리뷰 컴포넌트</div>
    </div>
  );
}

export default ProductDetail;
