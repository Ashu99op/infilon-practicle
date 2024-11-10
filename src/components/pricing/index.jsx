import React from 'react'
import "./index.css";
import pricingElement from "../../assets/images/sponsoreelement.png";
import {pricingData} from "../../constant";
import PriceBox from '../common/pricebox/PriceBox';

const Pricing = () => {
    return (
        <div className='pricing-container'>
            <h1>
                Choose Your Plan
                <img src={pricingElement} alt="yourworkEle" />
            </h1>
            <p>
                Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
            </p>

            <div className='pricing-tabs'>
                {pricingData.map((data,i) => (
                    <PriceBox data={data} key={i}/>
                ))}
            </div>
        </div>
    )
}

export default Pricing