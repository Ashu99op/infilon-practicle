import React from 'react';
import './index.css';
import checkIcon from "../../../assets/icons/check-icon.png";
import normalCheckIcon from "../../../assets/icons/normal-check-Icon.png"

const PriceBox = ({ data }) => {
    const { title, price, subtitle, features, buttonText, highlighted } = data;

    return (
        <div className={`price-box ${highlighted ? 'highlighted' : ''}`}>
            <div className="price-box-header">
                <h3>{title}</h3>
                <div className="price">{price}</div>
                <p>{subtitle}</p>
            </div>

            <ul className="features-list">
                {features.map((feature, index) => (
                    <li key={index}>
                        {highlighted ? (
                            <img src={checkIcon} alt='check' />
                        ) : (
                            <img src={normalCheckIcon} alt='check' />
                        )}
                        {feature}
                    </li>
                ))}
            </ul>

            <button className="get-started-btn">{buttonText}</button>
        </div>
    );
};

export default PriceBox;