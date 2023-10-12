import { ModeToggle } from "./themeToggle"
import { useList } from "./stateProvider"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import useSticky from "./myhooks"

export const NavBar = () => {

    const { dark, setContactClick } = useList()

    return <nav id="navbar" className={`hidden justify-center py-3 lg:flex flex-row fixed w-full z-10 ${dark ? 'bg-[#140F2D] text-white' : 'bg-[#bde0fe] text-black'}`}>

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

export const PhoneNavBar = () => {

    const { dark } = useList()

    const { sticky, element } = useSticky()

    if (sticky){
        console.log('sticky')
    }

    if (!sticky) {
        console.log('not sticky')
    }

    return <nav ref={element} className={`lg:hidden flex flex-row mt-7 relative ${sticky ? 'sticky top-0' : ''} text-center w-[100vw]`}>
        <Link to={'about'} className="w-1/4">
            About Me
        </Link>

        <span className="w-1/4">
            Tech Stack
        </span>

        <span className="w-1/4">
            Projects
        </span>

        <span className="w-1/4">
            Contact
        </span>
    </nav>

}