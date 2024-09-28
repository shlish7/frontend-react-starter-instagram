import React from "react";
import { useNavigate } from 'react-router'

import { useParams } from "react-router";
import { useOutletContext } from "react-router-dom";
import {Carousel} from "../cmps/Carousel.jsx";
import { CommentsIndex } from "../cmps/Comments/CommentsIndex.jsx";
import CloseModal from '../assets/svg/close-modal-icon.svg?react'


export function FeedItemFullScreen() {
  // const {pId} = useParams()
  const { pId } = useOutletContext();
  const navigate = useNavigate()


  function onNavigateBack(){
    navigate('/')
  }

  return (
    <>
    <CloseModal className='close-modal-icon' onClick={onNavigateBack}/>

    <section className="feed-item-container">
      <Carousel/>      
      {/* <section>test1</section> */}
      <CommentsIndex/>
      {/* <section className="feed-item-comments">test2</section> */}
    </section>
    </>
  );
}