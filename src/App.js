import React from "react";
import "./App.css";
import { NavBar, PhoneNavBar } from './components/Navigation/navbar'
import { Footer } from "./components/Details/footer";
import { useList } from "./hooks/stateProvider";
import { Outlet } from "react-router";
import { Overlay } from "./components/Peripherals/overlay";
import { Categories } from "./components/Peripherals/categories";
import { HeaderSection } from "./components/Details/headerSection";

const App = () => {
  const { dark, viewMenu } = useList();

  const style = `lg:w-full w-screen ${
    dark ? "bg-black text-white" : "bg-white text-black"
  } ${viewMenu ? "fixed" : ""}`;

  return (
    <main
      id="body"
      className={style}>
      <NavBar />
      <HeaderSection />
      <PhoneNavBar />
      <Categories />
      <Overlay />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
