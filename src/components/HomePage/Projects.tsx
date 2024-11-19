function Projects() {
    return (
        <div>
            <h2 className="text-xl font-medium mb-4">projects</h2>
            <div className="mb-4">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/aminbeigi/aminbeigi.com"
                    className="text-blue-500 hover:underline hover:text-accentPurple"
                >
                    <h3 className="font-medium">this website</h3>
                </a>
                <p className="text-textGrey">creator and maintainer</p>
                <p>
                    my personal website, professional profile and programming
                    blog
                </p>
            </div>
            <div className="mb-2">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://truth.aminbeigi.com"
                    className="text-blue-500 hover:underline hover:text-accentPurple"
                >
                    <h3 className="font-medium">truth table generator</h3>
                </a>

                <p className="text-textGrey">creator and maintainer</p>
                <p>
                    website that helps students visualise and validate truth
                    tables
                </p>
            </div>
            <div className="mb-4">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://oztechjobs.vercel.app"
                    className="text-blue-500 hover:underline hover:text-accentPurple"
                >
                    <h3 className="font-medium">job listing board</h3>
                </a>
                <p className="text-textGrey">creator and maintainer</p>
                <p>displays job listings and uses LLM to analyze queries</p>
            </div>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/aminbeigi"
                className="text-blue-500 hover:underline hover:text-accentPurple"
            >
                all projects →
            </a>
        </div>
    );
}

export default Projects;
