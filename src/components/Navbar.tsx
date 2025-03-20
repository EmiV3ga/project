import { Home, FolderKanban, User, Phone, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-neutral hover:text-highlight">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-2 text-neutral hover:text-highlight">
              <FolderKanban size={20} />
              <span>Projects</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-neutral hover:text-highlight">
              <User size={20} />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-neutral hover:text-highlight">
              <Phone size={20} />
              <span>Contact</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login" className="flex items-center space-x-2 text-neutral hover:text-highlight">
              <LogIn size={20} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}