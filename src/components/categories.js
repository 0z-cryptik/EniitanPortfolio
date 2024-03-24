import { About } from "./about";
import { Contact } from "./contact";
import { TechStack } from "./stack";
import { Projects } from "./projects";
import { Next } from "./next";

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
