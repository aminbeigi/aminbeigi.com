import {
    FiMapPin,
    FiBriefcase,
    FiCode,
    FiFeather,
    FiGlobe,
    FiZap
} from 'react-icons/fi';

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

            <p className="mt-4 text-primaryWhite">
                I'm a passionate fullstack developer with an interest in
                building scalable, performant systems while also designing
                intuitive and visually appealing frontends. if I'm not coding
                I'm probably reading, outdoors hiking, running, or lifting
                weights.
            </p>
            <div>
                <h2 className="text-xl font-semibold mb-4 mt-8">
                    random facts about me
                </h2>
                <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                        <FiFeather className="text-accentPurple" />
                        <span>I'm a minimalist</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FiZap className="text-accentPurple" />
                        <span>
                            my favourite animal is the goose (been obsessed ever
                            since I saw them flying in a V-formation)
                        </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FiGlobe className="text-accentPurple" />
                        <span>
                            I speak 2.5 languages (working on the third one)
                        </span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <FiCode className="text-accentPurple" />
                        <span>
                            javascript is my favourite and least favourite
                            programming language
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
