import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext();


const UserProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [fav, setFav] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const value = {user, setUser, fav, setFav, purchases, setPurchases}

    useEffect(() => {
        fetch(`/api/user`).then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.favorites === "" || data.favorites === undefined)data.favorites = [];
            if(data.purchases === "" || data.purchases === undefined)data.purchases = [];
            setUser(data);
            setFav(data.favorites);
            setPurchases(data.purchases);
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
