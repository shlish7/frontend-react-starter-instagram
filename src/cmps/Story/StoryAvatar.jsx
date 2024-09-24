import React from 'react';
import { Link } from "react-router-dom";

const StoryAvatar = ({ imgUrl, username, isSeen }) => {
  return (
    <Link to='/stories/userName'>
    <div className={`avatar-container ${isSeen ? 'seen' : ''}`}>
      <div className="avatar-border">
        <img src={imgUrl} alt={`${username}'s avatar`} className="avatar-image" />
      </div>
      <p className="username">{username}</p>
    </div>
    </Link>
  );
};

export default StoryAvatar;
