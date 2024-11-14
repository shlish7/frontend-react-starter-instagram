import { useState } from 'react'
import { userService } from '../services/user.service.js'
import { useSelector } from 'react-redux';
import { ImgUploader } from './ImgUploader.jsx';

export function LoginSignup(props) {
    const users = useSelector(storeState => storeState.userModule.users)
   
    const [credentials, setCredentials] = useState(userService.getEmptyUser())
    const [isSignup, setIsSignup] = useState(false)

    function clearState() {
        setCredentials(userService.getEmptyUser())
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value

        const user = users?.find(user=>user.username === value)
        setCredentials({ ...credentials, ...user})

    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        
        props.onLogin(credentials)
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        props.onSignup(credentials)
        clearState()
    }

    function toggleSignup() {
        setIsSignup(!isSignup)
    }

    function onUploaded(imgUrl) {
        setCredentials(prevCredentials => ({ ...prevCredentials, imgUrl }))
    }

    return (
        <div className="login-page">
            <p>
                <button className="btn-link" onClick={toggleSignup}>Go To {!isSignup ? 'Signup' : 'Login'}</button>
            </p>
            {!isSignup &&
                <form className="login-form" onSubmit={onLogin}>
                    <select 
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    >
                        <option key={"Select-User"} value="">Select User</option>
                        {users.map(user => (
                            <option key={user.fullname} value={user.username}>{user.fullname}</option>
                        ))}
                    </select>
                    <button>Login!</button>
                </form>
            }

            <div className="signup-section">
                {isSignup &&
                    <form className="signup-form" onSubmit={onSignup}>
                        <input
                            type="text"
                            name="fullname"
                            value={credentials.fullname}
                            placeholder="Fullname"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            placeholder="Username"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                        <ImgUploader onUploaded={onUploaded} />
                        <button>Signup!</button>
                    </form>
                }
            </div>
        </div>
    )
}