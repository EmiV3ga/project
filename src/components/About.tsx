import Background3D from './Background3D';

const skills = {
  Frontend: ["React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL"],
  Tools: ["Git", "Docker", "AWS"]
};

export default function About() {
  return (
    <div className="relative min-h-screen pt-20 pb-12 px-4">
      <Background3D />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral mb-4">About Me</h1>
          <p className="text-xl text-accent">Pentester - Full Stack Developer</p>
        </div>
        
        <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-neutral mb-4">About Me</h2>
          <p className="text-accent">
            I'm a passionate full-stack developer with expertise in modern web technologies. I love building scalable applications
            and learning new technologies.
          </p>
        </div>

        <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-neutral mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-neutral mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, index) => (
                    <li key={index} className="text-accent">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}