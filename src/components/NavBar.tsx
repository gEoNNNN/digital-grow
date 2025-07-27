import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Havbar.css'
import logo from "../assets/logo.svg"
import darkmodeicon from "../assets/darknomeicon.svg"
import bg from "../assets/navbarfilter.png"

type LanguageCode = 'RO' | 'EN' | 'RU'

interface Language {
  code: LanguageCode
  name: string
}

interface Translations {
  home: string
  services: string
  portfolio: string
  about: string
  contact: string
}

const NavBar = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('RO')
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const languages: Record<LanguageCode, Language> = {
    RO: { code: 'RO', name: 'Română' },
    EN: { code: 'EN', name: 'English' },
    RU: { code: 'RU', name: 'Русский' }
  }

  const translations: Record<LanguageCode, Translations> = {
    RO: {
      home: 'Acasa',
      services: 'Servicii',
      portfolio: 'Portofoliu',
      about: 'Despre noi',
      contact: 'Contacte'
    },
    EN: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About us',
      contact: 'Contact'
    },
    RU: {
      home: 'Главная',
      services: 'Услуги',
      portfolio: 'Портфолио',
      about: 'О нас',
      contact: 'Контакты'
    }
  }

  const handleLanguageChange = (langCode: LanguageCode): void => {
    setCurrentLanguage(langCode)
    setIsDropdownOpen(false)
  }

  const currentTranslations = translations[currentLanguage]

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${bg})` }}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo"/>
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              {currentTranslations.home}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              {currentTranslations.services}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link">
              {currentTranslations.portfolio}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutus" className="navbar-link">
              {currentTranslations.about}
            </Link>
          </li>
           <li className="navbar-item">
            <Link to="/contacts" className="navbar-link">
              {currentTranslations.contact}
            </Link>
          </li>
           <li className="navbar-item language-dropdown">
            <button 
              className="navbar-link language-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {currentLanguage} ▼
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                {Object.values(languages).map((lang) => (
                  <button
                    key={lang.code}
                    className={`dropdown-item ${currentLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.code} - {lang.name}
                  </button>
                ))}
              </div>
            )}
          </li>
        </ul>
        <Link to="/" className="navbar-theme">
          <img src={darkmodeicon} alt="Dark mode"/>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar