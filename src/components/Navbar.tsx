import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, FolderKanban, User, Phone, LogIn, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { toggleLanguage, language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-secondary hover:text-accent">
              <Home size={20} />
              <span className="hidden md:inline">{t('nav.home')}</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-2 text-secondary hover:text-accent">
              <FolderKanban size={20} />
              <span className="hidden md:inline">{t('nav.projects')}</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-secondary hover:text-accent">
              <User size={20} />
              <span className="hidden md:inline">{t('nav.about')}</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-secondary hover:text-accent">
              <Phone size={20} />
              <span className="hidden md:inline">{t('nav.contact')}</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-secondary hover:text-accent transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="sr-only">
                {language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
              </span>
            </button>
            <ThemeToggle />
            <Link to="/login" className="flex items-center space-x-2 text-secondary hover:text-accent">
              <LogIn size={20} />
              <span className="hidden md:inline">{t('nav.login')}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}