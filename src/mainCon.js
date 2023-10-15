import { Route, Routes } from "react-router";
import App from "./App";
import { PhoneAbout } from "./components/about";
import { PhoneStack } from "./components/stack";
import { PhoneProjects } from "./components/projects";
import { PhoneContact } from "./components/contact";

export const MainCon = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}>
        <Route
          path="/about"
          element={<PhoneAbout />}
        />
        <Route
          path="/tech-stack"
          element={<PhoneStack />}
        />
        <Route
          path="/projects"
          element={<PhoneProjects />}
        />
        <Route
          path="/contact"
          element={<PhoneContact />}
        />
      </Route>
    </Routes>
  );
};
