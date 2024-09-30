import EmojiPicker from 'emoji-picker-react'
import React, { useEffect, useState } from 'react'
import EmojiPickerIcon from '../../assets/svg/emoji-picker.svg?react';
import EmojiIconFullScreen from '../../assets/svg/emoji-icon-full-screen.svg?react';
import { useLocation } from 'react-router';


export function NewComment() {
    const [comment, setComment] = useState('')
    const [newComment, setNewComment] = useState()

    const [postCommentBtn, setPostCommentBtn] = useState(false)
    const [isEmojiPicker, setIsEmojiPicker] = useState(false)

    // const location = useLocation();
    // const { fullScreen } = location.state || {};  // Access `state` directly
  
    // console.log(fullScreen); 
      
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



    function onUpdateComment({target}){
        const { value } = target
        setComment(value)
        if (value.trim() !== '') {
          setPostCommentBtn(true)
        } else {
          setPostCommentBtn(false)
        }
      }

      function onOpenEmojiPicker() {
        setIsEmojiPicker(prev => !prev)
      }

      function onDisplayNewComment(ev){
        ev.stopPropagation()
        setNewComment(prev => !prev)
        setComment('')
        setPostCommentBtn(false)
      }

      function onEmojiClick(emojiData) {
        console.log('Selected Emoji:', emojiData.emoji); // This should now print the selected emoji.
        setComment(prevComment => prevComment + emojiData.emoji)// Append emoji to comment
        setIsEmojiPicker(prev => !prev)
      
          if (comment.trim() !== '' || emojiData.emoji) {
            setPostCommentBtn(true)
          }
        }

  return (
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
)
}

