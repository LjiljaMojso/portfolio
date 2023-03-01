import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "react-scroll/modules/components/Link";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#EAE8DC]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8E8D89]">Hi, my name is</p>

        <h1 className="text-2xl sm:text-5xl font-bold text-[#E98074]">
          Ljiljana Mojsilović
        </h1>

        <h2 className="text-2xl sm:text-5xl font-bold text-[#D8C49F]">
          I'm a Junior Frontend Developer.
        </h2>

        <p className="text-[#8E8D89] py-4 max-w-[700px]">
          I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive Java Script web applications, with a special
          interest in React.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#8E8D8A] group border-2 px-6 py-3 my-2 flex items-center hover:transparent hover:border-[#E98074]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
