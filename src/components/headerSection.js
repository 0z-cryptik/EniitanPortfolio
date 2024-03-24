import { ProfilePicandDetails, Header } from "./header";

export const HeaderSection = () => {
  return (
    <>
      <Header device={"mobile"} />
      <Header device={"computer"} />
      <ProfilePicandDetails />
    </>
  );
};
