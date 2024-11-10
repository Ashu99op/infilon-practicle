import React from 'react';
import "./index.css";
import apple from "../../assets/images/apple.png"
import google from "../../assets/images/google.png"
import slack from "../../assets/images/slack.png"
import microsoft from "../../assets/images/microsoft.png";
import sponsoreElement from "../../assets/images/sponsoreelement.png";

const sponsores = [apple,microsoft,slack,google];

const OurSponsors = () => {
  return (
    <div className='our-sponsore-container'>
        <h1>
            Our sponsors 
                <img src={sponsoreElement} alt="sponsoreElement" />
        </h1>
        <div className='sponsore-logo'>
            {sponsores.map((s,i) => (
                <div key={i}>
                    <img src={s} alt={s} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurSponsors