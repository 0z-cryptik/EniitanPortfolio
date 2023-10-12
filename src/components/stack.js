import { SiTailwindcss, SiAxios, SiVercel } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { IoLogoNpm } from 'react-icons/io'
import htmlLogo from '../images/icons8-html-logo-480.png'
import cssLogo from '../images/pngwing.com (2).png'
import jsLogo from '../images/javascript-39404.png'
import jqLogo from '../images/jquery.png'
import gitLogo from '../images/pngwing.com.png'
import pythonLogo from '../images/python.png'

export const TechStack = () => {

    return <section id="tech-stack" className='mt-[5rem] mx-[3rem] hidden lg:block'>
        <h1 className='text-3xl font-semibold border-b'>
            My Tech Stack
        </h1>

        <h2 className="my-6 w-fit mx-auto text-lg font-semibold">
            Programming languages and frameworks/libraries
        </h2>

        <section className='grid grid-cols-7 font-bold'>
            <div className='text-center'>
                <img className='w-[5rem] h-[5rem] mx-auto py-[0.2rem] mb-4' src={htmlLogo} />
                HTML
            </div>

            <div className='text-center'>
                <img className='mx-auto w-[5rem] mb-4' src={cssLogo} />
                CSS
            </div>

            <div className='text-center'>
                <img className='mx-auto w-[5rem] mb-4' src={jsLogo} />
                JavaScript
            </div>

            <div className='text-center'>
                <span className='text-blue-400'>
                    <FaReact className='mx-auto mb-4' size={'5rem'} />
                </span>
                React JS
            </div>

            <div className='text-center'>
                <span className='text-blue-400'>
                    <SiTailwindcss className='mx-auto mb-4' size={'5rem'} />
                </span>
                Tailwind CSS
            </div>

            <div className='text-center'>
                <img className='mx-auto w-[5rem] mb-4' src={jqLogo} />
                JQuery
            </div>

            <div className='text-center'>
                <img className='mx-auto w-[5rem] mb-4' src={gitLogo} />
                Git
            </div>

            <div className='text-center mt-7'>
                <SiAxios className='mx-auto mb-4' size={'5rem'} />
                Axios
            </div>

            <div className='text-center mt-7'>
                <img className='mx-auto w-[5rem] mb-4' src={pythonLogo} />
                Python
            </div>
       
        </section>

        <h2 className="mt-9 mb-6 w-fit mx-auto text-lg font-semibold">
            Dev Tools
        </h2>

        <section className="grid grid-cols-7 font-bold">
            <div className='text-center mt-7'>
                <AiFillGithub className='mx-auto mb-4' size={'5rem'} />
                Github
            </div>
            <div className='text-center mt-7'>
                <SiVercel className='mx-auto mb-4' size={'5rem'} />
                Vercel
            </div>
            <div className='text-center mt-7'>
                <IoLogoNpm className='mx-auto mb-4' size={'5rem'} color="red" />
                Node Package Manager
            </div>
        </section>
        
    </section>
}