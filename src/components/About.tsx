import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail } from 'lucide-react';
import Background3D from './Background3D';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL"],
  Tools: ["Git", "Docker", "AWS"]
};

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen pt-20 pb-12 px-4">
      <Background3D />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="md:flex md:items-start md:space-x-8 mb-12">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400"
              alt="Profile"
              className="w-32 h-32 md:w-full md:h-auto rounded-full md:rounded-lg mx-auto mb-4 object-cover"
            />
          </motion.div>
          <motion.div 
            className="md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-display font-bold text-secondary mb-4">{t('about.title')}</h1>
            <p className="text-xl text-accent">{t('about.description')}</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-primary/10 backdrop-blur-sm rounded-lg p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-display font-bold text-secondary mb-6">{t('about.skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mobile-card md:mobile-card-none">
                <h3 className="text-xl font-semibold text-secondary mb-4">{t(`about.skills.${category.toLowerCase()}`)}</h3>
                <ul className="space-y-2">
                  {items.map((skill, index) => (
                    <li key={index} className="text-accent">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://github.com/EmiV3ga"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-secondary hover:text-accent transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/emiliano1/"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-secondary hover:text-accent transition-colors"
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
    </div>
  );
}