import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext();


const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [fav, setFav] = useState([])
    const value = {user, setUser, fav, setFav}

    useEffect(() => {
        fetch('/api/user').then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.favorites == "" || data.favorites == undefined)data.favorites = [];
            setUser(data);
            setFav(data.favorites);
        })
        .catch((err) => {
        console.log(err);
        });
    },[])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
