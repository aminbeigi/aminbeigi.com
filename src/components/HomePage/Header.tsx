import { FiMapPin, FiBriefcase } from 'react-icons/fi';

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
                    <span>insurance australia group (iag)</span>
                </div>
            </div>

            <p className="text-primaryWhite mb-8">
                A passionate{' '}
                <span className="text-accentPurple font-medium">
                    fullstack developer
                </span>{' '}
                with an interest in building high-performance, scalable systems
                with sleek, intuitive and user-friendly frontend interfaces. I
                work with modern technologies and especially enjoy building
                things with JavaScript.
            </p>
        </div>
    );
}

export default Header;
