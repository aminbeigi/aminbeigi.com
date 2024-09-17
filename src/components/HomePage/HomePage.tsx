import Header from './Header';
import Projects from './Projects';
import Work from './Work';
import Blog from './Blog';
import SocialLinks from './SocialLinks';
import Skills from './Skills';

function HomePage() {
    return (
        <div className="text-primaryWhite p-8">
            <div>
                <div className="mb-8">
                    <Header />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <Work />
                    <Projects />
                </div>

                <div className="mb-8">
                    <Skills />
                </div>
                <div className="mb-8">
                    <Blog />
                </div>
                <div className="flex space-x-4">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
