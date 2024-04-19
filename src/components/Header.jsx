import React from "react";
import { Link } from "react-scroll";
// Import des icones de réseaux
import facebookIcon from '../assets/social-networks/facebookIcon.png'
import instagramIcon from '../assets/social-networks/instagram.png'
import gitHubIcon from '../assets/social-networks/githubIcon.png'
import linkedinIcon from '../assets/social-networks/LinkedinIcon.png'
import TextAnimation from "./TextAnimation";
import  {useTranslation} from 'react-i18next'
import i18next from "i18next";

const Header = ({toggleMenu, isOpen}) => {

    const handleLanguageChange = (event) => {
        i18next.changeLanguage(event.target.value);
    };

    const handleClick = () => {
        toggleMenu();
    }
    const {t} = useTranslation();

    return  <header className="header" id="home">
                <div className="header__top">
                    <Link to="home"  className="header__name">
                        <span className="header__name-prefix">Ma</span>rilyne
                    </Link>
                    <div className="header__right">

                        <div className={`header__burger ${isOpen ? 'open': ''} `} onClick={()=>handleClick()}>
                            <span className="header__burger-bar"></span>
                            <span className="header__burger-bar"></span>
                            <span className="header__burger-bar"></span>
                        </div>
                        <select name="" id="" className="header__select" onChange={handleLanguageChange}>
                            <option value="fr" selected>FR</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                  
                </div>
                <div className="header__main">
                    <h1 className="header__introduction">
                        <TextAnimation text={`${t("greeting")}`} />

                    </h1>
  
                    <div className="header__links">
                        <Link to="contact" className="header__link">{`${t("contactMe")}`}</Link>
                        <a href="/" className="header__link">{`${t("CV")}`}</a>
                    </div>
                    <ul className="header__social-media">
                        <li className="header__social-media-item"><a href="/"><img src={instagramIcon} alt="Instagram" /></a></li>
                        <li className="header__social-media-item"><a href="https://www.linkedin.com/in/marilyne-tsene/"target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
                        <li className="header__social-media-item"><a href="https://github.com/FujiminoDeliaMary" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="GitHub" /></a></li>
                        <li className="header__social-media-item"><a href="/"><img src={facebookIcon} alt="Facebook" /></a></li>
                    </ul>
                </div>
            </header>
}

export default Header;