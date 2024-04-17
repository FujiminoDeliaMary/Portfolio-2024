import React from "react";
import sendIcon from '../assets/icons/send.svg'

const Contact = () => {
    return <section className="contact" id="contact">
        <h2 className="contact__title">
            Prêt à collaborer ? Contactez-moi pour discuter de votre projet ou simplement pour échanger sur vos idées.
        </h2>
        <form action="" className="contact__form">
            <input type="text" placeholder="Entrez votre nom" className="contact__input"/>
            <input type="text" placeholder="Entrez votre email" className="contact__input"/>
            <input type="text" placeholder="Sujet" className="contact__input"/>
            <textarea name="" id="" cols="20" rows="10" placeholder="Entrez votre message" className="contact__textarea"></textarea>

            <button type="submit" className="contact__submit">
            Envoyer <img src={sendIcon} alt="Envoyer" />
            </button>
        </form>

       
    </section>
}

export default Contact;