import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { LeftSideBar } from "../cmps/LeftSideBar";
import { Outlet, useNavigate } from "react-router-dom";
import AvatarsStoryView from "../cmps/Story/AvatarsStoryView";
import { FeedItem } from "../cmps/FeedItem/FeedItem";
import { RightSideBar } from '../cmps/RightSideBar.jsx';
import { loadUsers } from '../store/user.actions.js';
import { loadfeedItem, loadfeedItems } from '../store/feedItem.actions.js';

export function HomePage() {
  const user = useSelector(storeState => storeState.userModule.user)
  const feedItems = useSelector(storeState => storeState.feedItemModule.feedItems)

  const navigate = useNavigate()

  useEffect(() => {
    loadUsers()
    loadfeedItems()
  }, [])

  function onOpenFeedItem(ev) {
    ev.stopPropagation()
    ev.preventDefault()
    navigate('/p')
  }

  function handleCommentSubmit(comment) {
    console.log(comment)
    //feeditemService.save()
  }


  return (
    <section className="instagram-home-page">
      <header className="home-header">
        <AvatarsStoryView className="avatarr-story-view" />
      </header>

      <aside className="home-left-side-bar">
        <LeftSideBar />
      </aside>

      {/* <FeedItem onOpenFeedItem={onOpenFeedItem} handleCommentSubmit={handleCommentSubmit} /> */}
      <main className="home-feed">

      {feedItems.map(feedItem => (
        <FeedItem
          key={feedItem.id}  // Ensure you add a unique key for each item
          feedItem={feedItem}
          onOpenFeedItem={onOpenFeedItem}
          handleCommentSubmit={handleCommentSubmit}
        />
      ))}
      </main>

      <Outlet context={{ onOpenFeedItem }} />
      <aside className="home-right-bar">
        <RightSideBar />
      </aside>
    </section>
  );
}