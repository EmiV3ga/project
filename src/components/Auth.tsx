import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Lock, User } from 'lucide-react';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (isSignUp) {
        await supabase.auth.signUp({ email, password });
      } else {
        await supabase.auth.signInWithPassword({ email, password });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-secondary p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold text-neutral mb-6 text-center">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>
        <form onSubmit={handleAuth} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-accent" size={20} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-primary text-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-accent" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-primary text-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-highlight text-primary py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center text-accent">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-highlight hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}