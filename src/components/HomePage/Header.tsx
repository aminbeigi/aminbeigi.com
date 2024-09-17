import {
    FiMapPin,
    FiBriefcase,
    FiCode,
    FiFeather,
    FiZap,
    FiBookOpen
} from 'react-icons/fi';

import { PiPersonSimpleHike } from 'react-icons/pi';

function RandomFacts() {
    const facts = [
        {
            icon: <FiFeather className="text-accentPurple" />,
            text: "I'm a minimalist"
        },
        {
            icon: <FiZap className="text-accentPurple" />,
            text: 'my favourite animal is the goose'
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
            icon: <FiCode className="text-accentPurple" />,
            text: 'javascript is my favourite and least favourite programming language'
        }
    ];

    return (
        <div>
            <h2 className="text-xl font-medium mb-2">random facts about me</h2>
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

function Header() {
    return (
        <div className="mb-8">
            <h1 className="text-3xl pb-2">amin beigi</h1>
            <div className="flex flex-col space-y-1 mb-4">
                <div className="flex items-center space-x-2 text-textGrey">
                    <FiMapPin className="text-accentPurple" />
                    <span>sydney, australia</span>
                </div>
                <div className="flex items-center space-x-2 text-textGrey">
                    <FiBriefcase className="text-accentPurple" />
                    <span>hire me :)</span>
                </div>
            </div>

            <p className="text-primaryWhite mb-8">
                A{' '}
                <span className="text-accentPurple font-medium">
                    fullstack developer
                </span>{' '}
                with an interest in building high-performance, scalable systems
                with intuitive and user-friendly frontend interfaces.
            </p>
            <RandomFacts />
        </div>
    );
}

export default Header;
