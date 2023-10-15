import { Route, Routes, useNavigate } from "react-router";
import App from "./App";
import { PhoneAbout } from "./components/about";
import { PhoneStack } from "./components/stack";
import { PhoneProjects } from "./components/projects";
import { PhoneContact } from "./components/contact";
import { PhoneNext } from "./components/next";
import { useEffect } from "react";

export const MainCon = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/homepage");
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<App />}>
        <Route
          path="/homepage"
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
          path="/plans"
          element={<PhoneNext />}
        />
      </Route>
    </Routes>
  );
};
