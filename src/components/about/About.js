import React, { Component } from 'react';
import classes from './About.module.css';
import { motion } from 'framer-motion';
class About extends Component {
  render() {
    const aboutVariants = {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    };

    return (
      <div className={classes.box} id='about'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={aboutVariants}
          transition={{ duration: 0.8 }}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              I'm a Full-Stack Developer with a high level of experience in web designing and
              development, maintain the databases, and handle backend operations of the application,
              and ensure an error-free development testing and deploying the application as well.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default About;