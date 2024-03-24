import { SlOptionsVertical } from "react-icons/sl";
import { useList } from "../hooks/stateProvider";
import { Menu } from "./phoneMenu";

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
  );
};
