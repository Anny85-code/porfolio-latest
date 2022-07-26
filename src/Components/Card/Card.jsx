import React from 'react';
import './Card.css';
/* eslint-disable */
const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};
/* eslint-enable */
export default Card;
