import React from "react";

import { Zoom } from "react-awesome-reveal";
const Work = ({ showWork }) => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-[#8E8D89] bg-[#EAE8DC] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#D8C3A4] border-[#E98074]">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {showWork.map((work) => {
            return (
              <Zoom>
                <div
                  style={{ backgroundImage: `url(${work.imgSrc})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                >
                  {/* Hover Effects */}
                  <div className="opacity-0 group-hover:opacity-100 box-border hover:box-content p-10">
                    <span className="text-base text-[#8E8D89] text-center">
                      {work.description}
                    </span>
                    <div className="pt-8 text-center">
                      <a href={work.demolink}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                          Demo
                        </button>
                      </a>
                      <a href={work.codelink}>
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
