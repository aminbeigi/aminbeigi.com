import { FiMapPin, FiBriefcase } from 'react-icons/fi';

function Header() {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold pb-4">amin beigi</h1>
            <div className="flex flex-col space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-textGrey">
                    <FiMapPin className="text-accentPurple" />
                    <span className="text-lg">sydney, australia</span>
                </div>
                <div className="flex items-center space-x-2 text-textGrey">
                    <FiBriefcase className="text-accentPurple" />
                    <span className="text-lg">hire me :)</span>
                </div>
            </div>

            <p className="mt-4 text-primaryWhite">
                I'm a passionate fullstack developer with an interest in 
                building scalable, performant systems while also designing intuitive
                and visually appealing frontends. if I'm not coding I'm probably
                reading, outdoors hiking, running, or lifting weights.
            </p>

            <p className="mt-4 text-primaryWhite font-semibold">
                random facts about me:
            </p>

            <ul className="list-disc ml-6 text-primaryWhite">
                <li>I'm a minimalist</li>
                <li>my favourite animal is the goose</li>
                <li>I speak 2.5 languages (working on the third one)</li>
                <li>javascript is my favourite programming langauge</li>
                <li>javascript is my least-favourite programming langauge</li>
            </ul>
        </div>
    );
}

export default Header;
