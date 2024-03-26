import newsPic from "../../images/newsByEniitan.png";
import { ProjectHeader } from "./projectHeader";
import { ProjectDetails } from "./allProjectDetails&Footer";
import { ProjectImage } from "./projectImage";

export const NewsByEniitan = () => {
  return (
    <figure className="lg:w-[80%] min-[300px]:w-fit lg:border lg:p-5 rounded-xl mx-auto mt-7">
      <ProjectHeader
        siteLink={"https://news-by-eniitan.vercel.app"}
        projectName={"News By Eniitan"}
      />

      <ProjectImage
        src={newsPic}
        siteURL={"https://news-by-eniitan.vercel.app"}
        repoURL={"https://github.com/0z-cryptik/news-by-eniitan"}
      />

      <ProjectDetails project={"NBE"} />
    </figure>
  );
};
