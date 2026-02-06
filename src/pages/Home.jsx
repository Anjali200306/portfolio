import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experience";
import DownloadCV from "../sections/DownloadCV";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences/>
      <DownloadCV/>
      <Contact />
    </>
  );
};

export default Home;
