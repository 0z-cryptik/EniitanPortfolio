import { SlOptionsVertical } from "react-icons/sl";
import { useList } from "../../hooks/stateProvider";
import { Menu } from "../Details/phoneMenu";
import { Img } from "react-image";
import MyAvatar from "../../images/photo_2023-10-29_14-49-58.jpg";
import { AvatarLoader } from "../Project/imgLoader";
import { Details } from "../Details/details";

export const Header = ({ device }) => {
  const { viewMenu, setViewMenu } = useList();

  let height, classStyle;

  if (device === "mobile") {
    height = 150;
    classStyle = "lg:hidden";
  } else if (device === "computer") {
    height = 250;
    classStyle = "hidden lg:block";
  }

  return (
    <>
      <div
        style={{ height }}
        className={`${classStyle} bg-gradient-to-b z-0 via-[#00b4d8] from-[#0077b6] to-[#3c6e71]`}>
        {device === "mobile" && (
          <SlOptionsVertical
            className={`absolute right-4 top-5 transition-transform ${
              viewMenu ? "rotate-90" : ""
            }`}
            size={"1.5rem"}
            onClick={() => setViewMenu(!viewMenu)}
            color="white"
          />
        )}
        <Menu />
      </div>
    </>
  );
};

export const ProfilePicandDetails = () => {
  return (
    <>
      <Img
        src={MyAvatar}
        className="h-[8rem] w-[128px] border mx-auto rounded-full lg:-mt-[3.5rem] -mt-[4rem] z-10"
        loader={<AvatarLoader />}
      />
      <Details />
    </>
  );
};
