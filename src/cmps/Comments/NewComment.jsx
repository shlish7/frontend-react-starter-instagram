import EmojiPicker from 'emoji-picker-react'
import { useEffect, useState } from 'react'
import EmojiPickerIcon from '../../assets/svg/emoji-picker.svg?react';
import EmojiIconFullScreen from '../../assets/svg/emoji-icon-full-screen.svg?react';

import LikeCommentIcon from '../../assets/svg/like-comment-icon.svg?react';
import UnLikeCommentIcon from '../../assets/svg/red-like-comment-icon.svg?react';
import { updateFeedItem } from '../../store/feedItem.actions';


export function NewComment({ handleCommentSubmit, feedItem }) {
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

      // Attach the event listener to the document
      document.addEventListener('keydown', handleKeyDown);

      // Cleanup the event listener when component unmounts or updates
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isEmojiPicker]);

    async function onUpdateComment({target}){
        const { value } = target
        
        const userId = "uid002"; // TODO: Replace with logged-in userId
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
        setComment(''); // Optionally clear the textarea after submission

        handleCommentSubmit && handleCommentSubmit(comment.trim())
      }
    };

    function onEmojiClick(emojiData) {
      console.log('Selected Emoji:', emojiData.emoji); // This should now print the selected emoji.
      setComment(prevComment => prevComment + emojiData.emoji)// Append emoji to comment
      setIsEmojiPicker(prev => !prev)
    
      if (comment.trim() !== '' || emojiData.emoji) {
        setPostCommentBtn(true)
      }
    }

    return (
      <>
        { newComment &&
          <section className="new-comment-container">
            <section className='new-comment-details'>
              <span className="new-comment-user-name">{'User Name'}</span>
              <span className="new-comment">{newCommentTxt}</span>
            </section>
            {!isLikedComment ? <LikeCommentIcon className='like-comment-icon' onClick={onLikeComment}/> : <UnLikeCommentIcon onClick={onLikeComment}/>}
          </section>
        }

        <section className="add-comment-and-emoji">
          <textarea
            type="text"
            className="home-add-comment"
            placeholder="Add a comment…"
            aria-label="Add a comment…"
            value={comment} // Bind the state to the textarea's value
            onChange={onUpdateComment}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onHandleCommentSubmit();
              }
            }}
          />

          { postCommentBtn && <button className="post-comment-btn" onClick={onHandleCommentSubmit}>Post</button> }
          
          <div className="emoji-picker-container">
            <EmojiPickerIcon className='emoji-picker' onClick={onOpenEmojiPicker} />
            {isEmojiPicker && (
              <div className="emoji-picker-wrapper">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>
        </section>
      </>
    )
  }

