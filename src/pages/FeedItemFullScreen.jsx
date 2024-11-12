import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Carousel } from "../cmps/Carousel.jsx";
import { CommentsIndex } from "../cmps/Comments/CommentsIndex.jsx";
import CloseModal from '../assets/svg/close-modal-icon.svg?react'
import { feedItemService } from "../services/feeditem.service.js";
import ImageAvatars from '../cmps/ImageAvatars.jsx';
import { ButtonsView } from '../cmps/FeedItem/ButtonsView.jsx';
import { LikesCount } from '../cmps/FeedItem/LikesCount.jsx';
import { NewComment } from '../cmps/Comments/NewComment.jsx';
import { userService } from '../services/user.service.js';
import Verified from "../assets/svg/verified.svg?react";


export function FeedItemFullScreen() {
  const { pId } = useParams()
  const [feedItem, setFeedItem] = useState(null)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const [ isImgDoubleClicked, setIsImgDoubleClicked ] = useState(false);

  function onDoubleClicked() {
    setIsImgDoubleClicked(true)   
  }

  useEffect(() => {
    loadFeedItem()
  }, [pId])

  useEffect(() => {
    feedItem && loadUser()
  }, [feedItem])

  async function loadFeedItem() {
    try {
      const feedItem = await feedItemService.getById(pId)
      setFeedItem(feedItem)
      console.log('feedItem' ,feedItem);
    } catch {
      console.log("error loading feed item")
    }
  }

  async function loadUser() {
    try {
      const user = await userService.getById(feedItem.userId)
      setUser(user)
      console.log('user', user);
    } catch {
      console.log("error loading user")
    }
  }
  
  function onNavigateBack() {
    navigate('/')
  }

  return (
    <>
      <CloseModal className='close-modal-icon' onClick={onNavigateBack} />

      <section className="feed-item-container-full-screen">
        { feedItem && <Carousel feedItem={feedItem} fullScreen={true} onDoubleClicked={onDoubleClicked} isImgDoubleClicked={isImgDoubleClicked}  /> }
        <section className="full-screen-comments">

          <section className="full-screen-comment-user-details">
            { user?.imgUrl && <ImageAvatars img={user.imgUrl} avatarWidth='44px' avatarHeight='44px'/> }
            { user?.username && <span className="full-screen-comments-user-name">{user.username}</span> }
            <Verified/>
          </section>
          <section className="scrollable-comments">

          { feedItem && <CommentsIndex feedItem={feedItem} /> }
          </section>


          <section className="full-screen-button-and-likes">
            <ButtonsView isImgDoubleClicked={isImgDoubleClicked}/>
            { feedItem?.likes?.length > 0 && <LikesCount feedItem={feedItem}/> }
          </section>     

          <section className="full-screen-new-comment">
            <NewComment feedItem={feedItem} fullScreen={true}/>
          </section>
        </section>
      </section>
    </>
  );
}