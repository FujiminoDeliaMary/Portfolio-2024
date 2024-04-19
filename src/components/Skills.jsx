import React, { useState } from "react";
import backendIcon from '../assets/images/backend.png'
import frontendIcon from '../assets/images/front-end.jpg'
import bdIcon from '../assets/images/bd.png'
import github from '../assets/images/github.png'
import uxdesignIcon from '../assets/images/UX.png'
import wordpressIcon from '../assets/images/wordpress.png'
import { Zoom } from "react-awesome-reveal"
import  {useTranslation} from 'react-i18next'


const Skills = () => {

    const {t} = useTranslation();
    const [skills, setSkills] = useState([
                                            {
                                                img: backendIcon,
                                                title : t("backendDevelopment"),
                                                description: t("backendDescription")
                                            },
                                            {
                                                img : frontendIcon,
                                                title : t("frontendDevelopment"),
                                                description: t("frontendDescription")
                                            },
                                            {
                                                img : bdIcon,
                                                title : t("database"),
                                                description: t("databaseDescription")
                                            },
                                            {
                                                img : github,
                                                title : t("versionControl"),
                                                description: t("versionControlDescription")
                                            },
                                            {
                                                img : wordpressIcon,
                                                title : t("wordpress"),
                                                description: t("wordpressDescription")
                                            },
                                            {
                                                img : uxdesignIcon,
                                                title : t("uxuiDesign"),
                                                description:t("uxuiDescription")
                                            }
                                        ])
    return <section className="skills" id="skills">
            <h2 className="skills__title">{`${t("skillsTitle")}`}</h2>
            
            <div className="skills__list">
                {
                    skills.map((skill, index) => {
                        return   <figure className="skill" key={index}>
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