import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import kandi from '../../img/kandi.jpg';
import dejan from '../../img/dejan.png';
import adorn from '../../img/adorn.png';
import clinton from '../../img/clinton.jpg';

const Testimonial = () => {
  const clients = [
    {
      img: kandi,
      review:
        'I had the pleasure of working with Aniekan during my learning journey and his way of learning fast, helping others and solving was the thing that makes me recommend him as a software developer. Aniekan is a courageous and very professional partner, especially when it comes to working on a project that requires a lot of involvement, high productivity and of course in-depth knowledge in the field. I hope this recommendation will work in your favor because you are an asset to every group that has you..',
    },
    {
      img: dejan,
      review:
        'I had the opportunity to work together with Aniekan on the same team. He is a great collaborator and teammate and always willing to help and share his knowledge with others. As a software developer Aniekan is focused on details and he has always worked hard to do a flawless job in all projects. He has been using his knowledge to mentor others and to help them on their first weeks in the program. He is totally reliable and has the potential to be a great leader.',
    },
    {
      img: adorn,
      review:
        "Aniekan's support for teammates is overwhelming. I have been teammates with him for almost a month and during that period we have been working together he has taught me and the rest of the team that developers are like units (in unit testing) that only produce fully functional products when integrated and the takeaway here is that by working together as a team, developers guarantee an amazing product. I can recommend him for any type of work that involves a team. The good energy he brings to a team is above profound.",
    },
    {
      img: clinton,
      review:
        'Aniekan is an amazing personality. An excellent communicator and a good team player, who is never tired of striving to achieve the best, he is not scared of re-inventing himself which makes him dynamic in many situations, a trait that drove our team to success.',
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients and Colleagues </span>
        <span>have this </span>
        <span>to say...</span>
        <div className="blur t-blur1" style={{ background: 'var(--purple)' }} />
        <div className="blur t-blur2" style={{ background: 'skyblue' }} />

      </div>
      <Swiper
        // install Swiper modules
        /* eslint-disable */
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
/* eslint-enable */
export default Testimonial;
