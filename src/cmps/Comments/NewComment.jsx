import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EmojiPicker from 'emoji-picker-react'
import { updateFeedItem } from '../../store/feedItem.actions';

import EmojiPickerIcon from '../../assets/svg/emoji-icon.svg?react';
import LikeCommentIcon from '../../assets/svg/like-comment-icon.svg?react';
import UnLikeCommentIcon from '../../assets/svg/red-like-comment-icon.svg?react';

export function NewComment({ handleCommentSubmit, feedItem }) {
  const user = useSelector(storeState => storeState.userModule.user)

  const [comment, setComment] = useState('')
  const [newComment, setNewComment] = useState()
  const [newCommentTxt, setNewCommentTxt] = useState()

  const [postCommentBtn, setPostCommentBtn] = useState(false)
  const [isEmojiPicker, setIsEmojiPicker] = useState(false)
  const [isLikedComment, setIsLikedComment] = useState(false)

  function onLikeComment() {
    setIsLikedComment(prev => !prev)
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isEmojiPicker) {
        setIsEmojiPicker(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEmojiPicker]);

  async function onUpdateComment({ target }) {
    const { value } = target

    const userId = user._id//"uid002"; // TODO: Replace with logged-in userId
    const updatedComments = [...feedItem.comments, { userId, comment: value.trim() }];

    const savedFeedItem = await updateFeedItem({ ...feedItem, comments: updatedComments });
    console.log('savedFeedItem ', savedFeedItem);

    setComment(value)
    if (value.trim() !== '') {
      setPostCommentBtn(true)
    } else {
      setPostCommentBtn(false)
    }
  }

  // async function onAddComment(){
  //   const userId = "uid002"; // TODO: Replace with logged-in userId
  //   const updatedLikes = feedItem.likes.some(like => like.userId === userId)
  //     ? feedItem.likes.filter(like => like.userId !== userId)
  //     : [...feedItem.likes, { userId }];

  //   const savedFeedItem = await updateFeedItem({ ...feedItem, likes: updatedLikes });
  //   setIsLiked(prev => !prev);
  // }

  function onOpenEmojiPicker() {
    setIsEmojiPicker(prev => !prev)
  }

  const onHandleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setNewCommentTxt(comment.trim())
      setNewComment(prev => !prev)
      setPostCommentBtn(false)
      setComment(''); 

      handleCommentSubmit && handleCommentSubmit(comment.trim())
    }
  };

  function onEmojiClick(emojiData) {
    setComment(prevComment => prevComment + emojiData.emoji)
    setIsEmojiPicker(prev => !prev)

    if (comment.trim() !== '' || emojiData.emoji) {
      setPostCommentBtn(true)
    }
  }

  return (
    <>
      {newComment &&
        <section className="new-comment-container">
          <section className='new-comment-details'>
            <span className="new-comment-user-name">{user.fullname}</span>
            <span className="new-comment">{newCommentTxt}</span>
          </section>
          {
            !isLikedComment 
            ? <LikeCommentIcon className='like-comment-icon' onClick={onLikeComment} /> 
            : <UnLikeCommentIcon onClick={onLikeComment} />
          }
        </section>
      }

      <section className="add-comment-and-emoji">
        <div className="emoji-picker-container">
          <EmojiPickerIcon className='emoji-picker' onClick={onOpenEmojiPicker} />
          {isEmojiPicker && (
            <div className="emoji-picker-wrapper">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>

        <textarea
          type="text"
          className="home-add-comment"
          placeholder="Add a comment…"
          aria-label="Add a comment…"
          value={comment}
          onChange={onUpdateComment}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onHandleCommentSubmit();
            }
          }}
        />

        {/* {postCommentBtn && <button className="post-comment-btn" onClick={onHandleCommentSubmit}>Post</button>} */}
        {/* {<button className={postCommentBtn===true ? "post-comment-btn" : "post-comment-btn-opacity"}  onClick={onHandleCommentSubmit}>Post</button>} */}
        <button
          className={`post-comment-btn ${!postCommentBtn && "post-comment-btn-opacity"}`}
          onClick={onHandleCommentSubmit}>
          Post
        </button>
      </section>
    </>
  )
}

