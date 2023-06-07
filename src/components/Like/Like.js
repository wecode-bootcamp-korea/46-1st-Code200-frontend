import React from 'react';
import './Like.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Like({ isHeart, LikeUpdate }) {
  return (
    <button className="like">
      <FontAwesomeIcon
        className={isHeart ? 'faSolidFaHeart' : 'faRegularFaHeart'}
        icon={faHeart}
        onClick={() => LikeUpdate()}
      />
    </button>
  );
}

export default Like;
