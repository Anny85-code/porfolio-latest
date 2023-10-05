import React from 'react';
import classes from './Projects.module.scss';
import bookheap from '../images/food4all.png';
import chess from '../images/seaport.png';
import travel from '../images/dravel.png';
import jobhunters from '../images/Landingpage1.png';
import memes from '../images/hendreximage.png';
import superhero from '../images/techverse.png';
import { motion } from 'framer-motion';

// Web projects
export const cardItem = [
  {
    link: 'https://optimistfood4all.com/',
    title: 'Food distribution app',
    techStack: 'Tech Stack: MERN Stack',
    desc: 'A food distribution tracking app serves as a centralized platform that enables efficient management and tracking of the entire food distribution process.',
    image: bookheap,
    source: 'https://github.com/Anny85-code/optimism'
  },
  {
    link: 'https://jobhuntters-1o08qomm3-brytebee.vercel.app/',
    title: 'Job hunters app',
    techStack: 'MERN Stack',
    desc: 'The Jobhunters app allows users to create coverletters, resumes with AI and also uploads their existing resumes and finetunes it with the power of AI',
    image: jobhunters,
    source: 'https://github.com/Automation-Affairs-Ltd/jobhunters-fe'
  },
  {
    link: 'https://649548422bafcc4a260e6388--merry-starlight-c676b9.netlify.app/',
    title: 'Sea food menu app',
    techStack: 'Tech Stack- JavaScript, NodeJS, API,',
    desc: 'This project is seafood menu app. That Retrieves data from API and used Involvement API for likes and comments. Test for data retrieved from API and for comments.',
    image: chess,
    source: 'https://github.com/Anny85-code/seafoodmenu'
  },
  {
    link: 'https://dravel-app.vercel.app/',
    title: 'Dravel app',
    techStack: 'Tech Stack- MERN Stack',
    desc: 'A full stack application that allow users to book and reserve a places they like to visit. You can log every reservation and visits.',
    image: travel,
    source: 'https://github.com/Anny85-code/dravel_app'
  },
  {
    link: 'https://www.techverseacademy.com/',
    title: 'Tech Verse Academy website',
    techStack: 'Tech Stack- NextJS, NodeJS, MongoDB',
    desc: 'This is a website for a tech academy that offers courses in web development, data science and machine learning.',
    image: superhero,
    source: 'https://github.com/TechVerseBase/techverse_fe'
  },
  {
    link: 'https://www.hendrexresources.com/',
    title: 'Industrial web app',
    techStack: 'Tech Stack- ReactJS',
    desc: ' This is an industrial web app that showcase the services of the company and also allow users to contact the company.',
    image: memes,
    source: 'https://github.com/Anny85-code/private'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank' rel='opener noreferrer'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
            <a href={cardItem.source} target='_blank' rel='opener noreferrer'>
              <button type='button' className={classes.projectBtn}>
                view source
              </button>
            </a>
          </div>
        </a>
      </li>
    );
  };

  const projectVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  return (
    <div className={classes.box} id='projects'>
      <motion.div
        className={classes.head}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        MY WORK
      </motion.div>
      <motion.h2
        className={classes.heading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        PROJECTS
      </motion.h2>
      <ul className={classes.cards}>
        {cardItem.map((item) => {
          return (
            <motion.li
              key={item.title}
              initial='initial'
              animate='animate'
              variants={projectVariants}
              transition={{ duration: 0.8 }}
            >
              {getProjectCard(item)}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
