import React from 'react';
import apple from "../../assets/icons/apple-black-logo 2.png"
import window from "../../assets/icons/windows-logo 1.png"
import android from "../../assets/icons/Group.png"
import Button from '../common/button';
import "./index.css"

const FreeTrial = () => {
  return (
    <div className='free-trial-container'>
        <h1>Try Whitepace today</h1>
        <p>Get started for free.
        Add your whole team as your needs grow.</p>
        <div className='btn'>
        <Button 
            text="Try Taskey free"
            isIcon
        />
        </div>

        <span>On a big team? Contact sales</span>
        <div className='icon-box'>
            <img src={apple} alt='Apple' />
            <img src={window} alt='window' />
            <img src={android} alt='android' />
        </div>

    </div>
  )
}

export default FreeTrial