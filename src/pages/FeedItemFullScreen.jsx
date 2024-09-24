import React from "react";
import { useParams } from "react-router";
import { useOutletContext } from "react-router-dom";
import {Carousel} from "../cmps/Carousel.jsx";
import { CommentsIndex } from "../cmps/Comments/CommentsIndex.jsx";

export function FeedItemFullScreen() {
  // const {pId} = useParams()
  const { pId } = useOutletContext();

  return (
    <section className="feed-item-container">
      <Carousel></Carousel>
      {/* <section>test1</section> */}
      <CommentsIndex/>
      {/* <section className="feed-item-comments">test2</section> */}
    </section>
  );
}