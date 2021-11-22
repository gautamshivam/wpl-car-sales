import React, { useState } from 'react'
import Axios from 'axios'

const User = () => {
    const[user, setUser] = useState({})
    const getUser = () => {
        Axios.get('/api/auth/user',{
            withCredentials: true
        }).then((res) => {
            setUser(res.data);
        })
    }
    return (
        <div>
            <h1>Get User</h1>
            <button onClick={getUser}>Submit</button>
            {user !== null ? <h1>Welcome back: {user.username}</h1> : null}
        </div>
    )
}

export default User
