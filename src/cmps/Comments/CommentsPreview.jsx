import React from 'react'
import ImageAvatars from '../ImageAvatars'

// export function CommentsPreview({comment}) {
export function CommentsPreview({commentsWithUsers}) {

  return (
    <li className='comments-preview' key={index}>
        <ImageAvatars/>
        <span>{comment.username}</span>
    </li>
  )
}