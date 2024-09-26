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
import { useEffect } from 'react'
import { userService } from "../services/user.service";
import { useSelector } from 'react-redux';

export function HomePage() {

  const navigate = useNavigate()
  const users = useSelector(storeState => storeState.userModule.users);

  useEffect(() => {
    _createMockUsers()
  }, [])

  async function _createMockUsers() {
    const mockUsers = [
        {
          fullname: "newTest",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727287997/orynyuzism6ogoclldks.png",
          password: "fhgj",
          username: "fhgjhk",
          _id: "mwut3",
        },
        {
          fullname: "hgvjh",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8.png",
          password: "hv",
          username: "hcgj",
          _id: "OWyfg",
        },
        {
          fullname: "testUser1",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8",
          password: "password1",
          username: "testuser1",
          _id: "uid001",
        },
        {
          fullname: "testUser2",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8.png",
          password: "password2",
          username: "testuser2",
          _id: "uid002",
        },
        {
          fullname: "mockUser3",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/8-Fun-Facts-About-Your-Dog-s-Ears_i3fnw8",
          password: "mock123",
          username: "mockuser3",
          _id: "uid005",
        },
        {
          fullname: "mockUser4",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "mock456",
          username: "mockuser4",
          _id: "uid006",
        },
        {
          fullname: "randomUser5",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "randompass5",
          username: "randomuser5",
          _id: "uid007",
        },
        {
          fullname: "randomUser6",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "randompass6",
          username: "randomuser6",
          _id: "uid008",
        },
        {
          fullname: "user7",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass7",
          username: "user7",
          _id: "uid009",
        },
        {
          fullname: "user8",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass8",
          username: "user8",
          _id: "uid010",
        },
        {
          fullname: "testUser9",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288040/testuser9.png",
          password: "pass9",
          username: "testuser9",
          _id: "uid011",
        },
        {
          fullname: "user10",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass10",
          username: "user10",
          _id: "uid012",
        },
        {
          fullname: "randomUser11",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "random11",
          username: "randomuser11",
          _id: "uid013",
        },
        {
          fullname: "randomUser12",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "random12",
          username: "randomuser12",
          _id: "uid014",
        },
        {
          fullname: "mockUser13",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "mockpass13",
          username: "mockuser13",
          _id: "uid015",
        },
        {
          fullname: "testUser14",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass14",
          username: "testuser14",
          _id: "uid016",
        },
        {
          fullname: "user15",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass15",
          username: "user15",
          _id: "uid017",
        },
        {
          fullname: "mockUser16",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass16",
          username: "mockuser16",
          _id: "uid018",
        },
        {
          fullname: "testUser17",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass17",
          username: "testuser17",
          _id: "uid019",
        },
        {
          fullname: "mockUser18",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass18",
          username: "mockuser18",
          _id: "uid020",
        },
        {
          fullname: "randomUser19",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass19",
          username: "randomuser19",
          _id: "uid021",
        },
        {
          fullname: "testUser20",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288022/jawucsl5tovifnvr6599.png",
          password: "pass20",
          username: "testuser20",
          _id: "uid022",
        },
        {
          fullname: "user21",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288052/user21.png",
          password: "pass21",
          username: "user21",
          _id: "uid023",
        },
        {
          fullname: "mockUser22",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288053/mockuser22.png",
          password: "pass22",
          username: "mockuser22",
          _id: "uid024",
        },
        {
          fullname: "testUser23",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288054/testuser23.png",
          password: "pass23",
          username: "testuser23",
          _id: "uid025",
        },
        {
          fullname: "randomUser24",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288055/randomuser24.png",
          password: "pass24",
          username: "randomuser24",
          _id: "uid026",
        },
        {
          fullname: "user25",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288056/user25.png",
          password: "pass25",
          username: "user25",
          _id: "uid027",
        },
        {
          fullname: "randomUser26",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288057/randomuser26.png",
          password: "pass26",
          username: "randomuser26",
          _id: "uid028",
        },
        {
          fullname: "mockUser27",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288058/mockuser27.png",
          password: "pass27",
          username: "mockuser27",
          _id: "uid029",
        },
        {
          fullname: "testUser28",
          imgUrl: "https://res.cloudinary.com/dz9gxtvp9/image/upload/v1727288059/testuser28.png",
          password: "pass28",
          username: "testuser28",
          _id: "uid031",
        },
      ];
    
    if (!users || !users.length) {
      console.log(!users || !users.length)
      for (const user of mockUsers) {
        try {
          const newUser = await userService.signup(user);
          console.log("new user: " ,newUser);
        } catch (error) {
          console.error('Error creating user:', error);
        }
      }
    }
  }

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