import { Route, Routes } from "react-router"
import App from "./App"
import { About, About2 } from "./components/about"

export const MainCon = () => {

    return <Routes>
        <Route path="/" element={<App />}>
            <Route path="/about" element={<About />} />
        </Route>

        
    </Routes>
}