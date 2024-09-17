import { FaJsSquare, FaReact, FaNode } from 'react-icons/fa';
import {
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql
} from 'react-icons/si';

function Skills() {
    const skills = [
        <FaJsSquare className="text-7xl text-yellow-500" />,
        <SiTypescript className="text-6xl text-blue-500" />,
        <FaReact className="text-7xl text-blue-400" />,
        <SiTailwindcss className="text-7xl text-teal-400" />,
        <FaNode className="text-7xl text-green-500" />,
        <SiExpress className="text-7xl text-gray-500" />,
        <SiMongodb className="text-7xl text-green-600" />,
        <SiPostgresql className="text-7xl text-blue-600" />
    ];
    return (
        <div>
            <h2 className="text-xl font-medium mb-4 text-primaryWhite">
                skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
