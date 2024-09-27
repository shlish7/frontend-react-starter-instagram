import React, {useState} from 'react'
import Like from "../../assets/svg/like.svg?react";
import Comment from "../../assets/svg/comment.svg?react";
import Share from "../../assets/svg/share.svg?react";
import SaveIcon from "../../assets/svg/SaveIcon.svg?react";
import RedLike from "../../assets/svg/red-like.svg?react";

export function ButtonsView({isImgDoubleClicked}) {

  const [isLiked,setIsLiked] = useState()

  function onChangeLike(){
    console.log('changeLike');
    setIsLiked(prev => !prev)
  }
  
  return (
    <section className="feed-item-img-icons">
    <section className="feed-item-img-icons-group">
      {isLiked || isImgDoubleClicked ?  <RedLike onClick={onChangeLike}/> : <Like onClick={onChangeLike} />}
     
      <Comment />
      <Share />
    </section>
    <section className="feed-item-img-save-icon">
      <SaveIcon />
    </section>
  </section>
    )
}

