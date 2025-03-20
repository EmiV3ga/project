import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Portfolio",
    description: "A web application that demonstrates my backend development skills using Node.js, Express, and MongoDB. Includes user authentication and CRUD operations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com"
  },
  {
    title: "Project 2",
    description: "A web application that demonstrates my backend development skills using Node.js, Express, and MongoDB. Includes user authentication and CRUD operations.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    demo: "https://your-project2.com"
  },
  {
    title: "Project 3",
    description: "A web application that demonstrates my backend development skills using Node.js, Express, and MongoDB. Includes user authentication and CRUD operations.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    demo: "https://your-project2.com"
  },
  {
    title: "Project 4",
    description: "A web application that demonstrates my backend development skills using Node.js, Express, and MongoDB. Includes user authentication and CRUD operations.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    demo: "https://your-project2.com"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral mb-2">{project.title}</h3>
                <p className="text-accent mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary rounded-full text-sm text-neutral">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-neutral hover:text-highlight">
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                  <a href={project.demo} className="flex items-center text-neutral hover:text-highlight">
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}