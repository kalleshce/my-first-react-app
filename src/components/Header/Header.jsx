import React from "react";
import './header.css'

const Header = () => {
    return (
        <header className='header-container'>
            <nav className='menu-item'>
                <a>Home</a>
                <a>About Us</a>
                <a>Contact</a>
                <a>Settings</a>
            </nav>
        </header>
    )
}

export default Header;