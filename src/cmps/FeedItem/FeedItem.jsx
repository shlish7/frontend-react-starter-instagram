import { useState, useEffect } from 'react'
import { Carousel } from "../Carousel.jsx";
import { userService } from '../../services/user.service.js';
import { ButtonsView } from './ButtonsView.jsx';
import { LikesCount } from './LikesCount.jsx';
import { FeedItemDescription } from './FeedItemDescription.jsx';
import { CommnetsView } from './CommnetsView.jsx';
import { FeedItemCreatorDetails } from './FeedItemCreatorDetails.jsx';

export function FeedItem({ feedItem, onOpenFeedItem, handleCommentSubmit }) {

  const [ isImgDoubleClicked, setIsImgDoubleClicked ] = useState(false);
  const [ creator, setCreator ] = useState()

  useEffect(() => {
    getCreator();
  }, [feedItem]);

  async function getCreator() {
    const user = await userService.getById(feedItem?.userId);
    setCreator(user)
  }

  function onDoubleClicked() {
    setIsImgDoubleClicked(true)   
  }

  return (
      <section className="home-feed-container">
        <FeedItemCreatorDetails feedItem={feedItem} user={creator}/>
        <Carousel feedItem={feedItem} onDoubleClicked={onDoubleClicked} isImgDoubleClicked={isImgDoubleClicked} fullScreen={false}/>
        <ButtonsView feedItem={feedItem} isImgDoubleClicked={isImgDoubleClicked} onOpenFeedItem={onOpenFeedItem}/>
        {feedItem?.likes?.length > 0 && <LikesCount feedItem={feedItem}/>}
        <FeedItemDescription feedItem={feedItem} user={creator}/>
        <CommnetsView feedItem={feedItem} handleCommentSubmit={handleCommentSubmit} user={creator} />
      </section>
  )
}

