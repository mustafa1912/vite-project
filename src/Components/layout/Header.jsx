import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const Location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <React.Fragment>
            {/*<!-- Header Starts --> */}
            <header className="header" id="navbar-collapse-toggle">
                {/*<!-- Fixed Navigation Starts --> */}
                <ul
                    className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <li className={`icon-box  ` + (Location.pathname === '/' ? 'active' : '')}>
                        <i className="fa fa-home"></i>
                        <NavLink to="/" onClick={closeMenu}>
                            <h2>Home</h2>
                        </NavLink>
                    </li>
                    <li className={`icon-box  ` + (Location.pathname === '/resume' ? 'active' : '')}>
                        <i className="fa fa-user"></i>
                        <NavLink to="resume" onClick={closeMenu}>
                            <h2>Resume</h2>
                        </NavLink>
                    </li>
                    <li className={`icon-box  ` + (Location.pathname === '/portfolio' ? 'active' : '')}>
                        <i className="fa fa-briefcase"></i>
                        <NavLink to="portfolio" onClick={closeMenu}>
                            <h2>Portfolio</h2>
                        </NavLink>
                    </li>
                    <li className={`icon-box  ` + (Location.pathname === '/contact' ? 'active' : '')}>
                        <i className="fa fa-envelope-open"></i>
                        <NavLink to="contact" onClick={closeMenu}>
                            <h2>Contact</h2>
                        </NavLink>
                    </li>
                </ul>
                {/*<!-- Fixed Navigation Ends --> */}
                {/*<!-- Mobile Menu Starts --> */}
                <nav role="navigation" className="d-block d-lg-none">
                    <div id="menuToggle">
                        <input
                            type="checkbox"
                            checked={isMenuOpen}
                            onChange={toggleMenu}
                        />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul
                            className={`list-unstyled ${isMenuOpen ? 'open' : ''}`}
                            id="menu"
                        >
                            <li className={(Location.pathname === '/' ? 'active' : '')}>
                                <NavLink to="/" onClick={closeMenu}>
                                    <i className="fa fa-home"></i><span>Home</span>
                                </NavLink>
                            </li>
                            <li className={(Location.pathname === '/resume' ? 'active' : '')}>
                                <NavLink to="resume" onClick={closeMenu}>
                                    <i className="fa fa-user"></i><span>Resume</span>
                                </NavLink>
                            </li>
                            <li className={(Location.pathname === '/portfolio' ? 'active' : '')}>
                                <NavLink to="portfolio" onClick={closeMenu}>
                                    <i className="fa fa-folder-open"></i><span>Portfolio</span>
                                </NavLink>
                            </li>
                            <li className={(Location.pathname === '/contact' ? 'active' : '')}>
                                <NavLink to="contact" onClick={closeMenu}>
                                    <i className="fa fa-envelope-open"></i>
                                    <span>Contact</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*<!-- Mobile Menu Ends --> */}
            </header>
            {/*<!-- Header Ends --> */}
        </React.Fragment>
    );
}

export default Header;
