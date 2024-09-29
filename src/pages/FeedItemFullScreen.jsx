import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Carousel } from "../cmps/Carousel.jsx";
import { CommentsIndex } from "../cmps/Comments/CommentsIndex.jsx";
import CloseModal from '../assets/svg/close-modal-icon.svg?react'
import { feeditemService } from "../services/feedItem.service.js";

export function FeedItemFullScreen() {
  const { pId } = useParams()
  const [ feedItem, setFeedItem ] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    loadFeedItem()
  }, [pId])

async function loadFeedItem() {
  try {
    const feedItem = await feeditemService.getById(pId)
    setFeedItem(feedItem)
    console.log("feed item from getById: ", feedItem)
  } catch {
    console.log("error loading feed item")
  }
}
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