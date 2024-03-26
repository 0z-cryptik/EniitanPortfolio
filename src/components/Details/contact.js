import { TbBrandGmail } from "react-icons/tb";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useList } from "../../hooks/stateProvider";
import { FaTelegram } from "react-icons/fa6";
import { ContactLink } from "./contactLinks";

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
      } flex-grow h-fit mx-[2rem] min-[1180px]:mx-[3rem] min-[1250px]:mx-[5rem] flex flex-col p-5 rounded-md transform-gpu`}>
      <h1 className="text-center text-xl font-bold">Reach me</h1>

      <ContactLink
        link={"mailto:enitanolawale0@gmail.com"}
        Component={TbBrandGmail}
        text={"enitanolawale0@gmail.com"}
      />

      <ContactLink
        link={"https://www.linkedin.com/in/enitan-a-b36527205"}
        Component={AiFillLinkedin}
        text={"LinkedIn"}
      />

      <ContactLink
        link={"https://github.com/0z-cryptik"}
        Component={AiFillGithub}
        text={"Github"}
      />

      <ContactLink
        link={"https://t.me/eniitantheeg"}
        Component={FaTelegram}
        text={"Telegram"}
      />
    </div>
  );
};
