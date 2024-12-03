import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact/Contact";
import WorkEx from "./components/WorkEx";

export default function Home() {
  return (
    <main className="bg-bgPeach">
      <AboutMe />
      <WorkEx />
      <Contact />
    </main>
  );
}
