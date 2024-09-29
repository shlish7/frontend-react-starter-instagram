import { useEffect, useState } from 'react'
import { userService } from '../../services/user.service'

export function CommentsList({feedItem}) {
    const [commentsWithUsers, setCommentsWithUsers] = useState([]);

    useEffect(() => {
      const fetchUsersForComments = async () => {
        const commentsWithUserData = await Promise.all(
          feedItem.comments.map(async (item) => {
            const user = await userService.getById(item.userId); 
            return { ...item, user }; 
          })
        );
        console.log("commentsWithUsers", commentsWithUserData)
        setCommentsWithUsers(commentsWithUserData);
      };
  
      fetchUsersForComments();
    }, [feedItem]);

  return (
    // <div>CommentsList</div>
    <section className="comments-list-section">
    <ul className="comments-list-ul">
    {feedItem.comments.map((item, index) => (
        <li key={index}>
          <p>{item.comment}</p>
        </li>
      ))}
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