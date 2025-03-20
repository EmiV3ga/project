import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Background3D from './Background3D';

export default function Contact() {
  return (
    <div className="relative min-h-screen pt-20 pb-12 px-4">
      <Background3D />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral mb-4">Contact Me</h1>
          <p className="text-xl text-accent">Let's work together!</p>
        </div>
        
        <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Mail size={24} className="text-highlight" />
              <div>
                <h3 className="font-semibold text-neutral">Email</h3>
                <p className="text-accent">your.email@example.com</p>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Linkedin size={24} className="text-highlight" />
              <div>
                <h3 className="font-semibold text-neutral">LinkedIn</h3>
                <p className="text-accent">Connect with me</p>
              </div>
            </a>
            
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Github size={24} className="text-highlight" />
              <div>
                <h3 className="font-semibold text-neutral">GitHub</h3>
                <p className="text-accent">Check my repositories</p>
              </div>
            </a>
            
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Phone size={24} className="text-highlight" />
              <div>
                <h3 className="font-semibold text-neutral">Phone</h3>
                <p className="text-accent">+1 (234) 567-890</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}