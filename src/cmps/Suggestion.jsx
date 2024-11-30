import React, { useEffect } from 'react'
import ImageAvatars from './ImageAvatars'
import profilePic from '../assets/images/chocolate_cake.jpg'
import { useSelector } from 'react-redux';
import { userService } from '../services/user.service.remote';

export default function Suggestion({ user }) {

    const users = useSelector(storeState => storeState.userModule.users)
    const currUser = useSelector(storeState => storeState.userModule.user)

    useEffect(() => {
        // getUsers()
        // const filtered = users.filter(u => u._id === user.follwing)
    }, []);

    async function getUsers() {
        const users = await userService.getUsers()

    }
    const username = 'test1'

    return (
        <div>
            <span className="suggestion-span">Suggested for you</span>
            <ul className='suggestion-ul'>
                <li className='suggestion-li'>
                    {/* <ImageAvatars img={user?.imgUrl || null} avatarHeight='30px !important' avatarWidth='30px !important' /> */}
                    <ImageAvatars img={profilePic} avatarHeight='30px !important' avatarWidth='30px !important' />
                    {username}
                    <button className='suggest-follow-btn'>Follow</button>
                </li>
                <li className='suggestion-li'>test2</li>
                <li className='suggestion-li'>test3</li>
            </ul>
        </div>
    )
}
