 import React from 'react';
import arrowIocn from "../../../assets/icons/arrowIcon.png";
import "./index.css";

const Button = ({ bgColor = "#4F9CF9", isIcon, text, textColor = 'white' }) => {
    return (
        <button className='btn' style={{ backgroundColor: bgColor, color: textColor }}>
            <div className='btn-content'>
                <span>{text}</span>
                {isIcon && <img src={arrowIocn} alt="arrow" />}
            </div>
        </button>
    )
}

export default Button