import { FaPython, FaAws, FaGithub } from 'react-icons/fa';
import {
  SiLinux,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiDatadog,
} from 'react-icons/si';

function Skills() {
  const skills = [
    {
      name: 'Python',
      icon: <FaPython className="text-7xl text-yellow-500" />,
    },
    {
      name: 'Linux',
      icon: <SiLinux className="text-7xl text-gray-300" />,
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-7xl text-gray-300" />,
    },
    {
      name: 'AWS',
      icon: <FaAws className="text-7xl text-orange-500" />,
    },
    {
      name: 'Docker',
      icon: <SiDocker className="text-7xl text-blue-500" />,
    },
    {
      name: 'Kubernetes',
      icon: <SiKubernetes className="text-7xl text-blue-600" />,
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="text-7xl text-blue-600" />,
    },
    {
      name: 'Datadog',
      icon: <SiDatadog className="text-7xl text-purple-600" />,
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-medium mb-4 text-primary-white">skills</h2>
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
