import { Github, Linkedin, Mail } from 'lucide-react';
import Background3D from './Background3D';
import Posts from './Posts';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background3D />
      <div className="absolute inset-0">
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center space-y-6 p-8">
              <h1 className="text-6xl font-bold text-neutral">Emiliano Vega</h1>
              <p className="text-xl text-primary dark:text-neutral mb-8">Pentester • Full Stack Developer • UI/UX Designer • Tech Enthusias</p>
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