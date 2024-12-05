import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import WorkEx from "./components/WorkEx";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Publications from "./components/Research/Publications";
import Quote from "./components/Quote";
import PHD from "./components/Research/PHD";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-bgPeach">
      <Navbar />
      <Hero />
      <AboutMe />
      <PHD />
      <Publications />
      <WorkEx />
      <Quote />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
