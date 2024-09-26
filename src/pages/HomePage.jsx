import { SideBar } from "../cmps/SideBar";
import { Outlet, useNavigate} from "react-router-dom";
import AvatarsStoryView from "../cmps/Story/AvatarsStoryView";
import { FeedItem } from "../cmps/FeedItem/FeedItem";

export function HomePage() {

const navigate = useNavigate()

  function onOpenFeedItem(ev){
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
        <SideBar />
      </aside>
    <FeedItem onOpenFeedItem={onOpenFeedItem}/>
        <Outlet context={{onOpenFeedItem}}/>
      {/* <aside className="home-right-suggestion">suggestion</aside> */}
    </section>
  );
}