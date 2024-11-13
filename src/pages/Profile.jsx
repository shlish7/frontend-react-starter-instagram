import { LeftSideBar } from '../cmps/LeftSideBar.jsx'
import ProfileHeader from '../cmps/profile/ProfileHeader.jsx';
import ProfileBody from '../cmps/profile/ProfileBody.jsx';
import { loadUser } from '../store/user.actions.js';
import { loadFeedItems } from '../store/feedItem.actions.js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export function Profile() {
    const feedItems = useSelector(storeState => storeState.feedItemModule.feedItems)
    const user = useSelector(storeState => storeState.userModule.user)
  
    // console.log('feed Items', feedItems);
    // console.log('User', user);
  
    useEffect(() => {
      loadFeedItems()
    
    }, [])

    return (<>
        <section className='profile-page'>
            <aside className="profie-left-side-bar">
                <LeftSideBar />
            </aside>
            <main className='profile-main-side'>
                <ProfileHeader/>
                <ProfileBody feedItems={feedItems} user={user}/>
            </main>
        </section>


    </>



    )
}

