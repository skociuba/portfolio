import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Nav from './components/Nav';
import styles from './styles/style';
const Home: React.FC = () => (
  <>
    <div className="w-full overflow-hidden">
      <div className={styles.marginY}>
        <Nav />
      </div>
      <Hero />
      <Summary />
      <Skills />
      <Experience />
    </div>
  </>
);

export default Home;
