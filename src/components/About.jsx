import React from "react";
import { Fade } from "react-awesome-reveal";
import RotatingText from "./RotatingText";
import profil from '../assets/images/profil.png';
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const About = () => {
    const { t } = useTranslation(); // Utilisez le hook useTranslation

    return (
        <section className="about" id="about">
            <div className="about__intro">
                <h2 className="about__title">{t('aboutTitle')}</h2>
                
                <Fade cascade>
                    <h3 className="about__subtitle"><RotatingText /></h3>
                </Fade>
                <p className="about__description">
                    {t('aboutDescription')}
                </p>
            </div>
            <img src={profil} alt="Profil" className="about__image"/>
        </section>
    );
}

export default About;
