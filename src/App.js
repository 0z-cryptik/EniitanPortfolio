import React from "react";
import "./App.css";
import { NavBar, PhoneNavBar } from "./components/navbar";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { TechStack } from "./components/stack";
import { Projects } from "./components/projects";
import { Next } from "./components/next";
import { Footer } from "./components/footer";
import { useList } from "./hooks/stateProvider";
import MyAvatar from "./images/photo_2023-10-29_14-49-58.jpg";
import { Img } from "react-image";
import { AvatarLoader } from "./components/imgLoader";
import { Outlet } from "react-router";
import { SlOptionsVertical } from "react-icons/sl";
import { Menu } from "./components/phoneMenu";
import { Overlay } from "./components/overlay";
import { Header } from "./components/header";

const App = () => {
  const { dark, viewMenu, setViewMenu } = useList();

  return (
    <div
      id="body"
      className={`lg:w-full w-screen ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } ${viewMenu ? "fixed" : ""}`}>
      <NavBar />

      <Header device={'mobile'} />
      <Header device={'computer'} />

      <Overlay />

      <Img
        src={MyAvatar}
        className="h-[8rem] w-[128px] border mx-auto rounded-full lg:-mt-[3.5rem] -mt-[4rem] z-10"
        loader={<AvatarLoader />}
      />

      <p
        id="top"
        className="w-fit mx-auto font-bold text-xl">
        Enitan Akinfenwa
      </p>
      <p className="w-fit mx-auto text-sm">Frontend Software Developer</p>
      <p className="w-fit mx-auto text-gray-500">
        <HiOutlineLocationMarker className="inline -mt-1" />
        Nigeria
      </p>

      <PhoneNavBar />

      <section className="lg:flex flex-row hidden">
        <About />
        <Contact />
      </section>

      <div className="hidden lg:block">
        <TechStack />

        <Projects />

        <Next />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
