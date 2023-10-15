import { useList } from "./stateProvider";

export const About = () => {
  const { viewMenu, dark } = useList();
  return (
    <article
      className={`lg:mt-6 mt-3 lg:ml-[3rem] lg:w-[60%] min-[100px]:max-md:px-5`}>
      <h1 className="text-3xl hidden lg:block font-semibold border-b  mb-4">
        About me
      </h1>

      <p>
        I am a 23-year-old software developer with an insatiable thirst for
        knowledge and capacity. I had my first experience with programming
        back in 2018 when I tinkered with an HTML & CSS course and learned
        some basics of frontend web development. Unfortunately, I didn't
        pursue web development further at the time because I had schoolwork
        to attend to. Two years later, I found a better school/work
        balance, and I started working in the crypto industry as a content
        writer, content manager, and eventually, a community manager.
      </p>

      <p className="mt-3">
        Fast forward to early 2022, I found myself drawn towards software
        development once again, and eventually, I acquired a Python course.
        I learned Python for a few months, but then I started finding it
        boring. I didn't know why at the time, but now I realize it's
        because I wasn't clear on the type of problems I wanted to solve
        with it. I just knew I wanted to become a developer and followed
        the advice of many YouTube programmers who recommended Python as a
        good starting point. I was learning Python syntax without really
        knowing how to create meaningful software with it.
      </p>

      <p className="mt-3">
        Then, one day, I sat myself down and asked the question I should
        have asked a long time ago:{" "}
        <q>
          <i>What kind of software do I want to build?</i>
        </q>{" "}
        It was then that I realized I wanted to create websites and mobile
        apps with incredible user experiences. So, I embarked on a new
        journey as a frontend developer, and I'm never looking back.
      </p>
    </article>
  );
};

export const PhoneAbout = () => (
  <div className="lg:hidden">
    <About />
  </div>
);
