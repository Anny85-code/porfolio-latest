import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { IoMdClose } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import Toggle from '../Toggle/Toggle';
import Anny from '../../img/Anny.png';
import './Navbar.css';
/* eslint-disable */
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: 'home',
      text: 'Home',
    },

    {
      id: 2,
      path: 'services',
      text: 'Services',
    },

    {
      id: 3,
      path: 'experience',
      text: 'Experience',
    },

    {
      id: 4,
      path: 'portfolio',
      text: 'Portfolio',
    },

    {
      id: 5,
      path: 'testimonial',
      text: 'Testimonial',
    },
  ];

  const body = document.querySelector('body');

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
    document.querySelector('.menuNav').style.display = 'block';
    setTimeout(() => {
    document.querySelector('.toggle').style.opacity = '1';
    }, 3000);
    document.querySelector('.footer').style.display = 'none';
    body.style.overflow = 'hidden';
  };

  const windowSize = window.outerWidth;

  const closeMenu = () => {
    setNavbarOpen(false);
    body.style.overflow = 'auto';
    if (windowSize >= 992) {
      document.querySelector('.toggle').style.opacity = '1';
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      document.querySelector('.toggle').style.opacity = '0';
      setTimeout(() => {
      document.querySelector('.footer').style.display = 'flex';
      }, 2000);
    }
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <img src={Anny} alt="Anny" />
        <Toggle id="toggle" />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button bounce">Contact</button>
        </Link>
      </div>

      <button className="btn-nav" type="button">
        {navbarOpen ? (
          <IoMdClose
            className="toggleClose"
            style={{
              color: 'var(--orange)',
              width: '40px',
              height: '40px',
            }}
            onClick={() => closeMenu()}
          />
        ) : (
          <FiMenu
            style={{ color: 'var(--orange)', width: '40px', height: '40px' }}
            onClick={handleToggle}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              activeclassname="active-link"
              onClick={() => closeMenu()}
              spy={true}
              smooth={true}
              exact
              id="menu-link"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
/* eslint-enable */
export default Navbar;
