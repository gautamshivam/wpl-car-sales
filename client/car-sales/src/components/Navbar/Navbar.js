<<<<<<< HEAD
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {MenuItems } from "./MenuItems"
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../UserProvider';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    const {user, setUser, setFav} = useContext(UserContext)
    let navigate = useNavigate();

    const onLogout = () => {
        fetch('/api/auth/logout').then(() => {
            console.log('logged out')
            setUser({});
            setFav([]);
            navigate('/login')
        }).catch((err) => console.log('error loggin out', err));
    }
    return (
        <div className="row justify-content-center NavbarItems">
                <ul className='nav-menu justify-content-center'>
                    <ElectricCarIcon fontSize='large' color='white'/>
                    <li>
                        <Link className="nav-links" to="/">
                            <HomeIcon/>Home
                        </Link>
                    </li>
                   
                    <li>
                        <Link className="nav-links" to="/browse">
                           Browse
                        </Link>
                    </li>
                    {
                        user == null || user.username == undefined ?
                        <li>
                            <Link className="nav-links" to="/login">
                                Login / Register<LoginIcon/> 
                            </Link>
                        </li> :
                        <>
                            <li>
                                <Link className="nav-links" to="/favourites">
                                    <FavoriteIcon/>Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-links" to="/purchases">
                                    <ShoppingCartIcon/>Purchases
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-links" to="/user">
                                    Hi {user.username}<AccountCircleIcon/>
                                </Link>   
                            </li>
                            <li>
                                <Button className="nav-links" variant="contained" onClick={onLogout}>
                                    Logout<LogoutIcon/>
                                </Button>
                            </li>
                        </>
                    }   
                    
                </ul>
                
        
        </div>
        // <nav className="NavbarItems">
               
               

        //     </nav>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import {MenuItems } from "./MenuItems"
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="NavbarItems">
                <h1 className="navbar-logo">.</h1>
                
                <ul className='nav-menu'>
                    {MenuItems.map((item,index) => {
                        if(index < 5)
                            return(
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )

                        if(index >=5 )
                            return(
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                    })}
                    
                </ul>
            </nav>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
    )
}

export default Navbar
