import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'


export default function ProfileBody({feedItems, user}) {
 
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
      <section className="tabs-class">
      <Tabs value={activeTab} onChange={handleTabChange}>
      <Tab label="Posts" />
      <Tab label="Tagged" />
      <Tab label="Saved" />
    </Tabs>
      </section>
  
    {activeTab === 0 && (
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
    )}
  </div>
  )
}
