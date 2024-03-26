import { ProfilePicandDetails, Header } from "../Peripherals/header";

export const HeaderSection = () => {
  return (
    <>
      <Header device={"mobile"} />
      <Header device={"computer"} />
      <ProfilePicandDetails />
    </>
  );
};
