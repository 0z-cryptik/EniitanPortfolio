import { useList } from "../hooks/stateProvider";

export const Next = () => {
  const { setViewMenu } = useList();

  return (
    <section className="lg:mt-[5rem] mt-5 min-[412px]:max-[760px]:h-[44vh] lg:mx-[3rem] max-[912px]:px-3 md:max-lg:h-[59vh]">
      <h1 className="lg:text-3xl text-lg font-semibold lg:border-b mb-4">
        What's next for me?
      </h1>

      <article>
        <p>
          My next big plan is to dive into backend development with Node JS
          and Mongo DB or SQL for the database so that I can build fully
          functional web apps, also I plan to learn Typescript because many
          jobs require it.
        </p>

        <p className="mt-3">
          But before all that excitement, I'm hunting for my first job to
          kickstart this journey. I'm eager to roll up my sleeves, learn on
          the job, and grow with the right opportunity. So, here I am,
          hoping you might be the one to give that to me.
        </p>

        <p
          onClick={() => setViewMenu(true)}
          className="text-blue-600 underline mt-3 lg:hidden">
          Contact Me
        </p>
      </article>
    </section>
  );
};

export const PhoneNext = () => (
  <div className="lg:hidden">
    <Next />
  </div>
);
