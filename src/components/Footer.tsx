import { Github, Linkedin, Mail, Instagram, Facebook, Twitter, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
    { icon: Instagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/yourusername', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Phone, href: 'https://wa.me/1234567890', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-secondary/80 backdrop-blur-sm py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-highlight transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-accent text-sm">
            © {new Date().getFullYear()} Emiliano Vega. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}