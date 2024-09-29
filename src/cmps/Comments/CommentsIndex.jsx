import React from 'react'
import ImageAvatars from '../../cmps/ImageAvatars.jsx'
import { CommentsList } from './CommentsList.jsx'


export function CommentsIndex({feedItem}) {

  // console.log('CommentsIndex: ', feedItem.comments)
  return (
    // <div>CommentsIndex</div>
    <section className="comments-index">
        <CommentsList feedItem={feedItem}/>
    </section>

  )
}