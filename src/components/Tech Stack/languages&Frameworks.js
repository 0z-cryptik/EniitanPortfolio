import { useList } from "../../hooks/stateProvider";
import { SiTailwindcss, SiAxios, SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import htmlLogo from "../../images/icons8-html-logo-480.png";
import cssLogo from "../../images/pngwing.com (2).png";
import jsLogo from "../../images/javascript-39404.png";
import gitLogo from "../../images/pngwing.com.png";
import pythonLogo from "../../images/python.png";

export const LanguagesAndFrameworks = () => {
  const { dark } = useList();

  return (
    <>
      <h2
        className={`lg:my-6 my-4 w-[80%] lg:w-fit text-center border-dotted max-lg:border-b ${
          dark ? "border-blue-700" : ""
        } mx-auto lg:text-lg font-semibold`}>
        Languages and frameworks/libraries
      </h2>

      <section className="grid grid-cols-4 min-[100px]:max-lg:gap-y-4 lg:gap-y-[1.75rem] lg:grid-cols-7 text-xs min-[300px]:text-sm font-bold">
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
          <SiTailwindcss
            className="mx-auto mb-4"
            size={"5rem"}
            color="rgb(96, 165, 250)"
          />
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

        <div className="text-center hidden lg:block">
          <IoLogoSass
            className="mx-auto mb-4"
            size={"5rem"}
            color="#DC2A70"
          />
          Sass
        </div>

        <div className="text-center lg:hidden">
          <IoLogoSass
            color="#DC2A70"
            className="mx-auto mb-4"
            size={"3.5rem"}
          />
          Sass
        </div>

        <div className="text-center hidden lg:block">
          <SiJquery
            color="rgb(42, 134, 220)"
            className="mx-auto mb-4"
            size={"5rem"}
          />
          JQuery
        </div>

        <div className="text-center lg:hidden">
          <SiJquery
            color="rgb(42, 134, 220)"
            className="mx-auto mb-4"
            size={"3.5rem"}
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

        <div className="text-center hidden lg:block">
          <SiAxios
            className="mx-auto mb-4"
            size={"5rem"}
          />
          Axios
        </div>

        <div className="text-center lg:hidden">
          <SiAxios
            className="mx-auto mb-4"
            size={"3.5rem"}
          />
          Axios
        </div>

        <div className="text-center">
          <img
            className="mx-auto lg:w-[5rem] w-[3.5rem] mb-4"
            src={pythonLogo}
          />
          Python
        </div>
      </section>
    </>
  );
};
