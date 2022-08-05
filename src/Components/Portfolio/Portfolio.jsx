import React, { useContext } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Portfolio.css';
import './Portfolio.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import budget from '../../img/budget.png';
import dravel from '../../img/dravel.png';
import food from '../../img/food.png';
import seaport from '../../img/seaport.png';
import covid19port from '../../img/covid19port.png';
import foofforallport1 from '../../img/foofforallport1.png';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;

  const works = [{
    name: 'footforall',
    imgUrl: foofforallport1,
    projectSource: 'https://github.com/Anny85-code/optimism',
    projectLiveLink: 'https://optimismfoodforall.herokuapp.com/',
  }, {
    name: 'budget',
    imgUrl: budget,
    projectSource: 'https://github.com/Anny85-code/budget-app',
    projectLiveLink: 'https://salty-stream-24790.herokuapp.com/',
  }, {
    name: 'dravel',
    imgUrl: dravel,
    projectSource: 'https://github.com/Anny85-code/dravel_app',
    projectLiveLink: 'https://dravel-app.herokuapp.com/',
  }, {
    name: 'food',
    imgUrl: food,
    projectSource: 'https://github.com/Anny85-code/food-recipe',
    projectLiveLink: 'https://food-recipe-rails.herokuapp.com/',
  }, {
    name: 'seaport',
    imgUrl: seaport,
    projectSource: 'https://github.com/Anny85-code/seafoodmenu',
    projectLiveLink: 'https://anny85-code.github.io/seafoodmenu/dist/',
  }, {
    name: 'covid19',
    imgUrl: covid19port,
    projectSource: 'https://github.com/Anny85-code/covid19-tracker',
    projectLiveLink: 'https://covid19-dataapp.herokuapp.com/',
  }];

  return (
    <div className="portfolio reveal" id="portfolio">
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor
        className="portfolio-slider"
      >
        {works.map((work) => (
          <div key={work.name}>
            <SwiperSlide>
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLiveLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectSource} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
