import { useList } from "../../hooks/stateProvider";
import { BsArrowUpRight } from "react-icons/bs";

export const ContactLink = ({ link, Component, text }) => {
  const { dark } = useList();

  return (
    <a
      href={link}
      className={`mt-3 mb-2 transition-transform ${
        dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
      } lg:hover:scale-105`}>
      <Component
        className="inline mr-2 -mt-1"
        size={"1.5rem"}
      />
      {text}
      <BsArrowUpRight
        className="inline ml-2"
        size={"0.8rem"}
      />
    </a>
  );
};
