import React from "react";
import { Fade} from "react-awesome-reveal";
import RotatingText from "./RotatingText";
import profil from '../assets/images/profil.png'

const About = () => {
    return <section className="about" id="about">
        <div className="about__intro">
            <h2 className="about__title">Qui suis-je ?</h2>
            
            <Fade cascade>
                <h3 className="about__subtitle"><RotatingText /></h3>
            </Fade>
            <p className="about__description">
            Je suis actuellement étudiante à La Rochelle, en pleine formation pour devenir <strong>développeuse FullStack</strong>, et j'ai 18 ans. Mon domaine de spécialisation couvre les <strong>technologies du web</strong>, incluant le CSS, le JavaScript, le HTML, ainsi que divers frameworks et outils dédiés au développement front-end et back-end. Ma passion pour ce domaine remonte à quatre ans déjà. Si je devais me comparer à une technologie, je choisirais sans hésiter ReactJs pour son caractère innovant, sa fiabilité, sa capacité d'adaptation et son potentiel surprenant.
            </p>
        </div>
        <img src={profil} alt="Profil" className="about__image"/>
    </section>
}

export default About;