import { useSelector } from 'react-redux'
import { login, logout, signup } from '../store/user.actions.js'


import { LeftSideBar } from "../cmps/LeftSideBar";
import { Outlet, useNavigate } from "react-router-dom";
import AvatarsStoryView from "../cmps/Story/AvatarsStoryView";
import { FeedItem } from "../cmps/FeedItem/FeedItem";
import { LoginSignup } from '../cmps/LoginSignup'
import ImageAvatars from '../cmps/ImageAvatars.jsx';
import { RightSideBar } from '../cmps/RightSideBar.jsx';


export function HomePage() {
  const user = useSelector(storeState => storeState.userModule.user)


  const navigate = useNavigate()

  function onOpenFeedItem(ev) {
    ev.stopPropagation()
    ev.preventDefault()
    navigate('/p')
  }



  return (
    <section className="instagram-home-page">
      <header className="home-header">
        <AvatarsStoryView className="avatarr-story-view" />
      </header>

      <aside className="home-left-side-bar">
        <LeftSideBar />
      </aside>
      <FeedItem onOpenFeedItem={onOpenFeedItem} />
      <Outlet context={{ onOpenFeedItem }} />
      <aside className="home-right-bar">
        <RightSideBar/>
      </aside>
    </section>
  );
}