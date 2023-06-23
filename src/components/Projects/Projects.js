import React from 'react';
import classes from './Projects.module.css';
import bookheap from '../images/food4all.png';
import chess from '../images/seaport.png';
import shopping from '../images/budget.png';
import travel from '../images/dravel.png';
import jobhunters from '../images/Landingpage1.png';
import definition from '../images/food.png';
import memes from '../images/hendreximage.png';
import superhero from '../images/covid19port.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://optimismfoodforall.com',
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
    link: 'https://budget-app-rail-0b47f5951d21.herokuapp.com/',
    title: 'Buget app',
    techStack: 'Tech Stack- Ruby on Rails, Postgres',
    desc: 'This is a budget app that allows user to track different transactions and create new ones',
    image: shopping,
    source: 'https://github.com/Anny85-code/budget-app'
  },
  {
    link: 'https://recipe-app-online-5c6310dd16a2.herokuapp.com/',
    title: 'Food Recipes App',
    techStack: 'Tech Stack: Ruby on Rails, Postgres',
    desc: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    image: definition,
    source: 'https://github.com/Anny85-code/food-recipe'
  },
  {
    link: 'https://covid19-tracker-zeta-eight.vercel.app/',
    title: 'Covid19 Report App',
    techStack: 'Tech Stack- ReactJS, API',
    desc: 'In this project I used the real COVID-19 data from Narrativa API. It is mobile application for a daily tracking of Covid 19 global data for each country.',
    image: superhero,
    source: 'https://github.com/Anny85-code/covid19-tracker'
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
            <a href={cardItem.source}>
              <button type='button' className={classes.projectBtn}>view source</button>
            </a>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}
