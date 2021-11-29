import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { UserContext } from "./UserProvider";

const User = () => {
    // const[user, setUser] = useState({})
    const {user, setUser, fav, setFav} = useContext(UserContext);

    const getUser = () => {
        Axios.get(`/api/user`,{
            withCredentials: true
        }).then((res) => {
            setUser(res.data);
            setFav(res.data.favorites)
        })
    }
    return (
        <div>
            {user !== null && <div><h1>Welcome {user.username}</h1></div>}
        </div>
    )
}

export default User
