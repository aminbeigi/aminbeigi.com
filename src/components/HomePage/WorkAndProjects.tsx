function WorkAndProjects() {
    const workExperiences = [
        {
            title: 'consulting',
            role: 'fullstack developer',
            time: '2024 - present',
            description:
                'focusing on projects that involve automating business processes'
        },
        {
            title: 'atlassian',
            role: 'software engineer',
            time: '2023 - 2024',
            description:
                'developed collaborative editing functionality in confluence editor'
        },
        {
            title: 'atlassian',
            role: 'intern',
            time: '2021 - 2022',
            description: 'built tooling to improve performance in jira backend'
        }
    ];

    const projects = [
        {
            title: 'this website',
            url: 'https://github.com/aminbeigi/aminbeigi.com',
            role: 'creator and maintainer',
            description:
                'my personal website, professional profile and programming blog'
        },
        {
            title: 'truth table generator',
            url: 'https://truth.aminbeigi.com',
            role: 'creator and maintainer',
            description:
                'website that helps students visualize and validate truth tables'
        },
        {
            title: 'job listing board',
            url: 'https://oztechjobs.vercel.app',
            role: 'creator and maintainer',
            description: 'displays job listings and uses LLM to analyze queries'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
                <h2 className="text-xl font-medium mb-4">work</h2>
                {workExperiences.map((work, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-medium text-accentPurple">
                            {work.title}
                        </h3>
                        <p className="text-textGrey italic mb-0.5">
                            {work.role} ({work.time})
                        </p>
                        <p className="leading-relaxed">{work.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="text-xl font-medium mb-4">projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="mb-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.url}
                            className="text-blue-500 hover:underline hover:text-accentPurple"
                        >
                            <h3 className="font-medium">{project.title}</h3>
                        </a>
                        <p className="text-textGrey italic mb-0.5">
                            {project.role}
                        </p>
                        <p className="leading-relaxed">{project.description}</p>
                    </div>
                ))}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/aminbeigi"
                    className="text-blue-500 hover:underline hover:text-accentPurple"
                >
                    all projects →
                </a>
            </div>
        </div>
    );
}

export default WorkAndProjects;
