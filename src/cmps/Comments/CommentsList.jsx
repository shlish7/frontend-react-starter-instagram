import React from 'react'

export function CommentsList() {
  return (
    // <div>CommentsList</div>
    <section className="comments-list-section">
    <ul className="comments-list-ul">
    {comments.map(comment => (
        <div key={comment.id} className='comment-item'>
             <commentPreview comment={comment}  key={comment.id} onUpdateComment={onUpdateComment} />
             { filterBy.toLowerCase()=== 'trash' &&<button onClick={() => onRemove(comment.id)}>Remove</button>}


        </div>
                    

    ))}

    </ul>
    </section>
    
  )
}

