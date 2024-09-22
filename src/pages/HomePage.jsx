import { SideBar } from "../cmps/SideBar";
import { Carousel } from "../cmps/Carousel";
import ImageAvatars from '../cmps/ImageAvatars'
import { Link } from 'react-router-dom'
import Verified from '../assets/svg/verified.svg?react'
import Like from '../assets/svg/like.svg?react'
import Comment from '../assets/svg/comment.svg?react'
import Share from '../assets/svg/share.svg?react'
import SaveIcon from '../assets/svg/SaveIcon.svg?react'

import MoreOptions from '../assets/svg/more-options-icon.svg?react'
import hazinor from '../assets/images/hazinor.jpg'
import AvatarsStoryView from "../cmps/Story/AvatarsStoryView";

export function HomePage() {

    return (
        <section className="instagram-home-page">
            <header className="home-header">
                <AvatarsStoryView className='avatarr-story-view' />
            </header>
            <aside className="home-left-side-bar">
                <SideBar />
            </aside>
            <main className="home-feed">
                <section className="home-feed-container">
                    <section className="img-title-container">
                        <section className="avatar-and-user-details">
                            <section className="avatar">
                                <ImageAvatars img={hazinor} avatarHeight='30px !important' avatarWidth='30px !important' />
                            </section>
                            <section className="home-img-title-user-details">
                                <section className="home-user-title-container">
                                    <Link to="/" className="home-title-user-name">User.Name</Link>
                                    <Verified className='home-title-verified' />
                                    <span className='home-title-dot'>.</span>
                                    <time className='home-posted-time'>15h</time>

                                </section>
                                <section className="home-title-details">
                                    <Link to="/" >
                                        <span className="home-title-caption">veneris
                                            <span>.</span>
                                            Vivaldi Winter Drill #2
                                        </span>

                                    </Link>

                                </section>
                            </section>
                        </section>

                        <section className="home-page-img-title"></section>

                        <section className="img-title-more-option">
                            <MoreOptions className='home-more-options-icon' />
                        </section>
                    </section>
                    <Carousel></Carousel>
                    <section className="feed-item-img-icons">
                        <section className="feed-item-img-icons-group">
                            <Like />
                            <Comment />
                            <Share />
                        </section>
                        <section className="feed-item-img-save-icon">
                            <SaveIcon />

                        </section>
                    </section>

                </section>


            </main>

            {/* <aside className="home-right-suggestion">suggestion</aside> */}
        </section>
    )
}

