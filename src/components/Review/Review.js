import React, { useEffect, useState } from 'react';
import './Review.scss';

function Review() {
  const [inputReview, setInputReview] = useState('');
  const [review, setReview] = useState([]);

  const handleReview = event => {
    setInputReview(event.target.value);
    console.log(inputReview);
  };

  function handleInputReview() {
    const newReview = {
      id: review.length + 1,
      userInfo: 'WECODE@gmail.com',
      review: inputReview,
      rating: 5,
    };

    const updateReview = [newReview, ...review];
    setReview(updateReview);
    setInputReview('');

    fetch('/data/reviewSample.json', {
      method: 'POST',
      body: JSON.stringify(updateReview),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

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
      </div>

      <div className="reviewSummary">
        <div>
          <p>고객 평점</p>
          <div className="rating">
            <div className="point">
              <img src="/images/star.png" alt="별" />
              <p className="start">5.0</p>
            </div>
          </div>
        </div>

        <div className="submitReview">
          <div className="submitRating">
            <p>별점을 선택해주세요.</p>
            <div className="starts">⭐️⭐️⭐️⭐️⭐️</div>
          </div>
          <input onChange={handleReview} className="reviewBox" type="text" />

          <button onClick={handleInputReview}>등록하기</button>
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
