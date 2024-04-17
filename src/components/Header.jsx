import React, { useState } from "react";

// Import des icones de réseaux
import facebookIcon from '../assets/social-networks/facebookIcon.png'
import instagramIcon from '../assets/social-networks/instagram.png'
import gitHubIcon from '../assets/social-networks/githubIcon.png'
import linkedinIcon from '../assets/social-networks/LinkedinIcon.png'


const Header = ({toggleMenu}) => {

    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => {
        setOpenMenu(!openMenu)
        toggleMenu();
    }

    return  <header className="header" id="home">
                <div className="header__top">
                    <p className="header__name">
                        <span className="header__name-prefix">Ma</span>rilyne
                    </p>
                    <div className={`header__burger ${openMenu ? 'open': ''} `} onClick={()=>handleClick()}>
                        <span className="header__burger-bar"></span>
                        <span className="header__burger-bar"></span>
                        <span className="header__burger-bar"></span>
                    </div>
                </div>
                <div className="header__main">
                    <p className="header__introduction">
                        Salut ! Je suis Marilyne Delia TSENE
                    </p>
                    <p className="header__profession">Je suis Developpeuse Full Stack</p>
                    <div className="header__links">
                        <a href="/" className="header__link">Me contacter</a>
                        <a href="/" className="header__link">Mon CV</a>
                    </div>
                    <ul className="header__social-media">
                        <li className="header__social-media-item"><img src={instagramIcon} alt="Instagram" /></li>
                        <li className="header__social-media-item"><img src={linkedinIcon} alt="LinkedIn" /></li>
                        <li className="header__social-media-item"><img src={gitHubIcon} alt="GitHub" /></li>
                        <li className="header__social-media-item"><img src={facebookIcon} alt="Facebook" /></li>
                    </ul>
                </div>
            </header>
}

export default Header;