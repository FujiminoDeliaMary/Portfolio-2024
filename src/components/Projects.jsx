import React, { useState } from "react";
import portfolio from '../assets/images/portfolio.png'
import artfullCode from '../assets/images/artfullcode.png'
import lettreenlumiere from '../assets/images/lettreenlumiere.png'
import nextIcon from '../assets/icons/next.svg'
import githubIcon from '../assets/icons/github.svg'
const Projects = () => {

    const [projects, setProjects] = useState([
        {
            image : portfolio,
            title : 'Portfolio',
            description : 'Portfolio conçu pour mettre en scène mon expertise en développement web et ingénierie logicielle, avec une attention particulère portée à l\'interaction et à la typographie.  À travers une série de projets variés, de l\'édition numérique à la création d \'identités visuelles, ce portfolio démontre ma capacité à transformer des concepts abstraits en créations visuelles concrètes et attrayantes',
            githubLink : 'https://github.com/FujiminoDeliaMary/Portfolio-2024',
            link : 'https://mtsene.lpmiaw.univ-lr.fr/portfolio/'
        },
        {
            image : artfullCode,
            title : 'ArtFull Code',
            description : 'ArtfullCode est une jeune agence virtuelle basée à la rochelle, spécialisée dans la création de solutions web nnovantes pour les petites entreprises. Ce projet illustre mon expertise dans le développement de sites web personnalisés qui combinent fonctionnalités et esthétique pour améliorer l\'expérience utilisateur.',
            githubLink : 'https://github.com/FujiminoDeliaMary/ArtfullCode',
            link : 'https://agence-artfull-code.lpmiaw.univ-lr.fr/'
        },
        {
            image : lettreenlumiere,
            title : 'B.A.BA Lettres en lumière',
            description : 'Développée spécifiquement pour répondre aux besoins éducatifs des populations marginalisées dans les prisons françaises, cette application d\'alphabétisation vise à offrir des outils d\'apprentissage accessibles aux allophones, illettrés et analphabètes. ',
            githubLink : '/',
            link : 'https://mtsene.lpmiaw.univ-lr.fr/lettrelumierefront/'
        },

    ]);

    return <section className="projects">
                <h2 className="projects__title">Mes projets</h2>
                <h3 className="projects__subtitle">Explorez mes réalisations et voyez comment je transforme les idées en solutions digitales impactantes. Chaque projet est une histoire de défi et de réussite. Voici les miennes.</h3>

                <div className="projects__list">
                    {
                        projects.map(project => {
                            return <div className="project">
                                    <img src={project.image} alt=""className="project__image"/>
                                    <div>
                                        <p className="project__title">{project.title}</p>
                                        <div className="project__links">
                                            <img src={nextIcon} alt="Aller vers le site" className="project__link"/>
                                            <img src={githubIcon} alt="Aller vers le site" className="project__link"/>
                                        </div>
                                    </div>
                                    <p className="project__description">

                                    </p>
                            </div>
                        })
                    }
                </div>
            </section>
}

export default Projects;