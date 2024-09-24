import React from 'react'
import { Link } from "react-router-dom";


export function CommnetsView({onOpenFeedItem}) {
  return (
    <section className="home-comments-container">
    <section className="home-comments">
        <Link to='/p/pId'>
        <span onClick={onOpenFeedItem}>View all 61 comments</span>

        </Link>
        </section>
    <textarea
      type="text"
      className="home-add-comment"
      placeholder="Add a comment…"
      autocomplete="off"
      autocorrect="off"
      dir=""
      aria-label="Add a comment…"
    />
  </section>  
  )
}

