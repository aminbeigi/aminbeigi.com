import { FaJsSquare, FaReact, FaNode } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiNextdotjs,
} from 'react-icons/si';

function Skills() {
  const skills = [
    {
      name: 'JavaScript',
      icon: <FaJsSquare className="text-7xl text-yellow-500" />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-6xl text-blue-500" />,
    },
    { name: 'React', icon: <FaReact className="text-7xl text-blue-400" /> },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-7xl text-teal-400" />,
    },
    { name: 'Node.js', icon: <FaNode className="text-7xl text-green-500" /> },
    {
      name: 'Express.js',
      icon: <SiExpress className="text-7xl text-gray-500" />,
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="text-7xl text-blue-600" />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="text-7xl text-green-600" />,
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-medium mb-4 text-primaryWhite">skills</h2>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex justify-center items-center"
            title={skill.name}
            aria-label={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
