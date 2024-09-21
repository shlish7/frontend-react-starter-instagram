import React, { useRef } from 'react';
import StoryAvatar from './StoryAvatar';

const AvatarsStoryView = () => {
    const stories = Array.from({ length: 30 }, (_, i) => ({
        imgUrl: 'https://via.placeholder.com/150',
        username: `User${i + 1}`,
        isSeen: i % 2 === 0,
      }));

    const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="story-view-container">
      <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
      <div className="story-scroll-wrapper">
        <div className="story-scroll" ref={scrollRef}>
          {stories.map((story, index) => (
            <StoryAvatar
              key={index}
              imgUrl={story.imgUrl}
              username={story.username}
              isSeen={story.isSeen}
            />
          ))}
        </div>
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&gt; </button>
    </div>
  );
};

export default AvatarsStoryView;
