import React, { useState, useEffect } from 'react'
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
import { CreatePost } from './CreatePost'



export function SideBar() {

  const [openModal,setOpenModal]= useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);   

    };
  }, []);
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

  function onOpenCreateModal(ev){

    console.log('test')
    ev.stopPropagation()
      const { value, name, textContext } = ev.currentTarget.dataset
      console.log('target.dataset: ', ev.currentTarget.dataset)
      console.log('name: ', name)
    if(name.toLowerCase()==='create'){
      console.log('textContext: ', textContext)
      setOpenModal(prev => !prev)
    }
  }

  function onCloseModal(){
    setOpenModal(prev => !prev)

  }

  return (
    <>
      

      <ul className="side-bar-ul">
      <InstagramIconLogo className='instagram-logo' />
        {instagramIcons.map((icon, idx) => (
          <li key={idx}
            data-value={icon.name}
            data-name = {icon.name}

            className='side-bar-li'
            onClick={onOpenCreateModal}
          >
            {openModal ? <CreatePost onCloseModal={onCloseModal}/> : null}
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