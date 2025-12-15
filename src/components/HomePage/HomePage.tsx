import Header from './Header';
import Blog from './Blog';
import SocialLinks from './SocialLinks';
import Skills from './Skills';
import WorkAndProjects from './WorkAndProjects';
import RandomFacts from './RandomFacts';

function HomePage() {
    return (
        <div className="text-primaryWhite p-8">
            <div>
                <div className="mb-8">
                    <Header />
                </div>

                <div className="mb-8">
                    <RandomFacts />
                </div>

                <div className="mb-8">
                    <WorkAndProjects />
                </div>

                <div className="mb-8">
                    <Skills />
                </div>
                <div className="mb-12">
                    <Blog />
                </div>
                <div>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
