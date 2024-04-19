import React from "react";
import sendIcon from '../assets/icons/send.svg';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">
                {t('contactTitle')}
            </h2>
            <form action="" className="contact__form">
                <input type="text" placeholder={t('enterYourName')} className="contact__input"/>
                <input type="text" placeholder={t('enterYourEmail')} className="contact__input"/>
                <input type="text" placeholder={t('subject')} className="contact__input"/>
                <textarea cols="20" rows="10" placeholder={t('enterYourMessage')} className="contact__textarea"></textarea>

                <button type="submit" className="contact__submit">
                    {t('send')} <img src={sendIcon} alt={t('send')} />
                </button>
            </form>
        </section>
    );
}

export default Contact;
