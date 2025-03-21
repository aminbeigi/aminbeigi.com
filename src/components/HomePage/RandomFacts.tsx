import { FiFeather, FiBookOpen } from 'react-icons/fi';

import { GiChocolateBar } from 'react-icons/gi';

import { FaMotorcycle } from 'react-icons/fa';

import { PiPersonSimpleHike } from 'react-icons/pi';

function RandomFacts() {
    const facts = [
        {
            icon: <FiFeather className="text-accentPurple" />,
            text: 'im a minimalist'
        },
        {
            icon: <GiChocolateBar className="text-accentPurple" />,
            text: 'I fancy dark chocolate'
        },

        {
            icon: <FiBookOpen className="text-accentPurple" />,
            text: 'I enjoy reading books, especially philosophy'
        },
        {
            icon: <PiPersonSimpleHike className="text-accentPurple" />,
            text: 'I like outdoors hiking'
        },
        {
            icon: <FaMotorcycle className="text-accentPurple" />,
            text: 'I ride motorcycles'
        }
    ];

    return (
        <div>
            <h2 className="text-xl font-medium mb-2">random facts</h2>
            <ul className="space-y-2">
                {facts.map((fact, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        {fact.icon}
                        <span>{fact.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RandomFacts;
