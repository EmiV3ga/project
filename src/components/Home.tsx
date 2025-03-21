import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import Background3D from './Background3D';
import Posts from './Posts';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      <Background3D />
      <div className="absolute inset-0">
        <div className="min-h-screen flex flex-col">
          <section className="hero-background flex-grow flex items-center justify-center relative">
            <div className="relative z-10 text-center space-y-6 p-8">
              <motion.h1 
                className="text-6xl font-display font-bold text-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p 
                className="text-xl text-secondary mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div 
                className="flex justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a 
                  href="https://github.com/EmiV3ga" 
                  className="text-secondary hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/emiliano1/" 
                  className="text-secondary hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:emiliano.dimartino.vega@gmail.com" 
                  className="text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </div>
          </section>
          <Posts />
        </div>
      </div>
    </div>
  );
}