import { Link } from "react-router-dom";
import PostsList from "../components/PostsList";
import WorksList from "../components/WorksList";

const Home: React.FC = () => {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
        <div className="w-full lg:w-3/5 lg:pr-12">
          <h2 className="font-bold text-4xl lg:text-5xl leading-10 mb-8 lg:mb-12">
            Hi, I am John,
            <br /> Creative Technologist
          </h2>
          <p className="mb-6 lg:mb-10">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="rounded-lg px-4 py-2 text-white">
            Download Resume
          </button>
        </div>
        <div className="mb-8 lg:mb-0">
          <img
            src="../../public/avatar.png"
            className="w-full h-auto"
            alt="avatar"
          />
        </div>
      </section>
      <section className="mt-12 lg:mt-16 relative">
        <h4 className="text-2xl lg:text-3xl mb-4 lg:mb-6">Recent posts</h4>
        <Link
          to="/blog"
          className="absolute right-0 top-0 text-cyan-500 hover:underline cursor-pointer"
        >
          View all
        </Link>
        <PostsList />
      </section>
      <section className="mt-12 lg:mt-16">
        <h4 className="text-2xl lg:text-3xl mb-4 lg:mb-6">Featured works</h4>
        <WorksList />
      </section>
    </div>
  );
};

export default Home;
