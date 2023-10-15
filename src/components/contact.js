import { BsArrowUpRight } from "react-icons/bs";
import { TbBrandGmail } from "react-icons/tb";
import {
  
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { useList } from "./stateProvider";
import { FaHashnode, FaTelegram } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";

export const Contact = () => {
  const { dark, contactClick, setContactClick } = useList();

  if (contactClick) {
    setTimeout(() => setContactClick(false), 1000);
  }

  return (
    <div
      id="contact"
      className={`border ${contactClick && dark ? "wobbleDark" : ""} ${
        contactClick && !dark ? "wobbleLight" : ""
      } flex-grow h-fit mx-[2rem] min-[1180px]:mx-[3rem] min-[1250px]:mx-[5rem] flex flex-col p-5 rounded-md`}>
      <h1 className="text-center text-xl font-bold">Reach me</h1>

      <a
        href="mailto:enitanolawale0@gmail.com"
        className={`mt-3 mb-2 transition-transform ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        } lg:hover:scale-105`}>
        <TbBrandGmail
          className="inline mr-2 -mt-1"
          size={"1.5rem"}
        />
        enitanolawale0@gmail.com
        <BsArrowUpRight
          className="inline ml-2"
          size={"0.8rem"}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/enitan-a-b36527205"
        className={`mb-2 transition-transform ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        } lg:hover:scale-105`}>
        <AiFillLinkedin
          className="inline mr-2 -mt-1"
          size={"1.5rem"}
        />
        LinkedIn
        <BsArrowUpRight
          className="inline ml-2"
          size={"0.8rem"}
        />
      </a>

      <a
        href="https://github.com/0z-cryptik"
        className={`mb-2 transition-transform ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        } lg:hover:scale-105`}>
        <AiFillGithub
          className="inline mr-2 -mt-1"
          size={"1.5rem"}
        />
        Github
        <BsArrowUpRight
          className="inline ml-2"
          size={"0.8rem"}
        />
      </a>

      <a
        href="https://t.me/eniitantheeg"
        className={`transition-transform ${
          dark ? "lg:hover:text-red-700" : "lg:hover:text-blue-700"
        } lg:hover:scale-105`}>
        <FaTelegram
          className="inline mr-2 -mt-1"
          size={"1.5rem"}
        />
        Telegram
        <BsArrowUpRight
          className="inline ml-2"
          size={"0.8rem"}
        />
      </a>
    </div>
  );
};

export const PhoneContact = () => {
  return (
    <div className="lg:hidden flex flex-col text-sm min-[300px]:text-lg h-[45svh] md:max-lg:h-[60vh]">
      <a
        className="w-screen py-2 border-b"
        href="mailto:enitanolawale0@gmail.com">
        &rarr;
        <TbBrandGmail className="inline -mt-1 mr-1 ml-5" />
        enitanolawale0@gmail.com
        <GoLinkExternal className="inline ml-2 -mt-1" />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/enitan-a-b36527205"
        className="w-screen py-2 border-b">
        &rarr;
        <AiFillLinkedin className="inline ml-5 -mt-1 mr-1" />
        LinkedIn
        <GoLinkExternal className="inline ml-2 -mt-1" />
      </a>

      <a
        className="w-screen py-2 border-b"
        target="_blank"
        href="https://t.me/eniitantheeg">
        &rarr;
        <FaTelegram className="inline ml-5 -mt-1 mr-1" />
        Telegram
        <GoLinkExternal className="inline ml-2 -mt-1" />
      </a>

      <a
        className="w-screen py-2 border-b"
        target="_blank"
        href="https://github.com/0z-cryptik">
        &rarr;
        <AiFillGithub className="inline -mt-1 mr-1 ml-5" />
        Github
        <GoLinkExternal className="inline ml-2 -mt-1" />
      </a>

      <a
        target="_blank"
        href="https://0zcryptik.hashnode.dev/"
        className="w-screen py-2 border-b">
        &rarr;
        <FaHashnode className="inline -mt-1 mr-1 ml-5" />
        Blog
        <GoLinkExternal className="inline ml-2 -mt-1" />
      </a>
    </div>
  );
};
