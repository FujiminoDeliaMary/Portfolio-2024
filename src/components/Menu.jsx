import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';  // Import the hook

const Menu = ({ isOpen, closeMenu, toggleMenu }) => {
    const { t } = useTranslation(); 

    const handleClick = () => {
        closeMenu();
        toggleMenu();
    }

    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <div className={`curtain menu__left ${isOpen ? 'open' : ''}`}></div>
            <div className={`curtain menu__right ${isOpen ? 'open' : ''}`}></div>
            <nav className={`menu__content ${isOpen ? 'visible' : ''}`}>
                {isOpen && (
                    <Fade cascade delay={700} damping={0.2}>
                        <ul className="menu__links">
                            <li><Link to="home" spy={true} className="menu__link" onClick={handleClick}>{t('home')}</Link></li>
                            <li><Link to="about" spy={true} className="menu__link" onClick={handleClick}>{t('about')}</Link></li>
                            <li><Link to="skills" spy={true} className="menu__link" onClick={handleClick}>{t('skills')}</Link></li>
                            <li><Link to="projects" spy={true} className="menu__link" onClick={handleClick}>{t('projects')}</Link></li>
                            <li><Link to="contact" spy={true} className="menu__link" onClick={handleClick}>{t('contact')}</Link></li>
                        </ul>
                    </Fade>
                )}
            </nav>
        </div>
    );
}

export default Menu;
