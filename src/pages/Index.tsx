import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Gallery from "@/components/portfolio/Gallery";
import Services from "@/components/portfolio/Services";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Services />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
