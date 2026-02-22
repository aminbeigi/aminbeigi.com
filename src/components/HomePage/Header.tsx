import { FiMapPin, FiBriefcase } from 'react-icons/fi';

function Header() {
  return (
    <header>
      <h1 className="text-3xl pb-2">amin beigi</h1>
      <div className="flex flex-col space-y-1 mb-4">
        <div className="flex items-center space-x-2 text-text-grey">
          <FiMapPin className="text-accent-purple" aria-label="Location" />
          <span>sydney, australia</span>
        </div>
        <div className="flex items-center space-x-2 text-text-grey">
          <FiBriefcase
            className="text-accent-purple"
            aria-label="Current workplace"
          />
          <span>insurance australia group (iag)</span>
        </div>
      </div>

      <p className="text-primary-white">
        a{' '}
        <span className="text-accent-purple font-medium">
          software engineer
        </span>{' '}
        with a focus on building and managing scalable and reliable systems.
        Experienced in applying software engineering principles to
        infrastructure. I have a strong interest in networking, linux and
        system-level behaviour in production environments.
      </p>
    </header>
  );
}

export default Header;
