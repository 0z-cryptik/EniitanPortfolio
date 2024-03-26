import { Img } from "react-image";
import { ImgLoader } from "./imgLoader";
import { HoverLinks } from "./hoverlinks";
import { useList } from "../../hooks/stateProvider";

export const ProjectImage = ({ src, repoURL, siteURL }) => {
  const { dark, hover, setHover } = useList();

  return (
    <div
      className="relative"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Img
        className={`mb-5 border ${hover && dark ? "lg:opacity-40" : ""} ${
          hover && !dark ? "lg:opacity-50" : ""
        } transition-opacity ease-linear`}
        src={src}
        loader={<ImgLoader />}
      />

      <HoverLinks
        repoLink={repoURL}
        siteLink={siteURL}
      />
    </div>
  );
};
