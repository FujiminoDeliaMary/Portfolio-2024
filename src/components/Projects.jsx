import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import portfolio from '../assets/images/portfolio.png';
import artfullCode from '../assets/images/artfullcode.png';
import lettreenlumiere from '../assets/images/lettreenlumiere.png';
import nextIcon from '../assets/icons/next.svg';
import githubIcon from '../assets/icons/github.svg';

const Projects = () => {
    const { t } = useTranslation();


    const [projects] = useState([
        {
            image: portfolio,
            titleKey: "portfolio",
            title : 'Portfolio',
            githubLink: 'https://github.com/FujiminoDeliaMary/Portfolio-2024',
            link: 'https://mtsene.lpmiaw.univ-lr.fr/portfolio/',
            technos: ['#ReactJs', '#Scss', '#Framer Motion', '#i18next']
        },
        {
            image: artfullCode,
            titleKey: "artfullCode",
            title : 'Artfull Code',
            githubLink: 'https://github.com/FujiminoDeliaMary/ArtfullCode',
            link: 'https://agence-artfull-code.lpmiaw.univ-lr.fr/',
            technos: ['#ReactJs', '#Scss']
        },
        {
            image: lettreenlumiere,
            titleKey: "lettresEnLumiere",
            title : 'Lettres en lumière',
            githubLink: '/',
            link: 'https://mtsene.lpmiaw.univ-lr.fr/lettrelumierefront/',
            technos: ['#ReactJs', '#Scss', '#Framer Motion', '#Symfony']
        }
    ]);

    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">{t("projectsTitle")}</h2>
            <h3 className="projects__subtitle">{t("projectsSubtitle")}</h3>
            
            <div className="projects__list">
                {/* Boucle pour display tous les projets */}
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={t(`${project.titleKey}`)} className="project__image"/>
                        <div className="project__top">
                            <p className="project__title">{t(`${project.title}`)}</p>
                            <div className="project__links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img src={nextIcon} alt="Go to site" className="project__link project__link--next" />
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <img src={githubIcon} alt="Go to GitHub" className="project__link project__link--github" />
                                </a>
                            </div>
                        </div>
                        <p className="project__description">
                            {t(`${project.titleKey}Description`)}
                        </p>
                        <p className="project__technos">{project.technos.join(', ')}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
