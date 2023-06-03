import React from 'react';
import './Review.scss';

function Review() {
  return (
    <div className="Review">
      <div className="reviewTitle">
        <span>REVIEW</span>
        <span>(total)</span>
        <div className="submit">
          <p>리뷰작성하기</p>
        </div>
      </div>

      <div className="reviewSummary">
        <div className="rating">
          <div className="point">
            <img alt="별" />
            <p className="start">5.0</p>
          </div>
          <div>
            <p>의 구매자가 이 상품을 좋아합니다.</p>
          </div>
        </div>

        <div className="ratingScrore">
          <div className="score">
            <p>아주 좋아요</p>
            <div className="scoreBar" />
          </div>
          <div className="score">
            <p>맘에 들어요</p>
            <div className="scoreBar" />
          </div>
          <div className="score">
            <p>보통이에요</p>
            <div className="scoreBar" />
          </div>
          <div className="score">
            <p>그냥 그래요</p>
            <div className="scoreBar" />
          </div>
          <div className="score">
            <p>별로예요</p>
            <div className="scoreBar" />
          </div>
        </div>
      </div>

      <div className="oneLineReview">
        <div className="oneLineWrap">
          <div>별점</div>

          <div className="userWrap">
            <p className="oneLine">여전히 시원시원한 마동석의 손맛과 입담</p>
            <p className="userId">userId</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
