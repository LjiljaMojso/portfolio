import React from "react";
import RecipeApp from "../assets/RecipeApp.png";
import appsmall from "../assets/appsmall.png";
import IFoodApp from "../assets/IFoodApp.png";
import MoviesFilter from "../assets/MoviesFilter.png";
import books from "../assets/books.png";
import Shop from "../assets/Shop.png";
import { Zoom } from "react-awesome-reveal";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#8E8D89] bg-[#EAE8DC]">
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
          <Zoom>
            <div
              style={{ backgroundImage: `url(${RecipeApp})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-base text-[#8E8D89] tracking-wider">
                  App for recipes search from Edamam - Recipe Search API.
                  Created with HTML, CSS, JS
                </span>
                <div className="pt-8 text-center">
                  <a href="https://ljiljamojso.github.io/recipeApp/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/LjiljaMojso/recipeApp">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={1000}>
            <div
              style={{ backgroundImage: `url(${appsmall})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl text-[#8E8D89] tracking-wider">
                  React JS Application/Search Weather App
                </span>
                <div className="pt-8 text-center">
                  <a href="https://ljiljamojso.github.io/search-weather-app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/LjiljaMojso/search-weather-app">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>

          {/* Grid Item */}
          <Zoom delay={1500}>
            <div
              style={{ backgroundImage: `url(${IFoodApp})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl text-[#8E8D89] tracking-wider">
                  Final project in vanila java script for my coding school
                </span>
                <div className="pt-8 text-center">
                  <a href="https://ljiljamojso.github.io/IFood-app/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/LjiljaMojso/IFood-app">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={2000}>
            <div
              style={{ backgroundImage: `url(${MoviesFilter})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-base  text-[#8E8D89] tracking-wider">
                  Simple app that show list of hard-coded movies. With options
                  to search movie from list or delete a movie. HTML, CSS,
                  Javascript
                </span>
                <div className="pt-8 text-center">
                  <a href="https://ljiljamojso.github.io/js-events-project/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/LjiljaMojso/js-events-project">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>

          {/* Grid Item */}
          <Zoom delay={2500}>
            <div
              style={{ backgroundImage: `url(${books})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl text-[#8E8D89] tracking-wider">
                  App for making a list of books with CRUD functions and react
                  context. For backend I used json server.
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/LjiljaMojso/vezba03">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay={3000}>
            <div
              style={{ backgroundImage: `url(${Shop})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-xl text-[#8E8D89] tracking-wider">
                  A simple eShop demo project
                </span>
                <div className="pt-8 text-center">
                  <a href="https://ljiljamojso.github.io/simple-eShop/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/LjiljaMojso/simple-eShop">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-400 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Work;
