import React, { useEffect, useState } from 'react';
import './Review.scss';

function Review() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('/data/reviewSample.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);

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
            <img src="/images/star.png" alt="별" />
            <p className="start">5.0</p>
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
        {review.map(review => {
          return (
            <div key={review.id} className="oneLineWrap">
              <div>{review.rating}</div>

              <div className="userWrap">
                <p className="oneLine">{review.review}</p>
                <p className="userId">{review.userInfo}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
