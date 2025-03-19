import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Briefcase, MessageSquarePlus, User, LogOut, Moon, Sun } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Layout() {
  const location = useLocation();
  const [user, setUser] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                <Home className="h-6 w-6" />
                <span className="ml-2 font-medium">Home</span>
              </Link>
              <Link to="/projects" className="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                <Briefcase className="h-6 w-6" />
                <span className="ml-2 font-medium">Projects</span>
              </Link>
              {user && (
                <Link to="/new-post" className="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                  <MessageSquarePlus className="h-6 w-6" />
                  <span className="ml-2 font-medium">New Post</span>
                </Link>
              )}
              <Link to="/about" className="flex items-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                <User className="h-6 w-6" />
                <span className="ml-2 font-medium">About</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <LogOut className="h-6 w-6" />
                  <span className="ml-2 font-medium">Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">© 2024 Your Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}