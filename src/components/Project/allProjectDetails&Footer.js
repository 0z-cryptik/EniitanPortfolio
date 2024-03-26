import { NBE_ProjectDetails, WBE_ProjectDetails } from "./projectDetails";
import { NBE_TechStack, WBE_TechStack } from "./projectTechStack";
import { ProjectFooter } from "./projectFooters";

export const ProjectDetails = ({ project }) => {
  if (project === "NBE") {
    return (
      <figcaption>
        <NBE_ProjectDetails />

        <NBE_TechStack />

        <ProjectFooter
          repoLink={"https://github.com/0z-cryptik/news-by-eniitan"}
          siteLink={"https://news-by-eniitan.vercel.app"}
        />
      </figcaption>
    );
  }

  if (project === "WBE") {
    return (
      <figcaption>
        <WBE_ProjectDetails />

        <WBE_TechStack />

        <ProjectFooter
          repoLink={"https://github.com/0z-cryptik/weather-by-eniitan2"}
          siteLink={"https://weather-by-eniitan2.vercel.app"}
        />
      </figcaption>
    );
  }
};
