import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../UserProvider';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Navbar = () => {
    const {user, setUser, setFav} = useContext(UserContext)
    let navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToHome = () => {
        navigate('/');
    }
    const navigateToProfile = () => {
        navigate('/user');
    }
    const navigateToPurchases = () => {
        navigate('/purchases');
    }
    const navigateToFavorites = () => {
        navigate('/favourites');
    }
    const navigateToAdd = () => {
        navigate('/additem');
    }

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
                <ul className='nav-menu justify-content-center mt-3'>
                    <li>
                        <Link className="nav-links" to="/" color='primary'>
                            <HomeIcon/>Home
                        </Link>
                    </li>
                   
                    <li>
                        <Link className="nav-links" to="/browse">
                           Browse
                        </Link>
                    </li>
                    <li className="" style={{marginLeft:'150px', marginRight:'150px'}}>
                        <ElectricCarIcon style={{color:'#FFFFFF', fontSize:'40px'}} onClick={navigateToHome}/>
                        <p style={{color:'#FFFFFF',fontWeight:'bold',fontSize:'15px'}}>CAR BAZAAR</p>
                    </li>
                    {
                        user == null || user.username === undefined ?
                        <li>
                            <Link className="nav-links" to="/login" color='inherit'>
                                Login / Register<LoginIcon/> 
                            </Link>
                        </li> :
                        <>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Typography sx={{ minWidth: 100, color:'white', fontWeight:'bold' }}>Hi {user.username.split('@')[0][0].toUpperCase() + user.username.split('@')[0].slice(1)}</Typography>
                                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                                    <Avatar sx={{ width: 32, height: 32 }}>{user.username.charAt(0).toUpperCase()}</Avatar>
                                </IconButton>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={navigateToProfile}>
                                    <AccountCircleIcon /> Profile
                                </MenuItem>
                                <MenuItem onClick={navigateToPurchases}>
                                    <ShoppingCartIcon/>Purchases
                                </MenuItem>
                                <MenuItem onClick={navigateToFavorites}>
                                    <FavoriteIcon/>Wishlist
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={onLogout}>
                                    <ListItemIcon>
                                        <LogoutIcon fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                                <Divider />
                                {
                                    (user.username.toLowerCase() === 'admin@gmail.com') &&
                                    <MenuItem onClick={navigateToAdd}>
                                        <AddCircleIcon/> Add Car
                                    </MenuItem>
                                }
                                
                            </Menu>
                        </>
                    }   
                    
                </ul>
                
        
        </div>
        // <nav className="NavbarItems">
               
               

        //     </nav>
    )
}

export default Navbar
