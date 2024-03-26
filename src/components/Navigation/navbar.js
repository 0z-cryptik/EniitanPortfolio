import { ModeToggle } from "../Peripherals/themeToggle";
import { useList } from "../../hooks/stateProvider";
import useSticky from "../../hooks/myhooks";
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
  const { active, setActive } = useList();

  const style = `lg:hidden flex ${
    dark ? "bg-black text-white" : "bg-white text-black"
  } border-b-[0.5px] pt-3 flex-row text-xs min-[300px]:text-base relative ${
    sticky ? `sticky top-0 z-20` : ""
  } text-center w-[100vw] mt-7`;

  const clickHandler = (arg) => {
    setActive(arg);
  };

  return (
    <nav
      ref={element}
      id="navbar"
      className={style}>
      <PhoneNavLink
        link={"homepage"}
        activeCat={"about"}
        category={"About Me"}
        clickHandler={() => clickHandler("about")}
      />

      <PhoneNavLink
        link={"tech-stack"}
        activeCat={"stack"}
        category={"Tech Stack"}
        clickHandler={() => clickHandler("stack")}
      />

      <PhoneNavLink
        link={"projects"}
        activeCat={"projects"}
        category={"Projects"}
        clickHandler={() => clickHandler("projects")}
      />
      <PhoneNavLink
        link={"plans"}
        activeCat={"plans"}
        category={"My Future"}
        clickHandler={() => clickHandler("plans")}
      />
    </nav>
  );
};
