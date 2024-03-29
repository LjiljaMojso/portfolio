import React from "react";
import { Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#EAE8DC] text-[#8E8D89]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 text-[#D8C3A4]">
            <p className="text-3xl font-bold inline border-b-4 border-[#E98074]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <Slide cascade={true} direction="right">
            <div className="sm:text-right text-2xl font-bold">
              <p>
                Hi. I'm Ljiljana, nice to meet you. Please take a look around.
              </p>
            </div>
          </Slide>
          <Slide>
            <div>
              <p>
                I am Bachelor of Economics who went on a road to become a
                frontend developer. I was learning Front-End Development for
                more than one year, slowly and steadily, and during that time i
                fell in love with Java Script and ReactJs.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
