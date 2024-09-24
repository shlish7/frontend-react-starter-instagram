import React from 'react'

import ImageAvatars from '../ImageAvatars'

export function CommentsPreview({comment}) {
  console.log('Comment',comment.username);
  return (
    <li className='comments-preview'>
        <ImageAvatars/>
        <span>{comment.username}</span>

    </li>


  )
}