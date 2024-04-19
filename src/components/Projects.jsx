import React, { useState } from "react";
import portfolio from '../assets/images/portfolio.png'
import artfullCode from '../assets/images/artfullcode.png'
import lettreenlumiere from '../assets/images/lettreenlumiere.png'
import nextIcon from '../assets/icons/next.svg'
import githubIcon from '../assets/icons/github.svg'
import  {useTranslation} from 'react-i18next'



const Projects = () => {

    const {t} = useTranslation();
    const [projects, setProjects] = useState([
        {
            image : portfolio,
            title : 'Portfolio',
            description : t("portfolioDescription"),
            githubLink : 'https://github.com/FujiminoDeliaMary/Portfolio-2024',
            link : 'https://mtsene.lpmiaw.univ-lr.fr/portfolio/',
            technos : ['#ReactJs', '#Scss', '#Framer Motion', '#i18next']
        },
        {
            image : artfullCode,
            title : 'ArtFull Code',
            description : t("artfullCodeDescription"),
            githubLink : 'https://github.com/FujiminoDeliaMary/ArtfullCode',
            link : 'https://agence-artfull-code.lpmiaw.univ-lr.fr/',
            technos : ['#ReactJs', '#Scss']
        },
        {
            image : lettreenlumiere,
            title : 'Lettres en lumière',
            description : t("lettresEnLumiereDescription"),
            githubLink : '/',
            link : 'https://mtsene.lpmiaw.univ-lr.fr/lettrelumierefront/',
            technos : ['#ReactJs', '#Scss', '#Framer Motion', '#Symfony']
        },

    ]);

    return <section className="projects" id="projects">
                <h2 className="projects__title">{`${t("projectsTitle")}`}</h2>
                <h3 className="projects__subtitle">{`${t("projectsSubtitle")}`}</h3>
                
                <div className="projects__list">
                    {
                        projects.map((project, index) => {

                            return <>
                                        <div className="project" key={index}>
                                                <img src={project.image} alt=""className="project__image"/>
                                                <div className="project__top">
                                                    <p className="project__title">{project.title}</p>
                                                    <div className="project__links">
                                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><img src={nextIcon} alt="Aller vers le site" className="project__link project__link--next" /></a>
                                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Aller vers le site" className="project__link project__link--github"/></a>
                                                    </div>
                                                </div>
                                                <p className="project__description">
                                                    {project.description}
                                                </p>
                                                <p className="project__technos">{project.technos.join(', ')}</p>
                                        </div>
                                    </>
                        })
                    }
                </div>
  
            </section>
}

export default Projects;