import { NewsByEniitan } from "./newsByEniitan"
import { WeatherByEniitan } from "./weatherByEniitan"

export const Projects = () => {

    return <section id="projects" className='mt-[5rem] mx-[3rem] hidden lg:block'>
        <h1  className='text-3xl font-semibold border-b mb-4'>
            Projects
        </h1>

        <p className="text-xl w-fit mx-auto">Here are some of the notable projects I've built</p>

        <NewsByEniitan />

        <WeatherByEniitan />
    </section>
}