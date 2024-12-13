import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMenu } from "react-icons/io5";
import './index.css';


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const renderDesktopView = () => {
        return (
            <div className='header-desktop-view-container'>
                <div className='header-container pt-3 pb-3'>
                    <h1 className='header-logo text-3xl font-extrabold'>GymFluencer</h1>
                    <ul className='header-list-container mt-2' type='none'>
                        <li className='items'>About Us</li>
                        <li className='items'>Membership</li>
                        <li className='items'>Our Team</li>
                        <li className='items'>Contact</li>
                        
                    </ul>
                    <div className='header-button-container'>
                        <button className='header-button'>Get Started</button>
                        <button className='header-button'>Login</button>
                    </div>
                </div>
            </div>
        )
    }

    const renderMobileView = () => {
        return (
            <div className='header-mobile-view-container'>
                <div className='header-container pt-3 pb-3'>
                    <h1 className='header-logo text-3xl font-extrabold'>GymFluencer</h1>
                    <div>
                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <IoMenu size={30} className='text-yellow-400'/>
                        </Button>
                        <Menu
                        
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            className='menu-container'
                            
                        >
                            <MenuItem  onClick={handleClose}>About</MenuItem>
                            <MenuItem onClick={handleClose}>Membership</MenuItem>
                            <MenuItem onClick={handleClose}>Our Team</MenuItem>
                            <MenuItem onClick={handleClose}>Contact</MenuItem>
                            <MenuItem onClick={handleClose}>Reviews</MenuItem>
                            <MenuItem onClick={handleClose}>Get Started</MenuItem>
                            <MenuItem onClick={handleClose}>Login</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {renderDesktopView()}
            {renderMobileView()}
        </div>

    )
}
export default Header