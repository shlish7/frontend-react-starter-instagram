import React, { useEffect } from 'react'
import ImageAvatars from './ImageAvatars';
import CloseModal from '../assets/svg/close-btn-white.svg?react'


export default function LikesList({ feedItem, onCloseModal }) {

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
          {feedItem.likes.map((item, idx) =>
            <li key={idx} className='likes-list'>
              <section className="likes-list-avatar-user">
              <ImageAvatars /> 
              {item.userId}
              </section>
             
              <button className='like-list-modal-button'>Follow</button>
            </li>
          )}
        </ul>

      </section>

    </section>
  )
}
