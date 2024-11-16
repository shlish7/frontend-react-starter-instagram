import { LeftSideBar } from '../cmps/LeftSideBar.jsx'
import ProfileHeader from '../cmps/profile/ProfileHeader.jsx';
import ProfileBody from '../cmps/profile/ProfileBody.jsx';
import { loadUser } from '../store/user.actions.js';
import { loadFeedItems } from '../store/feedItem.actions.js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function Profile() {
    const feedItems = useSelector(storeState => storeState.feedItemModule.feedItems)
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()

    useEffect(() => {
      loadFeedItems()
    }, [])


  function onOpenFeedItem(ev, id) {
    ev.stopPropagation()
    ev.preventDefault()
    console.log('bla',);
    navigate(`/p/${id}`)
  }

    return (<>
        <section className='profile-page'>
            <aside className="profie-left-side-bar">
                <LeftSideBar />
            </aside>
            <main className='profile-main-side'>
                <ProfileHeader feedItems={feedItems} user={user}/>
                <ProfileBody feedItems={feedItems} user={user} onOpenFeedItem={onOpenFeedItem}/>
            </main>
        </section>


    </>



    )
}

