import React, { useEffect, useState } from 'react';
import StarRating from '../StarRating/StarRating';
import './Review.scss';

function Review() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewRating, setReviewRating] = useState('');

  const [inputReview, setInputReview] = useState('');
  const [review, setReview] = useState([]);

  // 별점
  const handleReviewRating = index => {
    setReviewRating(index);
  };

  // 리뷰 등록
  const handleReview = event => {
    setInputReview(event.target.value);
  };

  function handleInputReview() {
    const newReview = {
      id: review.length + 1,
      userInfo: 'WECODE@gmail.com',
      review: inputReview,
      rating: reviewRating,
    };

    const updateReview = [newReview, ...review];
    setReview(updateReview);
    setInputReview('');

    fetch('/data/reviewSample.json', {
      method: 'POST',
      body: JSON.stringify(updateReview),
    })
      .then(res => res.json())
      .catch(error => console.error(error));
  }

  // 기존 리뷰
  useEffect(() => {
    fetch('/data/reviewSample.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setReview(data));
  }, [inputReview]);

  // rating 값 이미지로 변환
  const startRating = rating => {
    const startIcon = [];

    for (let i = 0; i < rating; i++) {
      startIcon.push(<img src="/images/star.png" alt="별" key={i} />);
    }
    return startIcon;
  };

  return (
    <div className="Review">
      <div className="reviewTitle">
        <span>REVIEW</span>
        <span>(total)</span>
      </div>

      <div className="reviewSummary">
        <div className="summary">
          <p>고객 평점</p>
          <div className="rating">
            <div className="point">
              <img src="/images/star.png" alt="별" />
              <p className="start">5.0</p>
            </div>
          </div>
        </div>

        {/* 한 줄 리뷰 등록 */}
        <div className="submitReview">
          <div className="submitRating">
            <p>별점을 선택해주세요.</p>
            <StarRating
              rating={rating}
              setRating={setRating}
              hover={hover}
              setHover={setHover}
              reviewRating={reviewRating}
              setReviewRating={setReviewRating}
              handleReviewRating={handleReviewRating}
            />
          </div>
          <input onChange={handleReview} className="reviewBox" type="text" />

          <button
            className={inputReview ? 'submitButton' : 'nonSubmitButton'}
            onClick={handleInputReview}
          >
            등록하기
          </button>
        </div>
      </div>

      <div className="oneLineReview">
        {review.map(review => {
          return (
            <div key={review.id} className="oneLineWrap">
              <div>{startRating(review.rating)}</div>
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
