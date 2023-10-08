import { SiTailwindcss, SiAxios, SiVercel } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { IoLogoNpm } from 'react-icons/io'

export const TechStack = () => {

    return <section id="tech-stack" className='mt-[5rem] mx-[3rem]'>
        <h1 className='text-3xl font-semibold border-b'>
            My Tech Stack
        </h1>

        <h2 className="my-6 w-fit mx-auto text-lg font-semibold">
            Programming languages and frameworks/libraries
        </h2>

        <section className='grid grid-cols-7 font-bold'>
            <div className='text-center'>
                <img className='w-[5rem] h-[5rem] mx-auto py-[0.2rem] mb-4' src='https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696605175/icons8-html-logo-480_vvafk1.png' />
                HTML
            </div>

            <div className='text-center'>
                <img className='mx-auto w-[5rem] mb-4' src='https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696602984/pngwing.com_2_xn3gua.png' />
                CSS
            </div>

            <div className='text-center'>
                <img className='mx-auto w-[5rem] mb-4' src='https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696601640/javascript-39404_wlsnvj.png' />
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
                <img className='mx-auto w-[5rem] mb-4' src='https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696602984/jquery_occhjv.png' />
                JQuery
            </div>

            <div className='text-center'>
                <img className='mx-auto w-[5rem] mb-4' src='https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696602353/pngwing.com_zemvx5.png' />
                Git
            </div>

            <div className='text-center mt-7'>
                <SiAxios className='mx-auto mb-4' size={'5rem'} />
                Axios
            </div>

            <div className='text-center mt-7'>
                <img className='mx-auto w-[5rem] mb-4' src='https://res.cloudinary.com/ds7xwxu4j/image/upload/v1696601990/pngwing.com_fey6wn.png' />
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