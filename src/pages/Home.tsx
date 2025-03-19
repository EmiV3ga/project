import React from 'react';
import { format } from 'date-fns';
import { MessageSquare, Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  likes: number;
}

export function Home() {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
  }

  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl">Exploring ideas, sharing experiences, and showcasing projects</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold dark:text-white">Recent Posts</h2>
        {posts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  {post.likes}
                </span>
                <span className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  0
                </span>
              </div>
              <time>{format(new Date(post.created_at), 'MMM d, yyyy')}</time>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}