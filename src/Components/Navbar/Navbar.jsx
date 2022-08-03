import React, { useState } from 'react';
// import { NavLink } from 'react-dom/client';
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
    body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setNavbarOpen(false);
    body.style.overflow = 'auto';
  };

  

  return (
    <div className='n-wrapper' id='Navbar'>
      {/* left */}
      <div className='n-left'>
        <img src={Anny} alt='Anny' />
        <Toggle />
      </div>
      {/* right */}
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link activeClass='active' to='Navbar' spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to='services' spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to='works' spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to='portfolio' spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to='testimonial' spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to='contact' spy={true} smooth={true}>
          <button className='button n-button'>Contact</button>
        </Link>
      </div>

      <button className='btn-nav' type='button' onClick={handleToggle}>
        {navbarOpen ? (
          <IoMdClose
            style={{
              color: 'var(--orange)',
              width: '40px',
              height: '40px',
            }}
          />
        ) : (
          <FiMenu
            style={{ color: 'var(--orange)', width: '40px', height: '40px' }}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              activeClassName='active-link'
              onClick={() => closeMenu()}
              spy={true}
              smooth={true}
              exact
              id='menu-link'
            >
              {link.text}
            </Link>
          </li>
        ))}
          {/* <Toggle /> */}
      </ul>
    </div>
  );
};
/* eslint-enable */
export default Navbar;
