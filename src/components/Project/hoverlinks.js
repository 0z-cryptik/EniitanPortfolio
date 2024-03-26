import { useList } from "../../hooks/stateProvider";
import { PiGithubLogo } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";

export const HoverLinks = ({ repoLink, siteLink }) => {
  const { hover, dark } = useList();

  return (
    <div
      className={`${
        hover ? "opacity-100" : "opacity-0"
      } transition-opacity ease-linear absolute top-[45%] left-[38%] flex flex-row w-fit`}>
      <a
        className={`mr-3 flex flex-row p-4 ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
        href={siteLink}
        target="_blank">
        view site
        <GoLinkExternal
          className="w-fit mt-1 ml-1"
          title="view site"
        />
      </a>

      <a
        className={`flex flex-row p-4 ${
          dark ? "bg-white text-black" : "bg-black text-white"
        }`}
        href={repoLink}
        target="_blank">
        view repo
        <PiGithubLogo
          className="w-fit mt-1 ml-1"
          title="repositary"
        />
      </a>
    </div>
  );
};
