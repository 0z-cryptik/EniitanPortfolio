import { NewsByEniitan } from "./newsByEniitan";
import { WeatherByEniitan } from "./weatherByEniitan";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="lg:mt-[5rem] mt-[1rem] lg:mx-[3rem] mx-2 md:max-lg:mx-4 overflow-x-hidden">
      <h1 className="text-3xl font-semibold border-b mb-4 hidden lg:block">
        Projects
      </h1>

      <p className="lg:text-xl w-fit lg:mx-auto">
        Here are some notable projects I've built
      </p>

      <NewsByEniitan />

      <WeatherByEniitan />
    </section>
  );
};

export const PhoneProjects = () => (
  <div className="lg:hidden">
    <Projects />
  </div>
);
