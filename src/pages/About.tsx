import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
          <img
          src="../../dist/assets/perfil.png"

          alt="Emiliano Vega"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold dark:text-white">Emiliano Vega</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Pentester - Full Stack Developer</p>
      </div>

      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300">
          I'm a passionate full-stack developer with expertise in modern web technologies.
          I love building scalable applications and learning new technologies.
        </p>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 dark:text-white">Frontend</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 dark:text-white">Backend</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 dark:text-white">Tools</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/EmiV3ga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github className="h-6 w-6 mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/emiliano1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="h-6 w-6 mr-2" />
            LinkedIn
          </a>
          <a
            href="mailto:emiliano.dimartino.vega@gmail.com"
            className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail className="h-6 w-6 mr-2" />
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
