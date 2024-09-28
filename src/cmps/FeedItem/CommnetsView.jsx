import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import EmojiPickerIcon from '../../assets/svg/emoji-picker.svg?react';

export function CommnetsView({ onOpenFeedItem, handleCommentSubmit }) {

  const [isEmojiPicker, setIsEmojiPicker] = useState(false)
  const [comment, setComment] = useState('')
  const [postCommentBtn, setPostCommentBtn] = useState(false)

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


  return (
    <section className="home-comments-container" >
      <section className="home-comments">
        <Link to='/p/pId'>
          <span onClick={onOpenFeedItem}>View all 61 comments</span>
        </Link>
      </section>
      
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
      {postCommentBtn && <button className="post-comment-btn">Post</button>}
        <div className="emoji-picker-container">
          <EmojiPickerIcon className='emoji-picker' onClick={onOpenEmojiPicker} />
          {isEmojiPicker && (
            <div className="emoji-picker-wrapper">
              <EmojiPicker onEmojiClick={onEmojiClick}/>
            </div>
          )}
        </div>
      </section>
    </section>
  )
}

