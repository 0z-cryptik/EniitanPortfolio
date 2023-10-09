import { ModeToggle } from "./themeToggle"
import { useList } from "./stateProvider"

export const NavBar = () => {

    const { dark, setDark, setContactClick } = useList()

    return <nav id="navbar" className={`justify-center py-3 flex flex-row fixed w-full z-10 ${dark ? 'bg-[#140F2D] text-white' : 'bg-[#bde0fe] text-black'}`}>

        <a href="https://0zcryptik.hashnode.dev/" className={`mr-[2rem] ${dark ? 'lg:hover:text-red-700' : 'lg:hover:text-blue-700'}`}>
            Blog
        </a>
        <a href="#projects" className={`mr-[2rem] ${dark ? 'lg:hover:text-red-700' : 'lg:hover:text-blue-700'}`}>
            Projects
        </a>
        <a href="#tech-stack" className={`mr-[2rem] ${dark ? 'lg:hover:text-red-700' : 'lg:hover:text-blue-700'}`}>
            Stack
        </a>
        <a className={`mr-[2rem] ${dark ? 'lg:hover:text-red-700' : 'lg:hover:text-blue-700'}`}>
            Resume
        </a>
        <a href="#top" onClick={() => setContactClick(true)} className={`${dark ? 'lg:hover:text-red-700' : 'lg:hover:text-blue-700'}`}>
            Contact
        </a>

        <ModeToggle />

    </nav>
}