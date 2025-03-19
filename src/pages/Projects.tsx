import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio',
    description: 'A web application that demonstrates my backend development skills using Node.js, Express, and MongoDB. Includes user authentication and CRUD operations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/EmiV3ga',
    liveUrl: 'https://emilianodev.netlify.app/',
  },
  {
    title: 'Project 2',
    description: 'A web application that demonstrates my backend development skills using Node.js, Express, and MongoDB. Includes user authentication and CRUD operations.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/EmiV3ga',
    liveUrl: '#',
  },
];

export function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="h-5 w-5 mr-1" />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}