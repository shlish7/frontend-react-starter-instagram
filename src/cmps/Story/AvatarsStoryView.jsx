import { useRef, useState } from 'react';
import StoryAvatar from './StoryAvatar';
// import Arrow from '.../assets/svg/carousel-arrow.svg?react'
import Arrow from '../../assets/svg/carousel-arrow.svg?react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadUsers } from '../../store/user.actions.js'

const AvatarsStoryView = () => {
    const users = useSelector(storeState => storeState.userModule.users)
    const scrollRef = useRef(null);
    const [stories, setStories] = useState([])
    const [startIndex, setStartIndex] = useState(0);
    const visibleStories = stories.slice(startIndex, startIndex + 8); // Show 8 stories at a time

    useEffect(() => {
        loadUsers()
    }, [])

    useEffect(() => {
        setStories(Array.from({ length: 30 }, (_, i) => ({
            imgUrl: users[i]?.imgUrl || 'https://via.placeholder.com/150',
            username: users[i]?.username,
            isSeen: i % 2 === 0,
        })))
    }, [users])

    const scrollLeft = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0)); // Decrease index by 4 but not less than 0
    };

    const scrollRight = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 4, stories.length - 8)); // Increase index by 4 but not more than stories.length - 8
    };


    if (!stories.length) return <div>Loading...</div>

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
