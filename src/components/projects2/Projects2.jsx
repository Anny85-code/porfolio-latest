import React from 'react';
import classes from '../Projects/Projects.module.scss';
import shopping from '../images/budget.png';
import definition from '../images/food.png';
import { motion } from 'framer-motion';

// Web projects
export const cardItem = [
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
  }
];

export default function Projects2() {
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
    <div className={classes.box2} id='projects2'>
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
};
