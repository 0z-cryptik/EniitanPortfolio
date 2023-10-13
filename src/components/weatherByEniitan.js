import { FaReact, FaLink } from "react-icons/fa";
import { SiTailwindcss, SiAxios } from "react-icons/si";
import { PiGithubLogo } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import { useState } from "react";
import { useList } from "./stateProvider";
import weatherPic from "../images/weatherByEniitan.png";
import cssLogo from "../images/pngwing.com (2).png";
import rapidAPIlogo from "../images/rapidapi-icon.svg";
import { Img } from "react-image";
import { ImgLoader } from "./imgLoader";

export const WeatherByEniitan = () => {
	const [hover, setHover] = useState(false);
	const { dark } = useList();

	return (
		<figure className="lg:w-[80%] w-fit lg:border lg:p-5 lg:rounded-xl mx-auto lg:mt-7 mt-[5rem]">
			<h1 className="lg:mx-auto w-fit text-xl font-semibold mb-5">
				<span className="lg:hidden mr-1 text-2xl">&rarr;</span>
				<span className="hidden lg:block">Weather By Eniitan</span>
				<a
					href="https://weather-by-eniitan.vercel.app"
					target="_blank"
					className="lg:block">
					Weather By Eniitan
					<FaLink
						size={"1rem"}
						className="-mt-1 inline ml-3"
					/>
				</a>
			</h1>

			<div
				className="relative"
				onMouseOver={() => setHover(true)}
				onMouseLeave={() => setHover(false)}>
				<Img
					className={`mb-5 ${hover && dark ? "lg:opacity-40" : ""} ${
						hover && !dark ? "lg:opacity-50" : ""
					} transition-opacity ease-linear border`}
					src={weatherPic}
					loader={<ImgLoader />}
				/>

				<div
					className={`${
						hover ? "opacity-100" : "opacity-0"
					} transition-opacity ease-linear absolute top-[33%] left-[33.5%] flex flex-row w-fit`}>
					<a
						className="mr-1"
						href="https://github.com/0z-cryptik/news-by-eniitan"
						target="_blank">
						<PiGithubLogo
							className="w-fit"
							size={"9rem"}
							title="repositary"
						/>
					</a>
					<a
						className=""
						href="https://news-by-eniitan.vercel.app"
						target="_blank">
						<GoLinkExternal
							className="w-fit"
							size={"9rem"}
							title="view site"
						/>
					</a>
				</div>
			</div>
			<figcaption>
				<h2 className="text-lg font-bold border-b mb-3">About</h2>

				<p>
					Weather By Eniitan is a simple and user-friendly web
					application that provides current weather information and
					weather forecasts for your location or any city in the
					world. It also allows you to toggle between Celsius and
					Fahrenheit modes, remembering your preference for future
					visits.
				</p>

				<h2 className="mt-5 text-lg font-bold border-b mb-3">
					Features
				</h2>

				<ul className="list-disc ml-5">
					<li className="mb-3">
						<b>Location-Based Weather:</b> When you grant permission
						to access your location, the app will display the
						current weather and forecasts for that location.
					</li>
					<li className="mb-3">
						<b>Default Location:</b> If you choose not to grant
						location access, or you have a setting that prevents
						location access, the app will display the current
						weather and forecasts for the default location (Accra,
						Ghana).
					</li>
					<li className="mb-3">
						<b>Search for Any City:</b> You can search for any city
						in the world using the search bar and you will be
						provided with accurate weather information for that
						city. You can also search for certain specific popular
						places.
					</li>
					<li className="mb-3">
						<b>Temperature Units Toggle:</b> The site allows you to
						switch between Celsius and Fahrenheit modes, ensuring
						that you see temperatures in your preferred unit.
					</li>
					<li>
						<b>Remembers Your Preference:</b> Your selected
						temperature unit (Celsius or Fahrenheit) will be
						remembered and applied every time you revisit the site,
						providing a personalized experience.
					</li>
				</ul>

				<h2 className="my-5 text-lg font-bold border-b">Tech Stack</h2>

				<div className="flex flex-row lg:font-semibold text-sm lg:text-base">
					<div className="text-center mr-7 hidden lg:block">
						<FaReact
							color="rgb(96, 165, 250)"
							className="mx-auto mb-2"
							size={"3rem"}
						/>
						React JS
					</div>

					<div className="text-center mr-7 lg:hidden">
						<FaReact
							color="rgb(96, 165, 250)"
							className="mx-auto mb-2"
							size={"2rem"}
						/>
						React JS
					</div>

					<div className="text-center mr-7">
						<img
							className="mx-auto h-[2rem] w-[2rem] lg:w-[3rem] mb-2"
							src={cssLogo}
						/>
						CSS
					</div>

					<div className="text-center mr-7 hidden lg:block">
						<SiTailwindcss
							className="mx-auto mb-2"
							size={"3rem"}
							color="rgb(96, 165, 250)"
						/>
						Tailwind CSS
					</div>

					<div className="text-center mr-7 lg:hidden">
						<SiTailwindcss
							className="mx-auto mb-2"
							size={"2rem"}
							color="rgb(96, 165, 250)"
						/>
						Tailwind CSS
					</div>

					<div className="text-center mr-7 hidden lg:block">
						<SiAxios
							className="mx-auto mb-2"
							size={"3rem"}
						/>
						Axios
					</div>

					<div className="text-center mr-7 lg:hidden">
						<SiAxios
							className="mx-auto mb-2"
							size={"2rem"}
						/>
						Axios
					</div>

					<div className="text-center">
						<img
							className="mx-auto mb-2 lg:w-[3rem] w-[2rem]"
							src={rapidAPIlogo}
						/>
						Rapid API
					</div>
				</div>

				<span className="w-fit mx-auto hidden lg:flex flex-row mt-5 text-gray-500">
					<a
						className="lg:hover:text-red-600"
						href="https://github.com/0z-cryptik/weather-by-eniitan"
						target="_blank">
						<PiGithubLogo
							className="mr-2"
							size={"1.5rem"}
							title="repositary"
						/>
					</a>

					<a
						className="lg:hover:text-red-600"
						href="https://weather-by-eniitan.vercel.app"
						target="_blank">
						<GoLinkExternal
							size={"1.5rem"}
							title="view site"
						/>
					</a>
				</span>

				<span className="w-fit mx-auto lg:hidden flex flex-row mt-7">
					<a
						href="https://weather-by-eniitan.vercel.app"
						target="_blank">
						<button className="bg-transparent border p-2 rounded-xl mr-5">
							<GoLinkExternal
								className="inline -mt-1 mr-1"
								size={"1rem"}
							/>
							View site
						</button>
					</a>

					<a
						href="https://github.com/0z-cryptik/weather-by-eniitan"
						target="_blank">
						<button className="bg-transparent border p-2 rounded-xl">
							<PiGithubLogo
								className="inline -mt-1 mr-1"
								size={"1rem"}
							/>
							Repositary
						</button>
					</a>
				</span>
			</figcaption>
		</figure>
	);
};
