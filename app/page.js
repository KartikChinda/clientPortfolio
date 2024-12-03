import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import WorkEx from "./components/WorkEx";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Publications from "./components/Research/Publications";

export default function Home() {
  return (
    <main className="bg-bgPeach">
      <AboutMe />
      <Publications />
      <WorkEx />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
