import React from 'react'
// import { instagramIcons } from '../assets/icons/icons'
import HomeIcon from '../assets/svg/home-icon.svg?react'
import InstagramIconLogo from '../assets/svg/instagram-side-bar-logo.svg?react'
import SearchIcon from '../assets/svg/search-icon.svg?react'
import ExploreIcon from '../assets/svg/explore-icon.svg?react'
import ReelsIcon from '../assets/svg/reels-icon.svg?react'
import MessagesIcon from '../assets/svg/messages-icon.svg?react'
import NotificationsIcon from '../assets/svg/notifications-icon.svg?react'
import CreateIcon from '../assets/svg/create-icon.svg?react'
import ThreadsIcon from '../assets/svg/threads-icon.svg?react'
import MoreIcon from '../assets/svg/more-icon.svg?react'
import ImageAvatars from './ImageAvatars'



export function SideBar() {

  const instagramIcons = [

    // {
    //     name: 'logo',
    //     svg: InstagramIconLogo
    // },
    {
      name: "Home",
      svg: HomeIcon
    },
    {
      name: "Search",
      svg: SearchIcon
    },
    {
      name: "Explore",
      svg: ExploreIcon
    },
    {
      name: "Reels",
      svg: ReelsIcon
    },
    {
      name: "Messages",
      svg: MessagesIcon
    },
    {
      name: "Notifications",
      svg: NotificationsIcon
    },
    {
      name: "Create",
      svg: CreateIcon
    },
    {
      name: "Profile",
      svg: null
    }
    // {
    //     name: "Threads",
    //     svg: ThreadsIcon
    // },
    // {
    //     name: "More",
    //     svg: MoreIcon
    // }
  ]

  console.log(instagramIcons)

  return (
    <>
      

      <ul className="side-bar-ul">
      <InstagramIconLogo className='instagram-logo' />
        {instagramIcons.map((icon, idx) => (
          <li key={idx}
            value={icon.name}
            className='side-bar-li'
          >
            {icon.svg && <icon.svg />} {icon.name === 'Profile' && <ImageAvatars avatarHeight='30px !important' avatarWidth='30px !important'/>} {icon.name}
            {/* { icon.name === 'profile' ? <ImageAvatars/>            */}
          </li>
        ))}
      </ul>
      <section className='left-side-bar-footer'>
        <section className='side-bar-botton-icons'>
          <ThreadsIcon />
          <span>Threads</span>
          </section>
          <section className='side-bar-botton-icons'>
          <MoreIcon/>
          <span>More</span>

          </section>
        
      </section>



    </>

  )
}