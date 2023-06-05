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
      // id: review[review.length - 1].id + 1,
      // userInfo: inputReview,
      //어떤게 담기는지 데이터의 형태 객체인지 뭔지 uerinfo의 이메일? 1. UI변경 미루기 호출 먼저 2. post에 대한 res값으로 userinfo 객체 받아서 username받아오기 1.state 배열에 새로 입력한 댓글 추가 > UI바뀜 (post 직후 get요청 다시) 2.post요청에 res에 새로 입력한 댓글정보 받아와서 state 추가 3.post요청 res에 새로운 댓글이 추가된 전체배열을 받아노기
      content: inputReview,
      rating: reviewRating,
    };

    const userToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE2ODU4Nzc5Mjl9.V7MFmcHgiC4CBGg0WtAxwr19elCJ2Nlvn1tTfSsGbhk';

    // const updateReview = { newReview, ...review };
    // setReview(updateReview);
    setInputReview('');
    // console.log(updateReview);
    // console.log(inputReview);
    fetch('http://10.58.52.237:8000/reviews/2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: userToken,
      },
      body: JSON.stringify(newReview),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        getReview();
      })
      .catch(error => console.error(error));
  }

  // 기존 리뷰
  const getReview = () => {
    fetch('http://10.58.52.237:8000/products/2', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.reviews);
        setReview(data.reviews);
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

          <div className="buttonWrap">
            <input onChange={handleReview} className="reviewBox" type="text" />

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
              <div>{startRating(review.rating)}</div>
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
