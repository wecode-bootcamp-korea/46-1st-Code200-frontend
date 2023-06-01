import React, { useState } from 'react';
import Like from '../Like/Like';

const Review = props => {
  const [like, setLike] = useState(true);
  return (
    <div>
      좋아요
      <Like /> onClick={like}
    </div>
  );
};

export default Review;

// 1. Review가 부모 컴포넌트
// 2. 좋아요 여부(state)에 대한 정보를 자식 컴포넌트인 Like 컴포넌트에게 전달해줘야 함(props)
// 3. 좋아요를 변경하는 로직도 전달해줘야 함
