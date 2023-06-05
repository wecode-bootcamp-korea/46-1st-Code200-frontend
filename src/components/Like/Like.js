import React from 'react';

function Like() {
  const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = () => {
      if (isLiked) {
        setCount(count - 1);
        setIsLiked(false);
      } else {
        setCount(count + 1);
        setIsLiked(true);
      }
    };
  
    return (
      <div>
        <button onClick={handleLike}>
          {isLiked ? 'Unlike' : 'Like'}
        </button>
        <span>{count}</span>
      </div>
    );
  };
  



export default Like;
