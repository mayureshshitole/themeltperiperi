import React from "react";
import hero from "../assets/hero.png";
import fries from "../assets/fries.png";
import hotwings from "../assets/hotwings.png";
import burger from "../assets/burger.png";
import {
  MdDeliveryDining,
  MdTableRestaurant,
  MdShoppingBag,
} from "react-icons/md";
import SlideScrollAnimationR from "./animations/SlideScrollAnimation";
import SlideScrollLeft from "./animations/SlideScrollLeft";
import ZoomOut from "./animations/ZoomOut";
// import SlideScrollAnimationL from "./SlideScrollAnimation";

const Hero = () => {
  return (
    <div className="my-4">
      <div className="p-1 min-h-fit">
        <div className="mx-auto md:max-w-6xl  md:my-10 flex flex-col md:flex-row  justify-between items-center">
          <div className="flex flex-col-reverse md:flex-row gap-2 md:min-w-[80%]">
            <div id="textSection">
              <div>
                <span className="hidden md:inline-block mt-4 md:mt-0 md:text-lg italic font-mono text-red-900">
                  Welcome...
                </span>
              </div>
              <div className="mt-1 md:mt-4">
                <h1 className="text-center md:text-left">
                  {" "}
                  <SlideScrollLeft>
                    {" "}
                    <span className="text-4xl md:text-5xl my-10">
                      Your{" "}
                      <span className="italic font-semibold underline text-red-600">
                        Food
                      </span>
                      estination
                      <br />{" "}
                      <span className="text-2xl md:text-4xl">
                        Where Every Bite Tells a Story!
                      </span>
                    </span>
                  </SlideScrollLeft>
                </h1>
              </div>
              <div className="text-justify mt-2 md:my-8 md:mr-10 px-2 md:px-0 mx-auto max-w-lg md:max-w-lg">
                <ZoomOut>
                  {" "}
                  <h3 className="">
                    Spice up your mealtime with our Peri Peri Chicken and
                    Burgers! Juicy chicken, grilled to perfection, topped with
                    our special peri peri sauce, all nestled in a soft bun. It's
                    a flavor explosion you won't forget!
                  </h3>
                </ZoomOut>
              </div>
              {/* <div className="mt-4">
                <div className="w-full text-center md:w-fit py-1 px-2 rounded bg-red-600 text-white font-semibold shadow-md shadow-red-900">
                  Order Now
                </div>
              </div> */}

              <div className="md:mr-4 mt-16 px-2">
                <div className="flex justify-between items-center">
                  <ZoomOut>
                    <div className="flex flex-col justify-center items-center relative w-24 md:w-32 h-20 group bg-[#FBBF24] shadow-md shadow-red-950 rounded-md">
                      <img
                        src={hotwings}
                        alt="hero image"
                        className="absolute -top-10 items-center  object-cover w-24 h-24 group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
                      />
                      <h3 className="absolute bottom-4 text-md font-semibold text-red-950">
                        Hotwings
                      </h3>
                    </div>
                  </ZoomOut>
                  <ZoomOut>
                    {" "}
                    <div className="flex flex-col justify-center items-center relative w-24 md:w-32 h-20 group bg-[#FBBF24] shadow-md shadow-red-950 rounded-md">
                      <img
                        src={burger}
                        alt="hero image"
                        className="absolute -top-10 items-center  object-cover w-24 h-24 group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
                      />
                      <h3 className="absolute bottom-4 text-md font-semibold text-red-950">
                        Burgers
                      </h3>
                    </div>
                  </ZoomOut>
                  <ZoomOut>
                    {" "}
                    <div className="flex flex-col justify-center items-center relative w-24 md:w-32 h-20 group bg-[#FBBF24] shadow-md shadow-red-950 rounded-md">
                      <img
                        src={fries}
                        alt="hero image"
                        className="absolute -top-10 items-center  object-cover w-24 h-24 group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
                      />
                      <h3 className="absolute bottom-4 text-md font-semibold text-red-950">
                        Fries n Sides
                      </h3>
                    </div>
                  </ZoomOut>
                </div>
              </div>
            </div>

            <SlideScrollAnimationR>
              <div id="imageSection">
                <div className="flex justify-center items-center">
                  <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-950 rounded-3xl shadow-md shadow-red-950 group-hover:-rotate-6 transition-all ease-in-out duration-500"></div>
                    <img
                      src={hero}
                      alt="hero image"
                      className="absolute inset-0 object-cover w-full h-full group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
                    />
                  </div>
                </div>
              </div>
            </SlideScrollAnimationR>
          </div>

          <div
            id="serviceSection"
            className="mx-auto flex flex-row md:flex-col justify-between md:justify-start items-center md:gap-6 mt-8 md:mt-0"
          >
            <div className="w-full flex justify-start items-center">
              <div className=" rounded-full border-red-900 text-red-600 p-1 border">
                <MdDeliveryDining className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mx-1 text-md">Fast Delivery</h3>
            </div>
            <div className="w-full flex justify-start items-center">
              <div className=" rounded-full border-red-900 text-red-600 p-1 border">
                <MdShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mx-1">Take away</h3>
            </div>
            <div className="w-full flex justify-start items-center">
              <div className=" rounded-full border-red-900 text-red-600 p-1 border">
                <MdTableRestaurant className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mx-1">Eat-in</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
