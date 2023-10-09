import { ModeToggle } from "./themeToggle"
import { useList } from "./stateProvider"

export const NavBar = () => {

    const { dark, setDark } = useList()

    return <nav className={`justify-center py-3 flex flex-row fixed w-full z-10 ${dark ? 'bg-[#140F2D] text-white' : 'bg-blue-400 text-black'}`}>

        <a href="https://0zcryptik.hashnode.dev/" className='mr-[2rem] lg:hover:text-red-700'>
            Blog
        </a>
        <a href="#projects" className='mr-[2rem] lg:hover:text-red-700'>
            Projects
        </a>
        <a href="#tech-stack" className='mr-[2rem] lg:hover:text-red-700'>
            Stack
        </a>
        <a className='mr-[2rem] lg:hover:text-red-700'>
            Resume
        </a>
        <a href="#top" className="lg:hover:text-red-700">
            Contact
        </a>

        <ModeToggle />

    </nav>
}