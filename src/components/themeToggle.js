import { useState } from "react"
import { ThemeIconButton } from "react-simple-animated-dark-mode-button"

export const ModeToggle = () => {
    const  [dark, setDark] = useState(true)
    
    return <span className="absolute right-[4rem] ">
        <ThemeIconButton isDarkMode={dark} onClick={() => setDark(!dark)} />
    </span>
}