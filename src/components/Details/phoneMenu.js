import { useList } from "../../hooks/stateProvider";
import { ThemeIconButton } from "react-simple-animated-dark-mode-button";
import { FaHashnode, FaRegFilePdf } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbBrandGmail } from "react-icons/tb";
import CV from "../../files/Enitan-Akinfenwa-dev-CV.pdf";

export const Menu = () => {
  const { dark, setDark, viewMenu } = useList();

  return (
    <div
      className={`w-[40%] md:max-lg:w-[25%] lg:hidden ${
        dark ? "bg-[#121212]" : "bg-gray-200"
      } flex flex-col top-12 p-2 z-40 h-fit fixed transform-gpu transition-transform ${
        viewMenu
          ? "translate-x-[60vw] md:max-lg:translate-x-[75vw] shadow-lg"
          : "translate-x-[100vw]"
      }`}>
      <a
        className="mb-2"
        href="mailto:enitanolawale0@gmail.com">
        <TbBrandGmail className="inline -mt-1 mr-2" />
        Email
      </a>

      <a
        className="mb-2"
        href="https://www.linkedin.com/in/enitan-a-b36527205"
        target="_blank">
        <AiFillLinkedin className="inline -mt-1 mr-2" />
        LinkedIn
      </a>

      <a
        href={CV}
        className="mb-2"
        download={"Enitan Akinfenwa"}>
        <FaRegFilePdf className="inline -mt-1 mr-2" />
        Resume
      </a>

      <a
        href="https://github.com/0z-cryptik"
        target="_blank"
        className="mb-2">
        <AiFillGithub className="inline -mt-1 mr-2" />
        Github
      </a>

      <a
        target="_blank"
        className={`mb-3 border-b-[0.5px] pb-2 ${
          dark ? "" : "border-black"
        }`}
        href="https://0zcryptik.hashnode.dev/">
        <FaHashnode className="inline -mt-1 mr-2" />
        Blog
      </a>

      <span className="w-fit mx-auto">
        <ThemeIconButton
          isDarkMode={dark}
          onClick={() => setDark(!dark)}
        />
      </span>
    </div>
  );
};
