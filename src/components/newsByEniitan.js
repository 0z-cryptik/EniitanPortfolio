import { FaReact } from "react-icons/fa"
import { SiTailwindcss, SiAxios, SiNewyorktimes } from "react-icons/si"
import { PiGithubLogo } from "react-icons/pi"
import { GoLinkExternal } from "react-icons/go"
import { useState } from "react"
import { useList } from "./stateProvider"
import newsPic from "../images/newsByEniitan.png"
import cssLogo from '../images/pngwing.com (2).png'
import { Img } from 'react-image'
import { ImgLoader } from "./imgLoader"

export const NewsByEniitan = () => {
    const [hover, setHover] = useState(false)
    const { dark } = useList()

    return <figure className="w-[80%] border p-5 rounded-xl mx-auto mt-7">

        <h1 className="mx-auto w-fit text-xl font-semibold mb-5">News By Eniitan</h1>

        <div className="relative" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>

            <Img className={`mb-5 border ${hover && dark ? 'lg:opacity-40' : ''} ${hover && !dark ? 'lg:opacity-50' : ''} transition-opacity ease-linear`} src={newsPic} loader={<ImgLoader />} />

            <div className={`${hover ? 'opacity-100' : 'opacity-0'} transition-opacity ease-linear absolute top-[33%] left-[33.5%] flex flex-row w-fit`}>
                <a className='mr-1' href="https://github.com/0z-cryptik/news-by-eniitan">
                    <PiGithubLogo className="w-fit" size={'9rem'} title="repositary" />
                </a>
                <a className='' href="https://news-by-eniitan.vercel.app">
                    <GoLinkExternal className="w-fit" size={'9rem'} title="view site" />
                </a>
            </div>
            
        </div>
        <figcaption>
            <h2 className="text-lg font-bold border-b mb-3">About</h2>
            <p>
                This News Web App is a user-friendly web application that allows users to enjoy news summaries from around the world across various categories in their feed, users can get a general grasp of happenings around the world without having to read much, and should they come across an headline that interests them, they can click on the headline to read the full article. 
            </p>
            <h2 className="mt-5 text-lg font-bold border-b mb-3">Features</h2>
            <ul className="list-disc ml-5">
                <li className="mb-3">
                    <b>News Feed:</b> Users can stay up-to-date with news summaries from various sources and categories in one convenient feed.
                </li>
                <li className="mb-3">
                    <b>Dark Mode and Light Mode:</b> The app offers both Dark Mode and Light Mode options for comfortable reading in different lighting conditions.
                </li>
                <li className="mb-3">
                    <b>User Preference Memory:</b> The web app remembers the user's selected mode and automatically applies it upon their return.
                </li>
                <li>
                    <b>Responsive Design:</b> The application is designed to provide an optimal experience on phones, PCs and tablets, with a user-friendly menu for easy navigation between different news categories (on phones & tablets).
                </li>
            </ul>
            <h2 className="my-5 text-lg font-bold border-b">Tech Stack</h2>
            <div className="flex flex-row font-semibold">
                <div className='text-center mr-7'>
                    <span className='text-blue-400'>
                        <FaReact className='mx-auto mb-2' size={'3rem'} />
                    </span>
                    React JS
                </div>
                <div className='text-center mr-7'>
                    <img className='mx-auto w-[3rem] mb-2' src={cssLogo} />
                    CSS
                </div>
                <div className='text-center mr-7'>
                    <span className='text-blue-400'>
                        <SiTailwindcss className='mx-auto mb-2' size={'3rem'} />
                    </span>
                    Tailwind CSS
                </div>
                <div className='text-center mr-7'>
                    <SiAxios className='mx-auto mb-2' size={'3rem'} />
                    Axios
                </div>

                <div className='text-center'>
                    <SiNewyorktimes className='mb-2 mx-auto' size={'3rem'} />
                    NewYorkTimes API
                </div>
            </div>
            <span className="w-fit mx-auto flex flex-row mt-5 text-gray-500">
                <a className="lg:hover:text-red-600" href="https://github.com/0z-cryptik/news-by-eniitan">
                    <PiGithubLogo className="mr-2" size={'1.5rem'} title="repositary" />
                </a>
                <a className="lg:hover:text-red-600" href="https://news-by-eniitan.vercel.app">
                    <GoLinkExternal size={'1.5rem'} title="view site" />
                </a>
            </span>
        </figcaption>
    </figure>
}