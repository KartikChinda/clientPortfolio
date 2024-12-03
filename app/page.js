import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import WorkEx from "./components/WorkEx";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="bg-bgPeach">
      <AboutMe />
      <WorkEx />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
