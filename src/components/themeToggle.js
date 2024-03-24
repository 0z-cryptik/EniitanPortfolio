import { ThemeIconButton } from "react-simple-animated-dark-mode-button";
import { useList } from "../hooks/stateProvider";

export const ModeToggle = () => {
  const { dark, setDark } = useList();

  return (
    <span className="absolute right-[4rem] ">
      <ThemeIconButton
        isDarkMode={dark}
        onClick={() => setDark(!dark)}
      />
    </span>
  );
};
