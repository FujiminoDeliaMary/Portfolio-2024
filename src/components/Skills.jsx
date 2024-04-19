import React from "react";
import backendIcon from '../assets/images/backend.png';
import frontendIcon from '../assets/images/front-end.jpg';
import bdIcon from '../assets/images/bd.png';
import github from '../assets/images/github.png';
import uxdesignIcon from '../assets/images/UX.png';
import wordpressIcon from '../assets/images/wordpress.png';
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();


    const skillsInfo = [
        { img: backendIcon, titleKey: "backendDevelopment", descriptionKey: "backendDescription" },
        { img: frontendIcon, titleKey: "frontendDevelopment", descriptionKey: "frontendDescription" },
        { img: bdIcon, titleKey: "database", descriptionKey: "databaseDescription" },
        { img: github, titleKey: "versionControl", descriptionKey: "versionControlDescription" },
        { img: wordpressIcon, titleKey: "wordpress", descriptionKey: "wordpressDescription" },
        { img: uxdesignIcon, titleKey: "uxuiDesign", descriptionKey: "uxuiDescription" }
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">{t("skillsTitle")}</h2>
            
            <div className="skills__list">
                {/*  */}
                {skillsInfo.map((skill, index) => (
                    <figure className="skill" key={index}>
                        <Zoom triggerOnce={true}>
                            <img src={skill.img} alt={t(skill.titleKey)} className="skill__image" />
                            <figcaption>
                                <p className="skill__title">{t(skill.titleKey)}</p>
                                <p className="skill__description">{t(skill.descriptionKey)}</p>
                            </figcaption>
                        </Zoom>
                    </figure>
                ))}
            </div>
        </section>
    );
};

export default Skills;
