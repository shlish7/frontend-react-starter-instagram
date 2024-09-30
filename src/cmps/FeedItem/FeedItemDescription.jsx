import { useState } from 'react';

export function FeedItemDescription({feedItem,user}) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(true);
  }
  console.log('user Name: ',user);

  return (
    <section className="home-img-description-container">
      {/* <span className="home-img-user-name">User Name</span> */}
      <span className="home-img-user-name">{user.fullname}</span>
      {/* <span className={`home-img-detailes ${isExpanded ? 'expanded' : ''}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa
        nam incidunt, illo, harum in quae perferendis quas minima error,
        id facere architecto hic blanditiis! Ratione explicabo porro
        veniam error.
      </span> */}
      <span className={`home-img-detailes ${isExpanded ? 'expanded' : ''}`}>
          {feedItem.caption}
      </span>
      {!isExpanded && (
        <button className="toggle-btn" onClick={toggleExpand}>
          more
        </button>
      )}
    </section>
  );
}

