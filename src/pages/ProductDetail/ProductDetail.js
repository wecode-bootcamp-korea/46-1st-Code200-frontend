import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Count from '../../components/Count/Count';
import Like from '../../components/Like/Like';
import Review from '../../components/Review/Review';
import './ProductDetail.scss';
import { DETAIL_INFO } from '../UiData/productDetailUiData';
import { DETAIL_NOTE } from '../UiData/productDetailNote';
import { BOTTOM_IMG } from '../UiData/productDetailBottomImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ProductDetail() {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const [isProduct, setIsProduct] = useState(false);
  const params = useParams();
  const productId = params.id;
  const [count, setCount] = useState(1);
  const price = productDetail?.price;
  const totalPrice = Number(price) * Number(count);
  const [isHeart, setIsHeart] = useState(productDetail.isHeart || '');
  const userId = window.localStorage.getItem('userId');

  const CATEGORY_ARR = [
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
    fetch(`http://10.58.52.62:7000/products/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userId,
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductDetail(data.product[0]);
        setIsProduct(true);
        setIsHeart(data.product[0].isLiked);
      });
  }, []);

  const LikeUpdate = () => {
    const METHOD = isHeart ? 'DELETE' : 'POST';

    setIsHeart(!isHeart);
    fetch('http://10.58.52.62:7000/likes/1', {
      method: METHOD,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userId,
      },
    }).then(response => response.json());
  };

  const cartInput = () => {
    fetch('http://10.58.52.198:8000/carts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userId,
      },
      body: JSON.stringify({
        productId: 1,
        quantity: count,
        sizeId: 1,
        userId: userId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'POSTUP_SUCCESS') {
          if (window.confirm('장바구니로 이동하시겠습니까?')) {
            navigate('/cart');
          } else {
            return;
          }
        }
      });
  };

  return (
    <div className="productDetail">
      <div className="productContainer">
        <div className="productDetailImg">
          <div className="detailTopImg">
            <ul className="detailTopImgUl">
              {isProduct &&
                productDetail.imageUrls.map((productDetailImg, index) => {
                  return (
                    <li className="detailTopImgli" key={index}>
                      <img
                        className="bestItemImg"
                        src={productDetailImg}
                        alt="bestItem"
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="productDetailInfo">
          <div className="productRoute">
            {CATEGORY_ARR.map((arr, index) => {
              return (
                <Link to="/" className="productRouteCategory" key={arr.id}>
                  <span className="productSpan">{arr.value}</span>
                  {index !== 0 && <FontAwesomeIcon icon={faChevronRight} />}
                </Link>
              );
            })}
          </div>

          <div className="productDetail">
            <div className="productTitle">
              <span className="title">{productDetail.name}</span>
            </div>
            <div className="productTag">
              <span className="freePrd">무료배송</span>
              <span className="redPrd">품절임박</span>
              <span className="newPrd">신상품</span>
            </div>
            <div className="productDetailInner">
              <div className="productAmount">
                {isProduct && <span>{Number(price).toLocaleString()}</span>}
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
              <FontAwesomeIcon className="chevronRight" icon={faChevronRight} />
            </Link>
          </div>
          <div className="detailDescription">
            <span className="welcomeSpan">
              [{productDetail.category}] {productDetail.name}
            </span>
            <Count count={count} setCount={setCount} />
          </div>
          <div className="buttonArea">
            {/* 좋아요 컴포넌트 */}
            <Like isHeart={isHeart} LikeUpdate={LikeUpdate} />
            <button className="subCartMove" onClick={() => cartInput()}>
              장바구니
            </button>
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
              <span className="productCountSmall">
                {totalPrice.toLocaleString()}
              </span>
              <span className="productCountBig"> ({count}개)</span>
            </div>
          </div>
          {DETAIL_INFO.map(detailInfo => {
            return (
              <div className="detailInfo" key={detailInfo.id}>
                <span className="detailInfoSpan">{detailInfo.infoName}</span>
                <Link to="/" className="detailInfoLink">
                  <FontAwesomeIcon
                    className="chevronRight"
                    icon={faChevronRight}
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
            {BOTTOM_IMG.map(({ id, className, src, alt }) => {
              return <img key={id} className={className} src={src} alt={alt} />;
            })}
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
      <div className="review">
        <Review />
      </div>
    </div>
  );
}

export default ProductDetail;
