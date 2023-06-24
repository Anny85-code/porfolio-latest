import React, { Component } from 'react';
import classes from './Interest.module.css';
import { motion } from 'framer-motion';
class Interest extends Component {
  render() {
    const contentVariants = {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    };

    return (
      <div className={classes.box} id='interest'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={contentVariants}
          transition={{ duration: 0.8 }}
        >
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <motion.div variants={contentVariants} transition={{ duration: 0.8 }}>
              <div className={classes.web}>
                <h3>Front End Development</h3>
                <p>
                  I specialize in building visually appealing and interactive user interfaces that
                  captivate users and enhance their online interactions. By leveraging my expertise
                  in HTML, CSS, and JavaScript, I create seamless and intuitive web applications
                  that deliver a seamless user experience across multiple devices.
                </p>
              </div>
            </motion.div>
            <motion.div variants={contentVariants} transition={{ duration: 0.8 }}>
              <div className={classes.app}>
                <h3>Back End Development</h3>
                <p>
                  I specialize in building robust and scalable server-side architectures that drive
                  dynamic web applications. Armed with my skills in programming languages like Ruby,
                  Python, or Node.js, I create the backbone of web systems, handling data storage,
                  processing, and retrieval.
                  <br /> I work with databases, APIs, and server technologies to ensure seamless
                  communication between the front-end and the back-end.
                </p>
              </div>
            </motion.div>
            <motion.div variants={contentVariants} transition={{ duration: 0.8 }}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>
                  I also have a decent hand in developing websites with WordPress or other CMS
                  platforms.
                  <br />
                  Redux, GraphQL, Next.js, Problem-solving, Github are my fields of interest.
                  Currently, I am investing my free time in Web3.js.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default Interest;