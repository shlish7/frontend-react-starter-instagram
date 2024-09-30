import React from 'react'

export function LikesCount({feedItem}) {
  console.log('likes count',feedItem);
  return (
    <section className="like-count-container">
    <span>{feedItem.likesCount}</span>
    <span>likes</span>
  </section>
    )
}

 