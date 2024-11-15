import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import PostsIcon from '../../assets/svg/posts-icon.svg?react'
import SavedIcon from '../../assets/svg/saved-posts-icon.svg?react'
import TaggedIcon from '../../assets/svg/tagged-icon.svg?react'



export default function ProfileBody({ feedItems, user }) {

  const [postImages, setPostImages] = useState(feedItems)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const userPosts = feedItems.filter(item => {

      return item?.userId === user?._id;
    });

    setPostImages(userPosts);
  }, [feedItems, user]);


  function handleTabChange(event, newValue) {
    setActiveTab(newValue)
  }

  return (
    <div>
      <section className="tabs-section">
        <Tabs value={activeTab} onChange={handleTabChange}
          className="custom-tabs"
          aria-label="profile tabs">
          <Tab className='custom-tab' icon={<PostsIcon />} iconPosition="start" label="Posts" />
          <Tab className='custom-tab' icon={<SavedIcon />} iconPosition="start" label="Saved" />
          <Tab className='custom-tab' icon={<TaggedIcon />} iconPosition="start" label="Tagged" />
        </Tabs>
      </section>

      {/* {activeTab === 0 && (
        <div className="grid-container">
          {postImages.map((post, idx) => (
            post.imageUrl.map((url, imgIdx) => (
              <div key={`${idx}-${imgIdx}`} className="grid-item">
                <img
                  src={url}
                  alt={`Post ${idx} Image ${imgIdx}`}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url.jpg'; }}
                />
              </div>
            ))
          ))}
        </div>
      )} */}

      {activeTab === 0 && 
      (<div className="grid-container"> 
      {postImages.map((post, idx) => (post.imageUrl.length > 0 && (<div key={idx} className="grid-item"> 
        <img src={post.imageUrl[0]} 
        alt={`Post ${idx} Image`} onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url.jpg'; }} /> </div>)))} </div>)}


    </div>

  )
}
