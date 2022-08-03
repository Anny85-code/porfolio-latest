import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Toggle from '../Toggle/Toggle';
import Anny from '../../img/Anny.png';
// import annyman from '../../img/annyman.png';
import './Navbar.css';
/* eslint-disable */
const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },

    {
      id: 2,
      path: '/about',
      text: 'About',
    },

    {
      id: 3,
      path: '/our service',
      text: 'Our Services',
    },

    {
      id: 4,
      path: '/projects',
      text: 'Projects',
    },

    {
      id: 5,
      path: '/blog',
      text: 'Blog',
    },
    {
      id: 6,
      path: '/new',
      text: 'News',
    },
    {
      id: 7,
      path: '/contact',
      text: 'Contact',
    },
    {
      id: 8,
      path: '/search',
      text: 'Search',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className='n-wrapper' id='Navbar'>
      {/* left */}
      <div className='n-left'>
        {/* <div className="n-name">Anny</div> */}
        <img src={Anny} alt='Anny' />
        {/* <img src={annyman} alt="Anny" /> */}
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

      <button className='btn' type='button' onClick={handleToggle}>
        {navbarOpen ? (
          <IoMdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#fff', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName='active-link'
              onClick={() => closeMenu()}
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
/* eslint-enable */
export default Navbar;
