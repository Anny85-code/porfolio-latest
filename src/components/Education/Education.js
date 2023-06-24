import React, { Component } from 'react';
import classes from './Education.module.css';
import { motion } from 'framer-motion';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    const timelineEntryVariants = {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    };

    return (
      <div className={classes.box} id='education'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={timelineEntryVariants}
          transition={{ duration: 0.8 }}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <motion.article className={classes.timeline_entry}>
                      <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                        <MdWork />
                      </div>
                      <div className={classes.label}>
                        <h2>Experience</h2>
                        <p>
                          <i>
                            With over three years of experience under my belt, I have honed my
                            skills and gained valuable insights as a professional in my field.
                            Over this time, I have tackled various projects, collaborated with
                            diverse teams, and overcome a range of challenges, all of which have
                            contributed to my growth and expertise.
                          </i>
                        </p>
                      </div>
                    </motion.article>

                    <motion.article className={classes.timeline_entry}>
                      <div className={classes.timeline_icon}>
                        <MdSchool />
                      </div>
                      <div className={classes.label}>
                        <h2>Microverse</h2>
                        <p>
                          <i>
                            I learned software development professionally at Microverse, an online
                            software development school where I harnessed my programming skills
                            and learned how to work with API and frameworks. I’ve worked remotely
                            and asynchronously with people across different time zones. I’m in the
                            top 1% of GitHub active users in my country.
                          </i>
                        </p>
                      </div>
                    </motion.article>

                    <motion.article className={classes.timeline_entry}>
                      <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                        <FaSchool />
                      </div>
                      <div className={classes.label}>
                        <h2>Higher Education</h2>
                        <p>
                          Computer Science <br />
                          <b>University of the People</b>
                        </p>
                      </div>
                    </motion.article>

                    <motion.article className={classes.timeline_entry}>
                      <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                        <MdWork />
                      </div>
                      <div className={classes.label}>
                        <h2>Internship</h2>
                        <p>
                          Zuri <b>HNG</b>
                        </p>
                      </div>
                      <div className={classes.timeline_entry_inner}>
                        <div className={classes.timeline_icon_3 || classes.color_none}></div>
                      </div>
                    </motion.article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    );
  }
}

export default Education;