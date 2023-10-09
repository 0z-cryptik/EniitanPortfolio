import { FaReact } from "react-icons/fa"
import { SiTailwindcss, SiAxios } from "react-icons/si"
import { PiGithubLogo } from "react-icons/pi"
import { GoLinkExternal } from "react-icons/go"
import { useState } from "react"
import { useList } from "./stateProvider"

export const WeatherByEniitan = () => {
    const [hover, setHover] = useState(false)
    const { dark } = useList()

    return <figure className="w-[80%] border p-5 rounded-xl mx-auto mt-7 ">

        <h1 className="mx-auto w-fit text-xl font-semibold mb-5">Weather By Eniitan</h1>

        <div className="relative" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>

            <img  className={`mb-5 ${hover && dark ? 'lg:opacity-40' : ''} ${hover ? 'lg:opacity-50' : ''} transition-opacity ease-linear border`} src="https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696658941/Screenshot_94_4_hymnmo.png" />

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
                Weather By Eniitan is a simple and user-friendly web application that provides current weather information and weather forecasts for your location or any city in the world. It also allows you to toggle between Celsius and Fahrenheit modes, remembering your preference for future visits. 
            </p>
            <h2 className="mt-5 text-lg font-bold border-b mb-3">Features</h2>
            <ul className="list-disc ml-5">
                <li className="mb-3">
                    <b>Location-Based Weather:</b> When you grant permission to access your location, the app will display the current weather and forecasts for that location.
                </li>
                <li className="mb-3">
                    <b>Default Location:</b> If you choose not to grant location access, or you have a setting that prevents location access, the app will display the current weather and forecasts for the default location (Accra, Ghana).
                </li>
                <li className="mb-3">
                    <b>Search for Any City:</b> You can search for any city in the world using the search bar and you will be provided with accurate weather information for that city. You can also search for certain specific popular places.
                </li>
                <li className="mb-3">
                    <b>Temperature Units Toggle:</b> The site allows you to switch between Celsius and Fahrenheit modes, ensuring that you see temperatures in your preferred unit.
                </li>
                <li>
                    <b>Remembers Your Preference:</b> Your selected temperature unit (Celsius or Fahrenheit) will be remembered and applied every time you revisit the site, providing a personalized experience.
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
                    <img className='mx-auto w-[3rem] mb-2' src='https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696602984/pngwing.com_2_xn3gua.png' />
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
                    <img className="mx-auto mb-2 w-[3rem]" src="https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696670470/rapidapi-icon_foogwz.svg" />
                    Rapid API
                </div>
            </div>
            <span className="w-fit mx-auto flex flex-row mt-5 text-gray-500">
                <a className="lg:hover:text-red-600" href="https://github.com/0z-cryptik/weather-by-eniitan">
                    <PiGithubLogo className="mr-2" size={'1.5rem'} title="repositary" />
                </a>
                <a className="lg:hover:text-red-600" href="https://weather-by-eniitan.vercel.app">
                    <GoLinkExternal size={'1.5rem'} title="view site" />
                </a>
            </span>
        </figcaption>
    </figure>
}