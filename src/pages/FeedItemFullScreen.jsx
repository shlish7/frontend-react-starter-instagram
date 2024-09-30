import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Carousel } from "../cmps/Carousel.jsx";
import { CommentsIndex } from "../cmps/Comments/CommentsIndex.jsx";
import CloseModal from '../assets/svg/close-modal-icon.svg?react'
import { feeditemService } from "../services/feedItem.service.js";
import ImageAvatars from '../cmps/ImageAvatars.jsx';
import { ButtonsView } from '../cmps/FeedItem/ButtonsView.jsx';
import { LikesCount } from '../cmps/FeedItem/LikesCount.jsx';

export function FeedItemFullScreen() {
  const { pId } = useParams()
  const [feedItem, setFeedItem] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    loadFeedItem()
  }, [pId])

  async function loadFeedItem() {
    try {
      const feedItem = await feeditemService.getById(pId)
      setFeedItem(feedItem)
    } catch {
      console.log("error loading feed item")
    }
  }
  function onNavigateBack() {
    navigate('/')
  }

  return (
    <>
      <CloseModal className='close-modal-icon' onClick={onNavigateBack} />

      <section className="feed-item-container-full-screen">
        {feedItem && <Carousel feedItem={feedItem} fullScreen={true} />}
        {/* <section>test1</section> */}
        <section className="full-screen-comments">
          <section className="full-screen-comment-user-details">
            <ImageAvatars/>
            <span className="full-screen-comments-user-name">{'User Name'}</span>
          </section>
          {feedItem && <CommentsIndex feedItem={feedItem} />}
          {/* <ButtonsView />
          <LikesCount feedItem={feedItem}/> */}
        </section>
        {/* <section className="feed-item-comments">test2</section> */}
      </section>
    </>
  );
}