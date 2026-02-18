import { useEffect, useState } from "react";

import ParallaxLayer from "./components/ParallaxLayer";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Metrics from "./sections/Metrics";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Socials from "./sections/Socials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import AIBackground from "./components/AIBackground";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ParallaxLayer speed={0.01} />
      <ParallaxLayer speed={0.02} />
      <CursorGlow />
      <AIBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Metrics />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Socials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
