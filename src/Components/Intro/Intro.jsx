import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { themeContext } from '../../Context';
import './Intro.css';
import Vector1 from '../../img/Vector1.png';
import purpleblur2 from '../../img/purpleblur2.png';
import anny1 from '../../img/anny1.png';
import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  // context
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  /* eslint-disable */
  return (
    <div className='Intro' id='Intro'>
      {/* left name side */}
      <div className='i-left'>
        <div className='i-name'>
          <span style={{ color: darkMode ? 'white' : '' }}>
            Hello! &nbsp;I&apos;m
          </span>
          <span>Anny</span>
          <span>
            Full-Stack Developer with high level of experience in web designing
            and development, maintain the databases,  and handle backend operations of the application, and ensure an error-free development testing and deploying the application as well.
          </span>
        </div>
        <Link to='contact' smooth spy>
          <button type='button' className='button i-button'>
            Hire me
          </button>
        </Link>
        {/* social icons */}
        <div className='i-icons'>
          <a href='https://github.com/Anny85-code'>
            <img src={Github} alt='Github' />
          </a>
          <a href='https://www.linkedin.com/in/aniekan-udo'>
            <img src={LinkedIn} alt='LinkedIn' />
          </a>
          <a href='https://www.instagram.com/udoanny/'>
            <img src={Instagram} alt='Instagram' />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={purpleblur2} alt='' />
        <img className='intro-img' src={anny1} alt='' />
        {/* animation */}
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=''
        />

        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          className='floating-div'
        >
          <FloatinDiv img={crown} text1='Web' text2='Developer' />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className='floating-div'
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1='Best Design' text2='Award' />
        </motion.div>
        <div className='blur' style={{ background: 'rgb(238 210 255)' }} />
        <div
          className='blur'
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        />
      </div>
    </div>
  );
};
/* eslint-enable */
export default Intro;
