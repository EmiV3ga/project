import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: "Getting Started with Web Security",
    excerpt: "Learn the basics of web security and how to protect your applications from common vulnerabilities.",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800"
  },
  {
    title: "Modern Frontend Development",
    excerpt: "Explore the latest trends and best practices in frontend development with React and TypeScript.",
    date: "2024-03-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800"
  }
];

export default function Posts() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral mb-2">{post.title}</h3>
                <p className="text-accent mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-accent">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}