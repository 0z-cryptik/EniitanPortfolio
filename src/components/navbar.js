import { ModeToggle } from "./themeToggle";
import { useList } from "./stateProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSticky from "./myhooks";
import CV from "../files/Enitan-Akinfenwa-dev-CV.pdf";

export const NavBar = () => {
  const { dark, setContactClick } = useList();

  return (
    <nav
      id="navbar"
      className={`hidden justify-center py-3 lg:flex flex-row fixed w-full z-10 ${
        dark ? "bg-[#140F2D] text-white" : "bg-[#bde0fe] text-black"
      }`}>
      <a
        href="https://0zcryptik.hashnode.dev/"
        className={`mr-[2rem] ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        }`}>
        Blog
      </a>
      <a
        href="#projects"
        className={`mr-[2rem] ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        }`}>
        Projects
      </a>
      <a
        href="#tech-stack"
        className={`mr-[2rem] ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        }`}>
        Stack
      </a>
      <a
        href={CV}
        download={"Enitan Akinfenwa"}
        className={`mr-[2rem] ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        }`}>
        Resume
      </a>
      <a
        href="#top"
        onClick={() => setContactClick(true)}
        className={`${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        }`}>
        Contact
      </a>

      <ModeToggle />
    </nav>
  );
};

export const PhoneNavBar = () => {
  const { dark } = useList();

  const { sticky, element } = useSticky();

  const [active, setActive] = useState("about");

  return (
    <nav
      ref={element}
      id="navbar"
      className={`lg:hidden flex ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } border-b-[0.5px] pt-3 flex-row text-xs min-[300px]:text-base relative ${
        sticky ? `sticky top-0 z-20` : ""
      } text-center w-[100vw] mt-7`}>
      <Link
        to={"homepage"}
        onClick={() => setActive("about")}
        className={`w-1/4 pb-2 font-bold ${
          active === "about" ? "border-b-4 border-b-blue-700" : ""
        }`}>
        About Me
      </Link>

      <Link
        to={"tech-stack"}
        onClick={() => setActive("stack")}
        className={`w-1/4 pb-2 font-bold ${
          active === "stack" ? "border-b-4 border-b-blue-700" : ""
        }`}>
        Tech Stack
      </Link>

      <Link
        to={"projects"}
        onClick={() => setActive("projects")}
        className={`w-1/4 pb-2 font-bold ${
          active === "projects" ? "border-b-4 border-b-blue-700" : ""
        }`}>
        Projects
      </Link>

      <Link
        to={"plans"}
        onClick={() => setActive("plans")}
        className={`w-1/4 pb-2 font-bold ${
          active === "plans" ? "border-b-4 border-b-blue-700" : ""
        }`}>
        My Future
      </Link>
    </nav>
  );
};
