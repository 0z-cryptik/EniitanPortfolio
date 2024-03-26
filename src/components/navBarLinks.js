import { useList } from "../hooks/stateProvider";
import CV from "../files/Enitan-Akinfenwa-dev-CV.pdf";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavLink = ({ category, link }) => {
  const { dark, setContactClick } = useList();

  if (category === "Contact") {
    return (
      <a
        href="#top"
        onClick={() => setContactClick(true)}
        className={`${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        }`}>
        Contact
      </a>
    );
  }

  if (category === "Resume") {
    return (
      <a
        href={CV}
        download={"Enitan Akinfenwa"}
        className={`mr-[2rem] ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        }`}>
        Resume
      </a>
    );
  }

  return (
    <a
      href={link}
      className={`mr-[2rem] ${
        dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
      }`}>
      {category}
    </a>
  );
};

export const PhoneNavLink = ({
  link,
  activeCat,
  category,
  clickHandler
}) => {
  const { active } = useList();

  return (
    <Link
      to={link}
      onClick={clickHandler}
      className={`w-1/4 pb-2 font-bold ${
        active === activeCat ? "border-b-4 border-b-blue-700" : ""
      }`}>
      {category}
    </Link>
  );
};
