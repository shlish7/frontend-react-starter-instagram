import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'


export default function ProfileBody({feedItems, user}) {
 
  const [postImages, setPostImages] = useState(feedItems)

  // console.log('feed Items', feedItems);
  // console.log('User', user);
  useEffect(() => {
    const userPosts = feedItems.filter(item => {
        // console.log('item.userID ', item.userId);
        // console.log('user._id ', user._id);
        return item.userId === user._id;
    });
    
    setPostImages(userPosts);
    // console.log('postImages ', userPosts);
}, [feedItems, user]);
  

  
  return (
    <div className='profile-body-container'>
  {/* <Tabs value='npm'  aria-label="basic tabs example">
    <Tab label="Item One"  />
    <Tab label="Item Two" />
    <Tab label="Item Three" />
  </Tabs> */}

    <div className='profile-images'>
    {postImages.map((post, idx) => (
        <div key={idx} className='image-grid-item'>
          <img src={post.imgUrl[0]} alt={`post-${idx}`} />
        </div>
      ))}
    </div>
      </div>
  )
}
