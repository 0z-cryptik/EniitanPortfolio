import { useList } from "../../hooks/stateProvider";
import { AiFillGithub } from "react-icons/ai";
import { SiVercel } from "react-icons/si";
import { IoLogoNpm } from "react-icons/io";

export const DevTools = () => {
  const { dark } = useList();

  return (
    <>
      <h2
        className={`mt-9 mb-6 w-[80%] lg:w-fit text-center border-dotted max-lg:border-b ${
          dark ? "border-blue-700" : ""
        } mx-auto lg:text-lg font-semibold`}>
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
    </>
  );
};
