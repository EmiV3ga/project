import { Github, Linkedin, Mail } from 'lucide-react';
import Background3D from './Background3D';
import Posts from './Posts';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="min-h-screen bg-neutral dark:bg-primary">
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"></div>
      <Background3D />
      <div className="absolute inset-0">
      <div className="absolute inset-0 z-0">
          <Scene3D />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral/20 dark:via-primary/20 to-neutral dark:to-primary" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">
            Emiliano Vega
          </h1>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center space-y-6 p-8">
             //* <h1 className="text-6xl font-bold text-neutral">Emiliano Vega</h1> //* Remove this line
              <p className="text-2xl text-accent">Pentester - Full Stack Developer</p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/yourusername" className="text-neutral hover:text-highlight transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" className="text-neutral hover:text-highlight transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:your.email@example.com" className="text-neutral hover:text-highlight transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <Posts />
        </div>
      </div>
    </div>
  );
}