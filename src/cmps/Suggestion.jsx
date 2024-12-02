import React, { useEffect, useState } from 'react'
import ImageAvatars from './ImageAvatars'
import { useSelector } from 'react-redux';
import { loadUser, loadUsers } from '../store/user.actions';

export default function Suggestion() {
    const [suggestedUsers, setSuggestedUsers] = useState([])

    const users = useSelector(storeState => storeState.userModule.users)
    const loggedinUser = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        if (users.length > 0 && loggedinUser) {
            const filteredUsers = users?.filter(user => 
                user._id !== loggedinUser._id && 
                !loggedinUser.following.includes(user._id))
            setSuggestedUsers(filteredUsers.slice(0, 10))
        }
    }, [users, loggedinUser])
   

    return (
        <div className='suggestion-users'>
            <span className="suggestion-span">Suggested for you</span>
            <ul className="suggestion-ul">
                {suggestedUsers.map(user => (
                    <li key={user._id} className="suggestion-li">
                        <section className="suggested-user-details">
                            <ImageAvatars
                                img={user.imgUrl || null}
                                avatarHeight="30px !important"
                                avatarWidth="30px !important"
                            />
                            <span className="suggestion-username">{user.username}</span>
                        </section>
                        <button className="suggest-follow-btn">Follow</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
