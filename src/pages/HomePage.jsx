import { SideBar } from "../cmps/SideBar";
import { Carousel } from "../cmps/Carousel";
import ImageAvatars from "../cmps/ImageAvatars";
import { Link , Outlet, useNavigate} from "react-router-dom";
import Verified from "../assets/svg/verified.svg?react";
import Like from "../assets/svg/like.svg?react";
import Comment from "../assets/svg/comment.svg?react";
import Share from "../assets/svg/share.svg?react";
import SaveIcon from "../assets/svg/SaveIcon.svg?react";
import RedLike from "../assets/svg/red-like.svg?react";

import MoreOptions from "../assets/svg/more-options-icon.svg?react";
import hazinor from "../assets/images/hazinor.jpg";
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