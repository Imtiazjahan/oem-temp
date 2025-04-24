import React from 'react'
import './Hero.css'

import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Stock Only</h2>
        <p>collections</p>
</div>

<div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow} alt="" />

</div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
            </div>
        </div>
    
  );
};

export default Hero
