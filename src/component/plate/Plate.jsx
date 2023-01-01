import React from 'react';
import './plate.css';

const Plate = ({ p, handleClick }) => {
  const { name, img, newP, oldP } = p;
  return (
    <div className="plate-parent">
      <div className="plate-item-parent">
        <img className="plate-img" src={img} alt="" />
        <h3 className="plate-name">{name}</h3>
        <p className="about-plate">old Price: $<span className='plate-price-span'>{oldP}</span></p>
        <h className="plate-price">new price: ${newP}</h>
        <button onClick={() => handleClick(p)} className="buy-btn">
          take it
        </button>
      </div>
    </div>
  );
};

export default Plate;
