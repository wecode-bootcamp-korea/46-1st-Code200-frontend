import React from 'react';
import LikeImg from '../../assets/image/heart.png';
import EmptyLikeImg from '../../assets/image/emptyheart.png';
import '../Like/Like.scss';

const Like = ({ like, onClick }) => {
  return (
    <div className="likeicons">
      <img src={like ? LikeImg : EmptyLikeImg} alt="좋아요" onClick={onClick} />
    </div>
  );
};

export default Like;

// 1. 부모 컴포넌트(Review)로부터 받은 props를 토대로
// 2. 분기처리(좋아요 true / false에 대한 이미지 변경, 좋아요 / 취소 처리)
