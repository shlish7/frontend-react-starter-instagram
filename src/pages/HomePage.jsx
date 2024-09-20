import { SideBar } from "../cmps/SideBar";
import { Carousel } from "../cmps/Carousel";
import ImageAvatars from '../cmps/ImageAvatars'
import { Link } from 'react-router-dom'
import Verified from '../assets/svg/verified.svg?react'
import MoreOptions from '../assets/svg/more-options-icon.svg?react'
import hazinor from '../assets/images/hazinor.jpg'

export function HomePage() {

    return (
        <section className="instagram-home-page">
            <header className="home-header">header</header>
            <aside className="home-left-side-bar">
                <SideBar />
            </aside>
            <main className="home-feed">
                <section className="home-feed-container">
                    <section className="img-title-container">
                        <section className="avatar">
                            <ImageAvatars img={hazinor} avatarHeight='30px !important' avatarWidth='30px !important' />
                        </section>
                        <section className="home-page-img-title">
                            <section className="home-user-title-container">
                                <Link to="/" className="home-title-user-name">User.Name</Link>
                                <Verified class='home-title-verified' />
                                <span className='home-title-dot'>.</span>
                                <time datetime="" className='home-posted-time'>15h</time>

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

                        <section className="img-title-more-option">
                            <MoreOptions className='home-more-options-icon' />
                        </section>
                    </section>
                    <Carousel></Carousel>
                </section>

            </main>

            {/* <aside className="home-right-suggestion">suggestion</aside> */}
        </section>
    )
}

