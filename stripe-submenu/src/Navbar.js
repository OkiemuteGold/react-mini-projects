import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import navLinks from "./data";

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        // console.log(e.target);

        const page = e.target.textContent;
        const pageUrl = e.target.pathname;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;

        openSubmenu(page, pageUrl, { center, bottom });
    };

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    };

    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='nav-logo' alt='' />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>

                <ul className='nav-links'>
                    {navLinks.map((link, index) => {
                        const { page, pageUrl } = link;

                        return (
                            <a key={index} href={pageUrl} className='link-btn' onMouseOver={displaySubmenu}>
                                {page}
                            </a>
                        );
                    })}
                </ul>

                <button className='btn signin-btn'>Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
