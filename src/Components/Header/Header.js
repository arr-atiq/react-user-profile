import React from 'react';
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-part'>

                <img src={logo} alt=""/>

                <nav>
                    <a href="/profile">Profile</a>
                    <a href="/messenger">Messenger</a>
                    <a href="/friends">Friends</a>
                    <a href="/setting">Setting</a>
                    <a href="/signup">Sign Up</a>
                </nav>
        </div>
    );
};

export default Header;