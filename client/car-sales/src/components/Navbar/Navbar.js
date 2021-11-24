import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {MenuItems } from "./MenuItems"
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../UserProvider';

const Navbar = () => {
    const {user, setUser, setFav} = useContext(UserContext)
    let navigate = useNavigate();

    const onLogout = () => {
        fetch('/api/auth/logout').then(() => {
            console.log('logged out')
            setUser({});
            setFav([]);
            navigate('/browse')
        }).catch((err) => console.log('error loggin out', err));
    }
    return (
        <div className="row justify-content-center NavbarItems">
                <ul className='nav-menu justify-content-center'>
                    <span className="navbar-logo">Logo</span>
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
{console.log(user)}
                    {
                        user == null || user.username == undefined ?
                        <li>
                            <Link className="nav-links" to="/login">
                                Login / Register
                            </Link>
                        </li> :
                        <>
                            <li>
                                <Link className="nav-links" to="/favourites">
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-links" to="/user">
                                    Hi {user.username}
                                </Link>
                                <span className="ml-3">      </span>
                                <button className="nav-links" onClick={onLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                        
                    }   
                    
                </ul>
                
        
        </div>
        // <nav className="NavbarItems">
               
               

        //     </nav>
    )
}

export default Navbar
