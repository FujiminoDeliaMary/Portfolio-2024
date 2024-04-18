import React, { useState } from "react";
import { Link } from "react-scroll";
// Import des icones de réseaux
import facebookIcon from '../assets/social-networks/facebookIcon.png'
import instagramIcon from '../assets/social-networks/instagram.png'
import gitHubIcon from '../assets/social-networks/githubIcon.png'
import linkedinIcon from '../assets/social-networks/LinkedinIcon.png'
import TextAnimation from "./TextAnimation";


const Header = ({toggleMenu, isOpen}) => {


    const handleClick = () => {
        toggleMenu();
    }

    return  <header className="header" id="home">
                <div className="header__top">
                    <Link to="home" smooth={true}  className="header__name">
                        <span className="header__name-prefix">Ma</span>rilyne
                    </Link>
                    <div className={`header__burger ${isOpen ? 'open': ''} `} onClick={()=>handleClick()}>
                        <span className="header__burger-bar"></span>
                        <span className="header__burger-bar"></span>
                        <span className="header__burger-bar"></span>
                    </div>
                </div>
                <div className="header__main">
                    <h1 className="header__introduction">
                        <TextAnimation text="Salut ! Je suis Marilyne Delia, une jeune developpeuse web" />

                    </h1>
  
                    <div className="header__links">
                        <Link to="contact" className="header__link">Me contacter</Link>
                        <a href="/" className="header__link">Mon CV</a>
                    </div>
                    <ul className="header__social-media">
                        <li className="header__social-media-item"><a href="/"><img src={instagramIcon} alt="Instagram" /></a></li>
                        <li className="header__social-media-item"><a href="https://www.linkedin.com/in/marilyne-tsene/"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
                        <li className="header__social-media-item"><a href="https://github.com/FujiminoDeliaMary"><img src={gitHubIcon} alt="GitHub" /></a></li>
                        <li className="header__social-media-item"><a href="/"><img src={facebookIcon} alt="Facebook" /></a></li>
                    </ul>
                </div>
            </header>
}

export default Header;