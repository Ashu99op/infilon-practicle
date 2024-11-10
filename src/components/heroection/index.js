import React from 'react';
import "./index.css";
import heroImage from "../../assets/images/Image-container.png";
import heroBgImg from "../../assets/images/hero-element.png";
import Button from '../common/button';

const HeroSection = () => {
  return (
    <div className='hero-container' style={{ backgroundImage: `url(${heroBgImg})` }}>
        <section className='about-section'>
            <h2>Get More Done with whitepace</h2>
            <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            <div className='hero-btn-box'>
            <Button 
                text="Try Whitepace free"
                isIcon
            />
            </div>

        </section>
        <section className='img-section'>
            <img src={heroImage} alt='whitespace container'/>
        </section>
    </div>
  )
}

export default HeroSection