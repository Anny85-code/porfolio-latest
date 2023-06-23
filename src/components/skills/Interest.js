import React, { Component } from 'react';
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id='interest'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset={0}
              animateIn='fadeInLeft'
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h3>Front End Develpoment</h3>
                <p>
                  I specialize in building visually appealing and interactive user interfaces that
                  captivate users and enhance their online interactions. By leveraging my expertise
                  in HTML, CSS, and JavaScript, I create seamless and intuitive web applications
                  that deliver a seamless user experience across multiple devices.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn='fadeInLeft'
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>Back End Develpoment</h3>
                <p>
                  I specialize in building robust and scalable server-side architectures that drive
                  dynamic web applications. Armed with my skills in programming languages like Ruby,
                  Python, or Node.js, I create the backbone of web systems, handling data storage,
                  processing, and retrieval.
                  <br /> I work with databases, APIs, and server technologies to ensure seamless
                  communication between the front-end and the back-end.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn='fadeInLeft'
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>
                  I also have decent hand in developing website with WordPress or others CMS as
                  well.
                  <br />
                  Redux, GraphQL, Next.js, Problem solving, Github are my fields of interest.
                  Currently, I am investing my free time in Web3.js
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;
