import React, {useState} from 'react'
import { Link } from "react-router-dom";

import { Carousel } from "../Carousel.jsx";

import { ButtonsView } from './ButtonsView.jsx';
import { LikesCount } from './LikesCount.jsx';
import { FeedItemDescription } from './FeedItemDescription.jsx';
import { CommnetsView } from './CommnetsView.jsx';
import { FeedItemCreatorDetails } from './FeedItemCreatorDetails.jsx';

export function FeedItem({ onOpenFeedItem }) {

  const [isImgDoubleClicked, setIsImgDoubleClicked] = useState(false);


  function onDoubleClick(isDoubleClickedFromCarousel) {
    console.log('double clicked feed item: ', isDoubleClickedFromCarousel)
    setIsImgDoubleClicked(isDoubleClickedFromCarousel)   
    console.log('double clicked feed item: ', isImgDoubleClicked);
  }

  return (
    <main className="home-feed">
      <section className="home-feed-container">
        <FeedItemCreatorDetails />
        <Carousel onDoubleClick={onDoubleClick} isImgDoubleClicked={isImgDoubleClicked}/>
        <ButtonsView isImgDoubleClicked = {isImgDoubleClicked}/>
        <LikesCount />
        <FeedItemDescription />
        <CommnetsView onOpenFeedItem={onOpenFeedItem} />
      </section>
    </main>
  )
}

