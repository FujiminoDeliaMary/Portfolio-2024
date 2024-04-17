import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Menu = ({ isOpen, closeMenu }) => {  

    return (
        <div className="menu">
            <div className={`curtain menu__left ${isOpen ? 'open' : ''}`}></div>
            <div className={`curtain menu__right ${isOpen ? 'open' : ''}`}></div>
            <nav className={`menu__content ${isOpen ? 'visible' : ''}`}>
                {isOpen && (
                    <Fade cascade delay={700} damping={0.2}>
                        <ul className="menu__links">
                            <li><Link to="home" smooth={true} spy={true} className="menu__link" onClick={closeMenu}>Home</Link></li>
                            <li><Link to="about" smooth={true} spy={true} className="menu__link" onClick={closeMenu}>A propos</Link></li>
                            <li><Link to="skills" smooth={true} spy={true} className="menu__link" onClick={closeMenu}>Compétences</Link></li>
                            <li><Link to="projects" smooth={true} spy={true} className="menu__link"onClick={closeMenu}>Projets</Link></li>
                            <li><Link to="contact" smooth={true} spy={true} className="menu__link" onClick={closeMenu}>Contact</Link></li>
                        </ul>
                    </Fade>
                )}
            </nav>
        </div>
    );
}

export default Menu;
