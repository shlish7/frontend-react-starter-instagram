import { useRef, useState } from 'react';
import StoryAvatar from './StoryAvatar';
// import Arrow from '.../assets/svg/carousel-arrow.svg?react'
import Arrow from '../../assets/svg/carousel-arrow.svg?react'


const AvatarsStoryView = () => {
    const stories = Array.from({ length: 30 }, (_, i) => ({
        imgUrl: 'https://via.placeholder.com/150',
        username: `User${i + 1}`,
        isSeen: i % 2 === 0,
    }));

    const scrollRef = useRef(null);

    // const scrollLeft = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    //     }
    // };

    // const scrollRight = () => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    //     }
    // };

    const [startIndex, setStartIndex] = useState(0);
    const visibleStories = stories.slice(startIndex, startIndex + 8); // Show 8 stories at a time

    const scrollLeft = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0)); // Decrease index by 4 but not less than 0
    };

    const scrollRight = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 4, stories.length - 8)); // Increase index by 4 but not more than stories.length - 8
    };


    return (
        <div className="story-view-container">
            <div className="story-scroll-wrapper">
                {/* <button className="scroll-button left" onClick={scrollLeft}>&lt;</button> */}
                <div className="story-left-arrow">
                    <button className="scroll-button-left" onClick={scrollLeft}>
                        <Arrow className='story-left-arrow-icon'/>
                    </button>
                </div>


                <div className="story-scroll" ref={scrollRef}>
                    {visibleStories.map((story, index) => (
                        <StoryAvatar
                            key={index}
                            imgUrl={story.imgUrl}
                            username={story.username}
                            isSeen={story.isSeen}
                        />
                    ))}
                </div>
                <div className="story-right-arrow">
                    {/* <button className="scroll-button-right" onClick={scrollRight}>&gt; </button> */}
                    <button className="scroll-button-right" onClick={scrollRight}>
                        <Arrow className='story-right-arrow-icon'  />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvatarsStoryView;
