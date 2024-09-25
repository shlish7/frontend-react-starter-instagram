import React, { useState, useEffect } from 'react'
// import { instagramIcons } from '../assets/icons/icons'
import HomeIcon from '../assets/svg/home-icon.svg?react'
import InstagramIconLogo from '../assets/svg/instagram-side-bar-logo.svg?react'
import InstagramNarrowLogo from '../assets/svg/instagram-icon-logo.svg?react'
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
import { SearchBar } from './SearchBar'



export function SideBar() {

  const [openModal, setOpenModal] = useState(false)
  const [openSerachBar, setOpenSearchBar] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [changeToNarrow, setChangeToNarrow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is less than 1264px
      const isSmallScreen = window.innerWidth < 1264;
      setChangeToNarrow(isSmallScreen);  // Update the state based on the screen size
      setIsSidebarOpen(window.innerWidth >= 768); // Adjust the sidebar visibility as needed
      console.log(window.innerWidth)

    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
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




  function onChooseOption(ev) {

    ev.stopPropagation()
    const { value, name, textContext } = ev.currentTarget.dataset

    if (name.toLowerCase() === 'create') {
      setOpenModal(prev => !prev)
    }

    else if (name.toLowerCase() === 'search') {
      setOpenSearchBar(prev => !prev)
    }

  }

  function onCloseModal() {
    setOpenModal(prev => !prev)

  }

  function onCloseSearchBar(){
    setOpenSearchBar(prev => !prev)

  }

  return (
    <>

      <section className={!changeToNarrow ? "wide-side-bar-container" : "narrow-side-bar-container"} >
        <ul className="side-bar-ul">
          {!changeToNarrow ? <InstagramIconLogo className='instagram-logo' /> : <InstagramNarrowLogo className='instagram-narrow-logo' />}

          {instagramIcons.map((icon, idx) => (
            <li key={idx}
              data-value={icon.name}
              data-name={icon.name}

              className='side-bar-li'
              onClick={onChooseOption}


            >

              {openSerachBar  && icon.name.toLowerCase()  ==='search' ? <SearchBar onCloseModal={onCloseSearchBar} /> : null}
              {openModal ? <CreatePost onCloseModal={onCloseModal} /> : null}

              {icon.svg && <icon.svg />}
              {icon.name === 'Profile' && <ImageAvatars avatarHeight='30px !important' avatarWidth='30px !important' />}
              {!changeToNarrow && icon.name}
              {/* { icon.name === 'profile' ? <ImageAvatars/>            */}
            </li>
          ))}
        </ul>
        <section className='left-side-bar-footer'>
          <section className='side-bar-botton-icons'>
            <ThreadsIcon />
            {!changeToNarrow ? <span>Threads</span> : null}
          </section>
          <section className='side-bar-botton-icons'>
            <MoreIcon />
            {!changeToNarrow ? <span>More</span> : null}

          </section>

        </section>
      </section>



    </>

  )
}