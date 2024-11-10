import React from 'react';
import yourworkBgImg from "../../assets/images/BACKGROUND.png"
import yourworkEle from "../../assets/images/yourworkelement.png"
import "./index.css";
import Button from '../common/button';

const YourWork = () => {
    return (
        <div className='your-work-container' style={{ backgroundImage: `url(${yourworkBgImg})` }}
        >
            <h1>
                Your work, everywhere you are
                <img src={yourworkEle} alt="yourworkEle" />
            </h1>
            <p>
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
            <div className='btn-box'>
            <Button
                text="Try Taskey"
                isIcon
            />
            </div>

        </div>
    )
}

export default YourWork