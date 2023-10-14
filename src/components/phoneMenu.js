import { useList } from "./stateProvider";
import { ThemeIconButton } from "react-simple-animated-dark-mode-button";

export const Menu = () => {
  const { dark, setDark, viewMenu, setViewMenu } = useList();

  return (
    <div
      className={`w-[40%] bg-black flex flex-col top-12 p-2 z-40 h-fit fixed transform-gpu transition-transform ${
        viewMenu ? "translate-x-[60vw]" : "translate-x-[100vw]"
      }`}>
      <a>Resume</a>
      <a>Blog</a>
      <span className="w-fit mx-auto">
        <ThemeIconButton
          isDarkMode={dark}
          onClick={() => setDark(!dark)}
        />
      </span>
    </div>
  );
};
