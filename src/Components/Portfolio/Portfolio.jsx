import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import budget from "../../img/budget.png";
import dravel from "../../img/dravel.png";
import food from "../../img/food.png";
import seaport from "../../img/seaport.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='portfolio'>
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={budget} alt='' />
          <div className='button-img'>
            <button className='button-img-inner'>see more</button>
            <button className='button-img-inner'>see live</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dravel} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seaport} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
