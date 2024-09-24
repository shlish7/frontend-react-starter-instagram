import React from 'react'
import { Link } from "react-router-dom";

import { Carousel } from "../Carousel.jsx";

import { ButtonsView } from './ButtonsView.jsx';
import { LikesCount } from './LikesCount.jsx';
import { FeedItemDescription } from './FeedItemDescription.jsx';
import { CommnetsView } from './CommnetsView.jsx';
import { FeedItemCreatorDetails } from './FeedItemCreatorDetails.jsx';

export function FeedItem({onOpenFeedItem}) {
  return (
    <main className="home-feed">
    <section className="home-feed-container">
      <FeedItemCreatorDetails/>

      <Carousel></Carousel>
    <ButtonsView/>
      <LikesCount/>
    <FeedItemDescription/>
  <CommnetsView onOpenFeedItem={onOpenFeedItem}/>
    </section>
  </main>
  )
}

