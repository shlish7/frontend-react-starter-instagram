import React from 'react'

import ImageAvatars from '../ImageAvatars'

export function CommentsPreview({comment}) {

  return (
    <li className='comments-preview'>
        <ImageAvatars/>
        <span>{comment.username}</span>

    </li>
  )
}