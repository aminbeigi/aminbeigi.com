import Header from './Header';
import Blog from './Blog';
import SocialLinks from './SocialLinks';
import Skills from './Skills';
import WorkAndProjects from './WorkAndProjects';
import RandomFacts from './RandomFacts';

function HomePage() {
  return (
    <main className="text-primaryWhite p-8 space-y-8">
      <Header />
      <RandomFacts />
      <WorkAndProjects />
      <Skills />
      <section className="pt-4">
        <Blog />
      </section>
      <SocialLinks />
    </main>
  );
}

export default HomePage;
