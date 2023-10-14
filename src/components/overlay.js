import { useList } from "./stateProvider";

export const Overlay = () => {
  const { viewMenu, setViewMenu } = useList();

  if (viewMenu)
    return (
      <div
        onClick={() => setViewMenu(false)}
        className={`w-screen h-screen fixed top-0 left-0 bg-transparent z-30`}></div>
    );
};
