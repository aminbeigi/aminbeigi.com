import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialLinks() {
    const links = [
        {
            href: 'mailto:me@aminbeigi.com',
            label: 'Mail',
            icon: <FaEnvelope />
        },
        {
            href: 'https://www.github.com/aminbeigi',
            label: 'Github',
            icon: <FaGithub />
        },
        {
            href: 'https://www.linkedin.com/in/amin-beigi',
            label: 'LinkedIn',
            icon: <FaLinkedin />
        }
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-primaryWhite">
                links
            </h2>

            <div className="flex justify-center space-x-8">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-500 hover:text-accentPurple"
                    >
                        <span className="text-2xl">{link.icon}</span>
                        <span className="font-medium">{link.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SocialLinks;
