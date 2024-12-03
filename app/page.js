import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import WorkEx from "./components/WorkEx";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="bg-bgPeach">
      <AboutMe />
      <WorkEx />
      <Education />
      <Contact />
    </main>
  );
}
