import { FaLink } from "react-icons/fa";

export const ProjectHeader = ({ siteLink, projectName }) => {
  return (
    <h1 className="lg:mx-auto w-fit text-xl font-semibold mb-5">
      <span className="lg:hidden mr-1 text-2xl">&rarr;</span>
      <a
        href={siteLink}
        target="_blank">
        {projectName}
        <FaLink
          size={"1rem"}
          className="-mt-1 inline ml-3"
        />
      </a>
    </h1>
  );
};
