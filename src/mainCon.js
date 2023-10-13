import { Route, Routes } from "react-router"
import App from "./App"
import { About } from "./components/about"
import { TechStack } from "./components/stack"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"

export const MainCon = () => {

    return <Routes>
        <Route path="/" element={<App />}>
            <Route path="/about" element={<About />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Route>

        
    </Routes>
}