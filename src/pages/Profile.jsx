import React from 'react'
import { Link } from 'react-router-dom';

import { SideBar } from '../cmps/SideBar.jsx'
import ImageAvatars from '../cmps/ImageAvatars.jsx'

export function Profile() {
    return (<>
        <section className='profile-page'>
            <aside className="profie-left-side-bar">
                <SideBar />
            </aside>
            <main className='profile-main-side'>
                <header className='profile-main-header'>
                    <section className="profile-pic" >
                        <ImageAvatars avatarHeight='150px !important' avatarWidth='150px !important' />
                    </section>
                    <section className='header-btns'>
                        <section className='profile-link-buttons'>
                            <Link className='profile-link-button'>Edit Profile</Link>
                            <Link className='profile-link-button'>View Archive</Link>
                        </section>
                        <section className='profile-follows-lists'>
                            <section className='profile-follows'>
                                <span className='profile-counts'>100</span>
                                <span>Posts</span>
                            </section>
                            <section className='profile-follows'>
                                <span className='profile-counts'>500</span>
                                <span>Followers</span>
                            </section>
                            <section className='profile-follows'>
                                <span className='profile-counts'>200</span>
                                <span>Following</span>
                            </section>
                        </section>
                    </section>

                    <h1>Test2</h1>
                </header>
                <div className="profile-main-container">


                </div>

            </main>
        </section>


    </>



    )
}

