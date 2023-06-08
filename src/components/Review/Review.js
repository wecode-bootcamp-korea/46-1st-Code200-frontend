import React, { useEffect, useState } from 'react';
import StarRating from '../StarRating/StarRating';
import './Review.scss';

function Review() {
  const [average, setAverage] = useState([]);
  const [total, setTotal] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewRating, setReviewRating] = useState('');

  const [inputReview, setInputReview] = useState('');
  const [review, setReview] = useState([]);

  const userId = window.localStorage.getItem('token');

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
      content: inputReview,
      rating: reviewRating,
    };

    // const userToken =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE2ODU4Nzc5Mjl9.V7MFmcHgiC4CBGg0WtAxwr19elCJ2Nlvn1tTfSsGbhk';

    fetch(`${process.env.REACT_APP_SERVER_HOST}/reviews/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userId,
      },
      body: JSON.stringify(newReview),
    })
      .then(res => res.json())
      .then(data => {
        console.log('review' + data);
        getReview();
        setInputReview('');
      })
      .catch(error => console.error(error));
  }

  // 기존 리뷰
  const getReview = () => {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/products/1`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setReview(data.reviews.reverse());
        setAverage(data.product[0].average);
        setTotal(data.reviews.length);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

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
        <span>({total})</span>
      </div>

      <div className="reviewSummary">
        <div className="summary">
          <p>고객 평점</p>
          <div className="rating">
            <div className="point">
              <img src="/images/star.png" alt="별" />
              <p className="start">{average}</p>
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

          <div className="buttonWrap">
            <input
              onChange={handleReview}
              value={inputReview}
              className="reviewBox"
              type="text"
            />

            <button
              className={inputReview ? 'submitButton' : 'nonSubmitButton'}
              onClick={handleInputReview}
            >
              등록
            </button>
          </div>
        </div>
      </div>

      <div className="oneLineReview">
        {review.map(review => {
          return (
            <div key={review.user_Id} className="oneLineWrap">
              <div className="starRationgWrap">
                <div>{startRating(review.rating)}</div>
                <span>{Math.floor(review.rating)}</span>
              </div>

              <div className="userWrap">
                <p className="oneLine">{review.content}</p>
                <p className="userId">{review.userName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
