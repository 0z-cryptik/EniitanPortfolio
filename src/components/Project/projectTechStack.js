import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAxios, SiNewyorktimes } from "react-icons/si";
import cssLogo from "../../images/pngwing.com (2).png";
import rapidAPIlogo from "../../images/rapidapi-icon.svg";

export const NBE_TechStack = () => {
  return (
    <>
      <h2 className="my-5 text-lg font-bold border-b">Tech Stack</h2>

      <div className="flex flex-row lg:font-semibold text-xs min-[300px]:text-sm lg:text-base">
        <div className="text-center mr-7 hidden lg:block">
          <FaReact
            color="rgb(96, 165, 250)"
            className="mx-auto mb-2"
            size={"3rem"}
          />
          React JS
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3 lg:hidden">
          <FaReact
            color="rgb(96, 165, 250)"
            className="mx-auto mb-2"
            size={"2rem"}
          />
          React JS
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3">
          <img
            className="mx-auto h-[2rem] lg:h-[3rem] w-[2rem] lg:w-[3rem] mb-2"
            src={cssLogo}
          />
          CSS
        </div>

        <div className="text-center mr-7 hidden lg:block">
          <SiTailwindcss
            className="mx-auto mb-2"
            size={"3rem"}
            color="rgb(96, 165, 250)"
          />
          Tailwind CSS
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3 lg:hidden">
          <SiTailwindcss
            className="mx-auto mb-2"
            size={"2rem"}
            color="rgb(96, 165, 250)"
          />
          Tailwind CSS
        </div>

        <div className="text-center mr-7 hidden lg:block">
          <SiAxios
            className="mx-auto mb-2"
            size={"3rem"}
          />
          Axios
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3 lg:hidden">
          <SiAxios
            className="mx-auto mb-2"
            size={"2rem"}
          />
          Axios
        </div>

        <div className="text-center hidden lg:block">
          <SiNewyorktimes
            className="mb-2 mx-auto"
            size={"3rem"}
          />
          NewYorkTimes API
        </div>

        <div className="text-center lg:hidden">
          <SiNewyorktimes
            className="mb-2 mx-auto"
            size={"2rem"}
          />
          NewYorkTimes API
        </div>
      </div>
    </>
  );
};

export const WBE_TechStack = () => {
  return (
    <>
      <h2 className="my-5 text-lg font-bold border-b">Tech Stack</h2>

      <div className="flex flex-row lg:font-semibold text-xs min-[300px]:text-sm lg:text-base">
        <div className="text-center mr-7 hidden lg:block">
          <FaReact
            color="rgb(96, 165, 250)"
            className="mx-auto mb-2"
            size={"3rem"}
          />
          React JS
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3 lg:hidden">
          <FaReact
            color="rgb(96, 165, 250)"
            className="mx-auto mb-2"
            size={"2rem"}
          />
          React JS
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3">
          <img
            className="mx-auto h-[2rem] lg:h-[3rem] w-[2rem] lg:w-[3rem] mb-2"
            src={cssLogo}
          />
          CSS
        </div>

        <div className="text-center mr-7 hidden lg:block">
          <SiTailwindcss
            className="mx-auto mb-2"
            size={"3rem"}
            color="rgb(96, 165, 250)"
          />
          Tailwind CSS
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3 lg:hidden">
          <SiTailwindcss
            className="mx-auto mb-2"
            size={"2rem"}
            color="rgb(96, 165, 250)"
          />
          Tailwind CSS
        </div>

        <div className="text-center mr-7 hidden lg:block">
          <SiAxios
            className="mx-auto mb-2"
            size={"3rem"}
          />
          Axios
        </div>

        <div className="text-center min-[300px]:mr-7 mr-3 lg:hidden">
          <SiAxios
            className="mx-auto mb-2"
            size={"2rem"}
          />
          Axios
        </div>

        <div className="text-center">
          <img
            className="mx-auto mb-2 lg:w-[3rem] w-[2rem]"
            src={rapidAPIlogo}
          />
          Rapid API
        </div>
      </div>
    </>
  );
};
