import { FaReact, FaLink } from "react-icons/fa";
import { SiTailwindcss, SiAxios, SiNewyorktimes } from "react-icons/si";
import { PiGithubLogo } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import { useState } from "react";
import { useList } from "./stateProvider";
import newsPic from "../images/newsByEniitan.png";
import cssLogo from "../images/pngwing.com (2).png";
import { Img } from "react-image";
import { ImgLoader } from "./imgLoader";

export const NewsByEniitan = () => {
  const [hover, setHover] = useState(false);
  const { dark } = useList();

  return (
    <figure className="lg:w-[80%] w-fit lg:border lg:p-5 rounded-xl mx-auto mt-7">
      <h1 className="lg:mx-auto w-fit text-xl font-semibold mb-5">
        <span className="lg:hidden mr-1 text-2xl">&rarr;</span>
        <span className="hidden lg:block">News By Eniitan</span>
        <a
          href="https://news-by-eniitan.vercel.app"
          target="_blank"
          className="lg:hidden">
          News By Eniitan
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
          className={`mb-5 border ${
            hover && dark ? "lg:opacity-40" : ""
          } ${
            hover && !dark ? "lg:opacity-50" : ""
          } transition-opacity ease-linear`}
          src={newsPic}
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
          This News Web App is a user-friendly web application that allows
          users to enjoy news summaries from around the world across
          various categories in their feed, users can get a general grasp
          of happenings around the world without having to read much, and
          should they come across an headline that interests them, they can
          click on the headline to read the full article.
        </p>

        <h2 className="mt-5 text-lg font-bold border-b mb-3">Features</h2>

        <ul className="list-disc ml-5">
          <li className="mb-3">
            <b>News Feed:</b> Users can stay up-to-date with news summaries
            from various sources and categories in one convenient feed.
          </li>
          <li className="mb-3">
            <b>Dark Mode and Light Mode:</b> The app offers both Dark Mode
            and Light Mode options for comfortable reading in different
            lighting conditions.
          </li>
          <li className="mb-3">
            <b>User Preference Memory:</b> The web app remembers the user's
            selected mode and automatically applies it upon their return.
          </li>
          <li>
            <b>Responsive Design:</b> The application is designed to
            provide an optimal experience on phones, PCs and tablets, with
            a user-friendly menu for easy navigation between different news
            categories (on phones & tablets).
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

          <div className="text-center hidden lg:block">
            <SiNewyorktimes
              className="mb-2 mx-auto"
              size={"3rem"}
            />
            NewYorkTimes API
          </div>

          <div className="text-center lg:hidden">
            <SiNewyorktimes
              className="mb-2 mx-auto"
              size={"2rem"}
            />
            NewYorkTimes API
          </div>
        </div>

        <span className="w-fit mx-auto lg:flex flex-row mt-5 text-gray-500 hidden">
          <a
            className="lg:hover:text-red-600"
            href="https://github.com/0z-cryptik/news-by-eniitan"
            target="_blank">
            <PiGithubLogo
              className="mr-2"
              size={"1.5rem"}
              title="repositary"
            />
          </a>
          <a
            className="lg:hover:text-red-600"
            href="https://news-by-eniitan.vercel.app"
            target="_blank">
            <GoLinkExternal
              size={"1.5rem"}
              title="view site"
            />
          </a>
        </span>

        <span className="w-fit mx-auto lg:hidden flex flex-row mt-7">
          <a
            href="https://news-by-eniitan.vercel.app"
            target="_blank">
            <button
              className={`bg-transparent border p-2 rounded-xl mr-5 ${
                dark ? "" : "border-black"
              }`}>
              <GoLinkExternal
                className="inline -mt-1 mr-1"
                size={"1rem"}
              />
              View site
            </button>
          </a>

          <a
            href="https://github.com/0z-cryptik/news-by-eniitan"
            target="_blank">
            <button
              className={`bg-transparent border p-2 rounded-xl ${
                dark ? "" : "border-black"
              }`}>
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
