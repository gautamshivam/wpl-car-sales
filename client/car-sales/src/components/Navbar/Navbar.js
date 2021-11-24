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
    )
}

export default Navbar
