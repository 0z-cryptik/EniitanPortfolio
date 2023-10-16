import { SiTailwindcss, SiAxios, SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoNpm } from "react-icons/io";
import htmlLogo from "../images/icons8-html-logo-480.png";
import cssLogo from "../images/pngwing.com (2).png";
import jsLogo from "../images/javascript-39404.png";
import jqLogo from "../images/jquery.png";
import gitLogo from "../images/pngwing.com.png";
import pythonLogo from "../images/python.png";

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="lg:mt-[5rem] lg:mx-[3rem] min-[100px]:max-md:px-2 md:max-lg:h-[58vh]">
      <h1 className="text-3xl font-semibold border-b hidden lg:block">
        My Tech Stack
      </h1>

      <h2 className="lg:my-6 my-4 w-fit mx-auto lg:text-lg font-semibold">
        Languages and frameworks/libraries
      </h2>

      <section className="grid grid-cols-4 min-[100px]:max-lg:gap-y-4 lg:grid-cols-7 text-xs min-[300px]:text-sm font-bold">
        <div className="text-center">
          <img
            className="lg:w-[5rem] w-[3.5rem] lg:h-[5rem] h-[3.5rem] mx-auto py-[0.2rem] mb-4"
            src={htmlLogo}
          />
          HTML
        </div>

        <div className="text-center">
          <img
            className="mx-auto lg:w-[5rem] w-[3.5rem] mb-4"
            src={cssLogo}
          />
          CSS
        </div>

        <div className="text-center">
          <img
            className="mx-auto lg:w-[5rem] w-[3.5rem] mb-4"
            src={jsLogo}
          />
          JavaScript
        </div>

        <div className="text-center hidden lg:block">
          <span className="text-blue-400">
            <FaReact
              className="mx-auto mb-4"
              size={"5rem"}
            />
          </span>
          React JS
        </div>

        <div className="text-center lg:hidden">
          <FaReact
            color="rgb(96, 165, 250)"
            className="mx-auto mb-4"
            size={"3.5rem"}
          />
          React JS
        </div>

        <div className="text-center hidden lg:block">
          <span className="text-blue-400">
            <SiTailwindcss
              className="mx-auto mb-4"
              size={"5rem"}
            />
          </span>
          Tailwind CSS
        </div>

        <div className="text-center lg:hidden">
          <SiTailwindcss
            color="rgb(96, 165, 250)"
            className="mx-auto mb-4"
            size={"3.5rem"}
          />
          Tailwind CSS
        </div>

        <div className="text-center">
          <img
            className="mx-auto lg:w-[5rem] w-[3.5rem] mb-4"
            src={jqLogo}
          />
          JQuery
        </div>

        <div className="text-center">
          <img
            className="mx-auto lg:w-[5rem] w-[3.5rem] mb-4"
            src={gitLogo}
          />
          Git
        </div>

        <div className="text-center mt-7 hidden lg:block">
          <SiAxios
            className="mx-auto mb-4"
            size={"5rem"}
          />
          Axios
        </div>

        <div className="text-center lg:mt-7 lg:hidden">
          <SiAxios
            className="mx-auto mb-4"
            size={"3.5rem"}
          />
          Axios
        </div>

        <div className="text-center lg:mt-7">
          <img
            className="mx-auto lg:w-[5rem] w-[3.5rem] mb-4"
            src={pythonLogo}
          />
          Python
        </div>
      </section>

      <h2 className="mt-9 mb-6 w-fit mx-auto lg:text-lg font-semibold">
        Dev Tools
      </h2>

      <section className="grid grid-cols-4 lg:grid-cols-7 font-bold text-xs min-[300px]:text-sm">
        <div className="text-center mt-7 hidden lg:block">
          <AiFillGithub
            className="mx-auto mb-4"
            size={"5rem"}
          />
          Github
        </div>

        <div className="text-center lg:hidden">
          <AiFillGithub
            className="mx-auto mb-4"
            size={"3.5rem"}
          />
          Github
        </div>

        <div className="text-center mt-7 hidden lg:block">
          <SiVercel
            className="mx-auto mb-4"
            size={"5rem"}
          />
          Vercel
        </div>

        <div className="text-center lg:hidden">
          <SiVercel
            className="mx-auto mb-4"
            size={"3.5rem"}
          />
          Vercel
        </div>

        <div className="text-center mt-7 hidden lg:block">
          <IoLogoNpm
            className="mx-auto mb-4"
            size={"5rem"}
            color="red"
          />
          Node Package Manager
        </div>

        <div className="text-center lg:hidden">
          <IoLogoNpm
            className="mx-auto mb-4"
            size={"3.5rem"}
            color="red"
          />
          Node Package Manager
        </div>
      </section>
    </section>
  );
};

export const PhoneStack = () => (
  <div className="lg:hidden">
    <TechStack />
  </div>
);
