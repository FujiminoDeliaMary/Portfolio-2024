import React, { useState } from "react";
import backendIcon from '../assets/images/backend.png'
import frontendIcon from '../assets/images/front-end.jpg'
import bdIcon from '../assets/images/bd.png'
import github from '../assets/images/github.png'
import uxdesignIcon from '../assets/images/UX.png'
import wordpressIcon from '../assets/images/wordpress.png'
import { Zoom } from "react-awesome-reveal";


const Skills = () => {

    const [skills, setSkills] = useState([
                                            {
                                                img: backendIcon,
                                                title : "Développement Back-end",
                                                description: "Spécialiste du développement backend, j'ai une solide expérience dans la création d'APIs robustes et performantes utilisant Symfony et Strapi. J'ai conçu et maintenu des infrastructures backend qui soutiennent des applications web scalables, en assurant une gestion optimale des données et une intégration fluide avec divers services."
                                            },
                                            {
                                                img : frontendIcon,
                                                title : "Développement Front-end",
                                                description: "Passionnée par le développement frontend, je crée des interfaces utilisateur attrayantes et réactives avec HTML, CSS, et JavaScript. J'ai une expertise particulière en React et Vue, où j'ai mis en œuvre des SPA (Single Page Applications) qui améliorent l'UX et augmentent l'engagement utilisateur"
                                            },
                                            {
                                                img : bdIcon,
                                                title : "Base de données",
                                                description: "Expérimentée dans la gestion de bases de données, je maîtrise SQL pour le stockage, la manipulation et l'analyse de grandes quantités de données. Que ce soit avec MySQL, PostgreSQL ou MongoDB, je développe des structures de bases de données optimisées pour des performances élevées."
                                            },
                                            {
                                                img : github,
                                                title : "Gestion des versions",
                                                description: "Compétente dans l'utilisation de Git et GitHub et Gitlab pour le contrôle de version, j'applique les meilleures pratiques de gestion de code pour collaborer efficacement en équipe. Mes projets sur GitHub démontrent ma capacité à utiliser des branches, des merges, et des pull requests pour maintenir un flux de développement clair et structuré."
                                            },
                                            {
                                                img : wordpressIcon,
                                                title : "Wordpress",
                                                description: "Développeuse WordPress, je construis des sites web personnalisés qui sont à la fois plaisants et riches. J'intègre des thèmes sur mesure, des plugins et des fonctionnalités spécifiques pour répondre aux exigences uniques de chaque client, assurant une gestion facile du contenu et une optimisation SEO."
                                            },
                                            {
                                                img : uxdesignIcon,
                                                title : "UX/UI Design",
                                                description: "En tant que designer UX passionnée, je continue à développer mes compétences dans la création d'expériences utilisateur qui visent à être à la fois intuitives et captivantes. J'exploite des outils tels qu'Adobe XD pour élaborer des wireframes et des prototypes qui servent de fondations à des solutions design bien pensées."
                                            }
                                        ])
    return <section className="skills" id="skills">
            <h2 className="skills__title">Mes compétences</h2>
            
            <div className="skills__list">
                {
                    skills.map(skill => {
                        return   <figure className="skill">
                                        <Zoom triggerOnce={true}>
                                            <img src={skill.img} alt="" className="skill__image"/>
                                            <figcaption>
                                                <p className="skill__title">{skill.title}</p>
                                                <p className="skill__description">{skill.description}</p>
                                            </figcaption>
                                        </Zoom>
                                    </figure>
                     
                      
                    })
                }
            </div>
      
         
        </section>
}

export default Skills;