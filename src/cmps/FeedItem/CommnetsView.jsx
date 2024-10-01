import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import EmojiPickerIcon from '../../assets/svg/emoji-picker.svg?react';
import LikeCommentIcon from '../../assets/svg/like-comment-icon.svg?react';
import UnLikeCommentIcon from '../../assets/svg/red-like-comment-icon.svg?react';
import { NewComment } from '../Comments/NewComment';

export function CommnetsView({ feedItem, handleCommentSubmit }) {

  const [isEmojiPicker, setIsEmojiPicker] = useState(false)
  const [comment, setComment] = useState('')
  const [newComment, setNewComment] = useState()
  const [postCommentBtn, setPostCommentBtn] = useState(false)


  return (
    <section className="home-comments-container" >
      <section className="home-comments">
        <Link to={`/p/${feedItem._id}`}>

          <span> View all {feedItem.comments.length} comments</span>
        </Link>
      </section>

      <NewComment handleCommentSubmit={handleCommentSubmit} />
    </section>
  )
}

