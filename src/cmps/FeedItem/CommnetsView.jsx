import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import EmojiPickerIcon from '../../assets/svg/emoji-picker.svg?react';
import LikeCommentIcon from '../../assets/svg/like-comment-icon.svg?react';
import UnLikeCommentIcon from '../../assets/svg/red-like-comment-icon.svg?react';

export function CommnetsView({ feedItem, handleCommentSubmit }) {

  const [isEmojiPicker, setIsEmojiPicker] = useState(false)
  const [comment, setComment] = useState('')
  const [newComment, setNewComment] = useState()
  const [postCommentBtn, setPostCommentBtn] = useState(false)
  const[isLikedComment,setIsLikedComment] = useState(false)

  // Event listener for closing emoji picker on 'Esc' key press
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isEmojiPicker) {
        setIsEmojiPicker(false);
      }
    }

    // Attach the event listener to the document
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when component unmounts or updates
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEmojiPicker]);


  const onHandleCommentSubmit = () => {
    if (comment.trim() !== '') {
      console.log('Comment submitted:', comment);
      handleCommentSubmit(comment.trim())
      setComment(''); // Optionally clear the textarea after submission
    }
  };

  function onOpenEmojiPicker() {
    setIsEmojiPicker(prev => !prev)
  }

function onEmojiClick(emojiData) {
  console.log('Selected Emoji:', emojiData.emoji); // This should now print the selected emoji.
  setComment(prevComment => prevComment + emojiData.emoji)// Append emoji to comment
  setIsEmojiPicker(prev => !prev)

    if (comment.trim() !== '' || emojiData.emoji) {
      setPostCommentBtn(true)
    }
  }

function onUpdateComment({target}){
  const { value } = target
  setComment(value)
  if (value.trim() !== '') {
    setPostCommentBtn(true)
  } else {
    setPostCommentBtn(false)
  }
}

function onDisplayNewComment(ev){
  ev.stopPropagation()
  setNewComment(prev => !prev)
  setComment('')
  setPostCommentBtn(false)
}

function onLikeComment(){
  setIsLikedComment(prev => !prev)

}

  return (
    <section className="home-comments-container" >
      <section className="home-comments">
        <Link to={`/p/${feedItem._id}`}>
          <span> View all 61 comments</span>
        </Link>
      </section>
    {newComment &&
      <section className="new-comment-container">
        <section className='new-comment-details'>
          <span className="new-comment-user-name">{'User Name'}</span>
          <span className="new-comment">{'New Comment'}</span>
        </section>
        { !isLikedComment ? <LikeCommentIcon className='like-comment-icon' onClick={onLikeComment}/> : <UnLikeCommentIcon onClick={onLikeComment}/>}
      </section>
    }
      <section className="add-comment-and-emoji">
        <textarea
          type="text"
          className="home-add-comment"
          placeholder="Add a comment…"
          aria-label="Add a comment…"
          value={comment} // Bind the state to the textarea's value
          // onChange={(e) => setComment(e.target.value)} // Update the state on input change
          onChange={onUpdateComment}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onHandleCommentSubmit();
            }
          }}
        />
        {postCommentBtn && <button className="post-comment-btn" onClick={onDisplayNewComment}>Post</button>}
        <div className="emoji-picker-container">
          <EmojiPickerIcon className='emoji-picker' onClick={onOpenEmojiPicker} />
          {isEmojiPicker && (
            <div className="emoji-picker-wrapper">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
      </section>
    </section>
  )
}

