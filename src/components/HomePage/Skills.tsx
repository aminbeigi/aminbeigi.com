import { FaPython, FaAws } from 'react-icons/fa';
import {
  SiLinux,
  SiGnubash,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
} from 'react-icons/si';
import { IconType } from 'react-icons';

function Skills() {
  const skills: { name: string; icon: IconType }[] = [
    { name: 'Python', icon: FaPython },
    { name: 'Linux', icon: SiLinux },
    { name: 'Bash', icon: SiGnubash },
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: SiDocker },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'Terraform', icon: SiTerraform },
    { name: 'GitHub Actions', icon: SiGithubactions },
  ];

  return (
    <section>
      <h2 className="text-xl font-medium mb-4 text-primary-white">skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5"
              aria-label={skill.name}
            >
              <Icon className="text-5xl text-gray-400" />
              <span className="text-xs text-text-grey">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
