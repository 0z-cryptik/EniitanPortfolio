import { About } from '../Details/about';
import { Contact } from "../Details/contact";
import { TechStack } from "../Tech Stack/stack";
import { Projects } from "../Project/projects";
import { Next } from "../Details/next";

export const Categories = () => {
  return (
    <>
      <section className="lg:flex flex-row hidden">
        <About />
        <Contact />
      </section>

      <div className="hidden lg:block">
        <TechStack />

        <Projects />

        <Next />
      </div>
    </>
  );
};
