import { DevTools } from "./devTools";
import { LanguagesAndFrameworks } from "./languages&Frameworks";

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="lg:mt-[5rem] lg:mx-[3rem] min-[100px]:max-md:px-2 md:max-lg:h-[58vh]">
      <h1 className="text-3xl font-semibold border-b hidden lg:block">
        My Tech Stack
      </h1>

      <LanguagesAndFrameworks />

      <DevTools />
    </section>
  );
};

export const PhoneStack = () => (
  <div className="lg:hidden">
    <TechStack />
  </div>
);
