import React from 'react';
import "./index.css";
import headerLogo from "../../assets/images/whitepace-logo.png";
import humMenu from "../../assets/icons/Hum-menu.png"
import menuDrop from "../../assets/icons/menu-down-icon.png";
import Button from '../common/button';

const navItems = ["Products", "Solutions", "Resources", "Pricing"];

const Header = () => {
    return (
        <header className='header-container'>
            <div className='header-logo'>
                <img src={headerLogo} alt="whitespace" />
            </div>

            <div className='right-section'>
                <nav className="navbar">
                    <ul className="nav-list">
                        {navItems.map((name) => (
                            <li className="nav-item" key={name}>
                                <a href="#">{name}</a>
                                <img src={menuDrop} alt="down arrow" />
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='header-btns'>
                    <Button
                        text="Login"
                        bgColor="#FFE492"
                        textColor="#043873"
                    />
                    <Button
                        text="Try Whitepace free"
                        isIcon
                    />
                </div>

                <div className='toggle-menu'>
                    <img src={humMenu} alt="whitespace" />
                </div>
            </div>

        </header>
    )
}

export default Header