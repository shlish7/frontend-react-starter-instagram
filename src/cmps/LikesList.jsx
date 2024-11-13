import { useEffect, useState } from 'react'
import { userService } from '../services/user.service';
import ImageAvatars from './ImageAvatars.jsx'
import CloseModal from '../assets/svg/close-btn-white.svg?react';

export default function LikesList({ feedItem, onCloseModal }) {

  const [likesWithUsers, setLikesWithUsers] = useState([]);

  useEffect(() => {
    const fetchUsersForLikes = async () => {
      const likesWithUserData = await Promise.all(
        feedItem?.likes?.map(async (item) => {
          const user = await userService.getById(item.userId);
          return { ...item, user };
        })
      );

      console.log("likesWithUserData: ", likesWithUserData);
      
      setLikesWithUsers(likesWithUserData);
    };

    fetchUsersForLikes();
  }, [feedItem]);

  function onCloseLikesModal(ev){
    ev.stopPropagation()
    ev.preventDefault()
    onCloseModal()
  }
  return (

    <section className='likes-modal'>
      <section className='likes-modal-section'>
        <span className='likes-modal-title'>Likes</span>
        <CloseModal onClick={onCloseLikesModal}/>
      </section>
      <section className="likes-modal-body">
        <ul className='likes-ul-modal'>
          {likesWithUserData?.map((item, idx) =>
            <li key={idx} className='likes-list'>
              <section className="likes-list-avatar-user">
              <ImageAvatars img={likesWithUsers.item.user.imgUrl}/>
              {item.user.username}
              </section>
             
              <button className='like-list-modal-button'>Follow</button>
            </li>
          )}
        </ul>

      </section>

    </section>
  )
}
