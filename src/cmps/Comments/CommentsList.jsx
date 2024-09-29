import React, {useEffect, useState} from 'react'
import { CommentsPreview } from './CommentsPreview'


export function CommentsList({feedItem}) {


    // const comments = [
    //     {
    //       "comment_id": '1',
    //       "username": "user1",
    //       "comment": "This is amazing!",
    //       "created_time": "2024-09-24T12:00:00Z"
    //     },
    //     {
    //         "comment_id": '2',
    //       "username": "user2",
    //       "comment": "Love this post!",
    //       "created_time": "2024-09-24T12:05:00Z"
    //     },
    //     {
    //         "comment_id": '3',
    //       "username": "user3",
    //       "comment": "Great content!",
    //       "created_time": "2024-09-24T12:10:00Z"
    //     },
    //     {
    //         "comment_id": '4',
    //       "username": "user4",
    //       "comment": "So inspiring!",
    //       "created_time": "2024-09-24T12:15:00Z"
    //     },
    //     {
    //         "comment_id": '5',
    //       "username": "user5",
    //       "comment": "Keep it up!",
    //       "created_time": "2024-09-24T12:20:00Z"
    //     },
    //     {
    //         "comment_id": '6',
    //       "username": "user6",
    //       "comment": "Fantastic!",
    //       "created_time": "2024-09-24T12:25:00Z"
    //     },
    //     {
    //         "comment_id": '7',
    //       "username": "user7",
    //       "comment": "Wow, just wow!",
    //       "created_time": "2024-09-24T12:30:00Z"
    //     },
    //     {
    //         "comment_id": '8',
    //       "username": "user8",
    //       "comment": "Absolutely love this!",
    //       "created_time": "2024-09-24T12:35:00Z"
    //     },
    //     {
    //         "comment_id": '9',
    //       "username": "user9",
    //       "comment": "So cool!",
    //       "created_time": "2024-09-24T12:40:00Z"
    //     },
    //     {
    //         "comment_id": '10',
    //       "username": "user10",
    //       "comment": "Amazing work!",
    //       "created_time": "2024-09-24T12:45:00Z"
    //     }
    //   ]


      console.log('comment list: ', feedItem)

  return (
    // <div>CommentsList</div>
    <section className="comments-list-section">
    <ul className="comments-list-ul">
    {feedItem.comments.map(Item=>{
      <p>{Item.comment}</p>
    })}

    </ul>
    </section>

  )
}

// {comments.map(comment => (
//   // <div key={comment.comment_id
//   <div key={comment.userId
//   } className='comment-item'>
//        <CommentsPreview comment={comment}  key={comment.userId}  />
//        {/* onUpdateComment={onUpdateComment} */}

//   </div>


// ))}