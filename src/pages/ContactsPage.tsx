import React from 'react'
import './ContactsPage.css'
import BG from "../assets/contscts.mp4"
import Filter from "../assets/homepagefilter.png"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import contactsContent from "./ContactsPage.json"
import icon1 from "../assets/caontactsicon1.svg"
import icon2 from "../assets/caontactsicon2.svg"
import texticon1 from "../assets/textemoji1.svg"
import texticon2 from "../assets/textemoji2.svg"
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/li.svg'
import telegram from '../assets/telegram.svg'
import wa from "../assets/wa.svg"
import instagram from '../assets/insta.svg'
import tiktok from "../assets/tt.svg"
import viber from "../assets/viber.svg"

const ContactsPage: React.FC = () => {
  const currentLanguage = 'RO'
  const content = contactsContent[currentLanguage]

  return (
    <div className="contacts-page">
      <video className="background-video" autoPlay muted loop>
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={Filter} alt="Filter overlay" className="video-filter" />
      <div className="contacts-content">
        <NavBar/>
        <div className="contacts-main-section">
          <h1 className="contacts-main-section-title">
            {content.contacts.title}
          </h1>
          <p className="contacts-main-section-description">
            {content.contacts.description}
          </p>
        </div>

        {/* Contact Options Section */}
        <div className="contacts-section">
          <div className="contact-options">
            {/* Digital Assistant Section */}
            <div className="contact-option">
              <div className="contact-option-icon">
                <img src={icon1} alt="Digital Assistant" />
              </div>
              <div className="contact-option-content">
                <h3 className="contact-option-title">{content.contacts.section1title}</h3>
                <p className="contact-option-description">{content.contacts.section1description}</p>
                
                <div className="contact-text-section">
                  <div className="text-with-emoji">
                    <img src={texticon1} alt="Chat emoji" className="text-emoji" />
                    <span className="contact-text">{content.contacts.section1text}</span>
                  </div>
                  <button className="contact-option-button">
                    {content.contacts.section1button}
                  </button>
                </div>
              </div>
            </div>

            {/* Real Person Contact Section */}
            <div className="contact-option">
              <div className="contact-option-icon">
                <img src={icon2} alt="Real Person" />
              </div>
              <div className="contact-option-content">
                <h3 className="contact-option-title">{content.contacts.section2title}</h3>
                <p className="contact-option-description">{content.contacts.section2description}</p>
                
                <div className="contact-text-section">
                  <div className="text-with-emoji">
                    <img src={texticon2} alt="Person emoji" className="text-emoji" />
                    <div className="contact-details">
                      <span className="contact-text">{content.contacts.section2text}</span>
                      <span className="contact-phone">{content.contacts.section2phone}</span>
                      <span className="contact-email">{content.contacts.section2email}</span>
                    </div>
                  </div>
                  <button className="contact-option-button">
                    {content.contacts.section2button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="contacts-section">
          <h2 className="contacts-section-title">{content.contacts.socilastitle}</h2>
          
          <div className="social-media-row">
            <a href="#" className="social-media-link">
              <img src={facebook} alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a href="#" className="social-media-link">
              <img src={instagram} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="#" className="social-media-link">
              <img src={linkedin} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-media-link">
              <img src={telegram} alt="Telegram" />
              <span>Telegram</span>
            </a>
            <a href="#" className="social-media-link">
              <img src={tiktok} alt="TikTok" />
              <span>TikTok</span>
            </a>
            <a href="#" className="social-media-link">
              <img src={wa} alt="WhatsApp" />
              <span>WhatsApp</span>
            </a>
            <a href="#" className="social-media-link">
              <img src={viber} alt="Viber" />
              <span>Viber</span>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default ContactsPage