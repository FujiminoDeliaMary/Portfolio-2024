import React from "react";
import phoneIcon from '../assets/icons/phonepng.png';
import mailIcon from '../assets/icons/mail.svg';
import locationIcon from '../assets/icons/location.svg'
import { Link } from "react-scroll";

const Footer = () => {
    return <footer className="footer">
                <div className="footer__top">
                    <div>
                        <img src={phoneIcon} alt="Numéro de téléphone" className="footer__img"/>
                        <a href="tel:0651358858" className="footer__link">(33) 6 51358858</a>
                    </div>
                    <div>
                        <img src={mailIcon} alt="Email" className="footer__img"/>
                        <a href="mailto:marilynedelia@gmail.com" className="footer__link">marilynedelia@gmail.com</a>
                    </div>
                    <div>
                        <img src={locationIcon} alt="Localisation" className="footer__img"/>
                        <p >La rochelle 17000</p>
                    </div>
                </div>
                <p className="footer__credits">Designed and developed by <Link to="home"><span className="footer__credits--green">Marilyne TSENE</span> avec ReactJs, Framer Motion , Figma, et du redBull</Link>.<br></br><br></br> All rights reserved.</p>
            </footer>
}

export default Footer;