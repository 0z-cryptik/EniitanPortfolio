import { ModeToggle } from "./themeToggle";
import { useList } from "../hooks/stateProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSticky from "../hooks/myhooks";
import { NavLink, PhoneNavLink } from "./navBarLinks";

export const NavBar = () => {
  const { dark } = useList();

  return (
    <nav
      id="navbar"
      className={`hidden justify-center py-3 lg:flex flex-row fixed w-full z-10 ${
        dark ? "bg-[#140F2D] text-white" : "bg-[#bde0fe] text-black"
      }`}>
      <NavLink
        category={"Blog"}
        link={'"https://0zcryptik.hashnode.dev/"'}
      />
      <NavLink
        category={"Projects"}
        link={"#projects"}
      />
      <NavLink
        category={"Stack"}
        link={"#tech-stack"}
      />
      <NavLink category={"Resume"} />
      <NavLink category={"Contact"} />
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

      <PhoneNavLink link={'homepage'} activeCat={'about'} category={'About Me'} />

      <PhoneNavLink link={'tech-stack'} activeCat={'stack'} category={'Tech Stack'} />

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
