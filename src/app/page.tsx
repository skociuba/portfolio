import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Nav from './components/Nav';
const Home: React.FC = () => (
  <>
    <div className="w-full overflow-hidden">
      <Nav />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
    </div>
  </>
);

export default Home;
