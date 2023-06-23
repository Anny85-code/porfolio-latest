import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/anny-photo.jpg';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div style={{ color: '#fff', fontWeight: 'bold' }} className='tagtop'>
          # tech_enthusiast
        </div>
        <div style={{ color: '#fff', fontWeight: 'bold' }} className=''>
          # hello_world
        </div>
        <div style={{ color: '#fff', fontWeight: 'bold' }} className=''>
          # coding
        </div>
        <h1>
          <Link smooth to='/#start' className='h1_links'>
            Aniekan Udo
          </Link>
        </h1>

        <img src={logo} alt='logo' />
        <p style={{ color: '#fff', fontWeight: 'bold' }} className='gmail'>
          <a
            target='_blank'
            href='mailto:uaniekan@gmail.com'
            rel='opener noreferrer'
            className='fa fa-envelope'
          >
            <span id='git'>git</span>
          </a>{' '}
          aniekaudo@yahoo.com
        </p>

        <ul className='sidebar-nav'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
              Interest
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#education' className='links'>
              Education
            </Link>
          </li>
        </ul>

        <div className='flip-card-back'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/Anny85-code'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              >
                <span id='git'>git</span>
              </a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.linkedin.com/in/aniekan-udo/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-linkedin fa-lg'
              >
                <span id='git'>git</span>
              </a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://twitter.com/Annyudo8?t=1v6gVd9yOPNOhXvwHbKLSA&s=09'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-twitter fa-lg'
              >
                <span id='git'>git</span>
              </a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.instagram.com/udoanny/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-instagram fa-lg'
              >
                <span id='git'>git</span>
              </a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='mailto:uaniekan@gmail.com'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              >
                <span id='git'>git</span>
              </a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='https://www.facebook.com/aniekan.udo1/?mibextid=ZbWKwL'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-facebook fa-lg'
              >
                <span id='git'>git</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            color: '#fff',
            fontWeight: 'bold',
            paddingTop: '30%'
          }}
          className='tagtop'
        >
          Made with{' '}
          <a href='/#' style={{ textDecoration: 'none' }} className='fa fas fa-heart fa-lg'>
            <span id='git'>git</span>
          </a>{' '}
          by me.
        </div>
      </div>
    );
  }
}

export default Sidebar;
