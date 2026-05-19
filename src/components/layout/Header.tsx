'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/*<!-- Header Starts --> */}
      <header className="header" id="navbar-collapse-toggle">
        {/*<!-- Fixed Navigation Starts --> */}
        <nav aria-label="Main navigation (Desktop)" className="d-none d-lg-block">
          <ul className="icon-menu revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
            <li className={`icon-box ${pathname === '/' ? 'active' : ''}`}>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link href="/" onClick={closeMenu} aria-label="Go to Home page">
                <h2>Home</h2>
              </Link>
            </li>
            <li className={`icon-box ${pathname === '/resume' ? 'active' : ''}`}>
              <i className="fa fa-user" aria-hidden="true"></i>
              <Link href="/resume" onClick={closeMenu} aria-label="Go to Resume page">
                <h2>Resume</h2>
              </Link>
            </li>
            <li className={`icon-box ${pathname === '/portfolio' ? 'active' : ''}`}>
              <i className="fa fa-briefcase" aria-hidden="true"></i>
              <Link href="/portfolio" onClick={closeMenu} aria-label="Go to Portfolio page">
                <h2>Portfolio</h2>
              </Link>
            </li>
            <li className={`icon-box ${pathname === '/contact' ? 'active' : ''}`}>
              <i className="fa fa-envelope-open" aria-hidden="true"></i>
              <Link href="/contact" onClick={closeMenu} aria-label="Go to Contact page">
                <h2>Contact</h2>
              </Link>
            </li>
          </ul>
        </nav>
        {/*<!-- Fixed Navigation Ends --> */}

        {/*<!-- Mobile Menu Starts --> */}
        <nav role="navigation" aria-label="Main navigation (Mobile)" className="d-block d-lg-none">
          <div id="menuToggle">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onChange={toggleMenu}
              aria-label="Toggle mobile menu"
            />
            <span></span>
            <span></span>
            <span></span>
            <ul className={`list-unstyled ${isMenuOpen ? 'open' : ''}`} id="menu">
              <li className={pathname === '/' ? 'active' : ''}>
                <Link href="/" onClick={closeMenu}>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li className={pathname === '/resume' ? 'active' : ''}>
                <Link href="/resume" onClick={closeMenu}>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Resume</span>
                </Link>
              </li>
              <li className={pathname === '/portfolio' ? 'active' : ''}>
                <Link href="/portfolio" onClick={closeMenu}>
                  <i className="fa fa-folder-open" aria-hidden="true"></i>
                  <span>Portfolio</span>
                </Link>
              </li>
              <li className={pathname === '/contact' ? 'active' : ''}>
                <Link href="/contact" onClick={closeMenu}>
                  <i className="fa fa-envelope-open" aria-hidden="true"></i>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/*<!-- Mobile Menu Ends --> */}
      </header>
      {/*<!-- Header Ends --> */}
    </>
  );
}
