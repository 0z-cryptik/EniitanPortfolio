import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { useList } from "../../hooks/stateProvider";

export const Footer = () => {
  const { dark } = useList();

  const date = (dateObj) => {
    const year = dateObj.getFullYear();
    return year;
  };

  return (
    <footer
      className={`border-t-[0.5px] mt-[5rem] py-6 ${
        dark ? "bg-[#121212] text-gray-500" : "bg-gray-700 text-gray-300"
      } border-t-gray-600 w-[100svw] lg:w-full`}>
      <center>
        <span className="flex flex-row w-fit mx-auto mt-3">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/enitan-a-b36527205"
            className="lg:hover:text-white">
            <AiFillLinkedin
              className="mr-3"
              size={"1.5rem"}
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/0z-cryptik"
            className="lg:hover:text-white">
            <AiOutlineGithub
              className="mr-3"
              size={"1.5rem"}
            />
          </a>
          <a
            target="_blank"
            href="mailto:enitanolawale0@gmail.com"
            className="lg:hover:text-white">
            <ImMail4
              className=""
              size={"1.5rem"}
            />
          </a>
        </span>

        <p
          id="copyright"
          className="mt-3 text-xs">
          &copy; {date(new Date())} BuiltByEniitan
        </p>
      </center>
    </footer>
  );
};
