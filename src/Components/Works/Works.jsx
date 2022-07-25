import React, { useContext } from "react";
import "./Works.css";
import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import postgres from "../../img/postgres.png";
import rubyonrails from "../../img/rubyonrails.png";
import bootstrap from "../../img/bootstrap.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className='works' id='works'>
      {/* left side */}
      <div className='w-left'>
        <div className='awesome'>
          {/* dark Mode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Technologies</span>
          <span>Stacks</span>
          <spane>
            I can provide an end-to-end service, and can be involved in projects
            <br />
            that involve databases and building user-friendly websites. This can
            <br />
            extend to working with clients
            <br />
            during the planning phase of projects
          </spane>
          <Link to='contact' smooth={true} spy={true}>
            <button className='button s-button'>Hire Me</button>
          </Link>
          <div
            className='blur s-blur1'
            style={{ background: '#ABF1FF94' }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className='w-right'>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className='w-mainCircle'
        >
          <div className='w-secCircle'>
            <img src={javascript} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={react} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={postgres} alt='' />
          </div>{' '}
          <div className='w-secCircle'>
            <img src={rubyonrails} alt='' />
          </div>
          <div className='w-secCircle'>
            <img src={bootstrap} alt='' />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  );
};

export default Works;
