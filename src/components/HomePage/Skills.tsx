import { FaPython, FaAws, FaGithub } from 'react-icons/fa';
import {
  SiLinux,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiDatadog,
} from 'react-icons/si';

const ICON_COLOR_CLASS = 'text-gray-400';

function Skills() {
  const skills = [
    {
      name: 'Python',
      icon: <FaPython className={`text-7xl ${ICON_COLOR_CLASS}`} />,
    },
    {
      name: 'Linux',
      icon: <SiLinux className={`text-7xl ${ICON_COLOR_CLASS}`} />,
    },
    {
      name: 'GitHub',
      icon: <FaGithub className={`text-7xl ${ICON_COLOR_CLASS}`} />,
    },
    {
      name: 'AWS',
      icon: <FaAws className={`text-7xl ${ICON_COLOR_CLASS}`} />,
    },
    {
      name: 'Docker',
      icon: <SiDocker className={`text-7xl ${ICON_COLOR_CLASS}`} />,
    },
    {
      name: 'Kubernetes',
      icon: <SiKubernetes className={`text-7xl ${ICON_COLOR_CLASS}`} />,
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className={`text-7xl ${ICON_COLOR_CLASS}`} />,
    },
    {
      name: 'Datadog',
      icon: <SiDatadog className={`text-7xl ${ICON_COLOR_CLASS}`} />,
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
