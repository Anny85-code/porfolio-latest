import React from 'react';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gitub from '@iconscout/react-unicons/icons/uil-github';
import secondwave2 from '../../img/secondwave2.png';

const Footer = () => {
  const Foter = () => new Date().getFullYear();

  return (
    <div className="footer">
      <img src={secondwave2} alt="" style={{ width: '100%' }} id="footer-img" />
      <div className="f-content">
        <span>uaniekan@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Gitub color="white" size="3rem" />
        </div>
        <span className="footer-co">
          ©
          {Foter()}
          &nbsp;
          Aniekan Udo portfolio website
        </span>
      </div>
    </div>
  );
};

export default Footer;
