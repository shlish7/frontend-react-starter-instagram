import React, { useState } from 'react'
import { Link } from "react-router-dom";
import EmojiPicker from 'emoji-picker-react';
import EmojiPickerIcon from '../../assets/svg/emoji-picker.svg?react';



export function CommnetsView({ onOpenFeedItem }) {

  const [isEmojiPicker, setIsEmojiPicker] = useState(false)

  function onOpenEmojiPicker() {
    setIsEmojiPicker(prev => !prev)
  }

  return (
    <section className="home-comments-container">
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
          autoComplete="off"
          autoCorrect="off"
          dir=""
          aria-label="Add a comment…"
        />

        
        {/* <EmojiPickerIcon className='emoji-picker' onClick={onOpenEmojiPicker} />

        {isEmojiPicker ? <EmojiPicker /> : null} */}

<div className="emoji-picker-container">
          <EmojiPickerIcon className='emoji-picker' onClick={onOpenEmojiPicker} />
          {isEmojiPicker && (
            <div className="emoji-picker-wrapper">
              <EmojiPicker />
            </div>
          )}
        </div>
      </section>


    </section>
  )
}

