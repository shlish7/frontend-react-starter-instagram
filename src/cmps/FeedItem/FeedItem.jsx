import { useState } from 'react'
import { Carousel } from "../Carousel.jsx";

import { ButtonsView } from './ButtonsView.jsx';
import { LikesCount } from './LikesCount.jsx';
import { FeedItemDescription } from './FeedItemDescription.jsx';
import { CommnetsView } from './CommnetsView.jsx';
import { FeedItemCreatorDetails } from './FeedItemCreatorDetails.jsx';

export function FeedItem({ feedItem, onOpenFeedItem, handleCommentSubmit }) {

  const [ isImgDoubleClicked, setIsImgDoubleClicked ] = useState(false);

  function onDoubleClick(isDoubleClickedFromCarousel) {
    setIsImgDoubleClicked(isDoubleClickedFromCarousel)   
  }

  return (
    // <main className="home-feed">
      <section className="home-feed-container">
        <FeedItemCreatorDetails feedItem={feedItem} />
        <Carousel feedItem={feedItem} onDoubleClick={onDoubleClick} isImgDoubleClicked={isImgDoubleClicked}/>
        <ButtonsView feedItem={feedItem} isImgDoubleClicked={isImgDoubleClicked} onOpenFeedItem={onOpenFeedItem}/>
        <LikesCount feedItem={feedItem}/>
        <FeedItemDescription feedItem={feedItem}/>
        <CommnetsView feedItem={feedItem} handleCommentSubmit={handleCommentSubmit} />
      </section>
    // </main>
  )
}

