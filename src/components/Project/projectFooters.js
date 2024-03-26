import { PiGithubLogo } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import { useList } from "../../hooks/stateProvider";

export const ProjectFooter = ({ repoLink, siteLink }) => {
  const { dark } = useList();

  return (
    <>
      <span className="w-fit mx-auto hidden lg:flex flex-row mt-5 text-gray-500">
        <a
          className="lg:hover:text-red-600"
          href={repoLink}
          target="_blank">
          <PiGithubLogo
            className="mr-2"
            size={"1.5rem"}
            title="repositary"
          />
        </a>

        <a
          className="lg:hover:text-red-600"
          href={siteLink}
          target="_blank">
          <GoLinkExternal
            size={"1.5rem"}
            title="view site"
          />
        </a>
      </span>

      <span className="w-fit mx-auto lg:hidden flex flex-row mt-7">
        <a
          href={siteLink}
          target="_blank">
          <button
            className={`bg-transparent border p-2 rounded-xl mr-5 ${
              dark ? "" : "border-black"
            }`}>
            <GoLinkExternal
              className="inline mr-1"
              size={"1rem"}
            />
            View site
          </button>
        </a>

        <a
          href={repoLink}
          target="_blank">
          <button
            className={`bg-transparent border p-2 rounded-xl ${
              dark ? "" : "border-black"
            }`}>
            <PiGithubLogo
              className="inline -mt-1 mr-1"
              size={"1rem"}
            />
            Repositary
          </button>
        </a>
      </span>
    </>
  );
};
