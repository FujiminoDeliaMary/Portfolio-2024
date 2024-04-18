import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Menu = ({ isOpen, closeMenu, toggleMenu }) => {  

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
                            <li><Link to="home"  spy={true} className="menu__link" onClick={handleClick}>Home</Link></li>
                            <li><Link to="about"  spy={true} className="menu__link" onClick={handleClick}>A propos</Link></li>
                            <li><Link to="skills"  spy={true} className="menu__link" onClick={handleClick}>Compétences</Link></li>
                            <li><Link to="projects"  spy={true} className="menu__link"onClick={handleClick}>Projets</Link></li>
                            <li><Link to="contact"  spy={true} className="menu__link" onClick={handleClick}>Contact</Link></li>
                        </ul>
                    </Fade>
                )}
            </nav>
        </div>
    );
}

export default Menu;
