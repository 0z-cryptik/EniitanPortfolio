import weatherPic from "../images/weatherByEniitan.png";
import { ProjectHeader } from "./projectHeader";
import { ProjectDetails } from "./allProjectDetails&Footer";
import { ProjectImage } from "./projectImage";

export const WeatherByEniitan = () => {
  return (
    <figure className="lg:w-[80%] min-[300px]:w-fit lg:border lg:p-5 lg:rounded-xl mx-auto lg:mt-7 mt-[5rem]">
      <ProjectHeader
        siteLink={"https://weather-by-eniitan.vercel.app"}
        projectName={"Weather By Eniitan"}
      />

      <ProjectImage
        src={weatherPic}
        repoURL={"https://github.com/0z-cryptik/weather-by-eniitan"}
        siteURL={"https://weather-by-eniitan2.vercel.app"}
      />

      <ProjectDetails project={"WBE"} />
    </figure>
  );
};
