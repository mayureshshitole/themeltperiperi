import React from "react";
import fries from "../assets/fries.png";
import hotwings from "../assets/hotwings.png";
import burger1 from "../assets/burger1.jpeg";
import peri from "../assets/peri.jpeg";
import doner from "../assets/doner.jpeg";
import SlideScrollAnimationR from "./animations/SlideScrollAnimation";

const ProductsSection = () => {
  return (
    <div className="p-2 border-2">
      <div className="mx-auto md:max-w-6xl my-4 ">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-900">
          Trending Menu🔥
        </h1>
        <p className='mx-auto md:max-w-3xl text-center font-light my-1 px-4'>
          Indulge in the sizzling sensations of our trending delights: fiery
          Peri Peri chicken, mouthwatering burgers, and succulent Doner Kebabs -
          the flavors that keep our patrons coming back for more!
        </p>
        <div className="flex flex-wrap grid-cols-1 md:grid-col-2 md:gap-4 gap-2 my-4 ">
          <SlideScrollAnimationR><div
            id="peri"
            className="w-full md:w-auto flex flex-row justify-between items-center gap-2 md:gap-3 bg-gradient-to-br from-red-600 to-red-950 border-b-2 rounded-lg shadow-md shadow-red-200 p-2 "
          >
            <div className="w-40 md:w-60 h-40 md:h-60 group bg-white shadow shadow-red-200 rounded-md">
              {" "}
              <img
                src={peri}
                alt="peri peri image"
                className=" items-center rounded-md object-cover group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
              />
            </div>{" "}
            <div className="flex flex-col justify-between items-start text-white">
              <div>
                <h1 className="font-semibold text-3xl md:text-4xl mb-2">
                  Peri Peri Chicken
                </h1>
              </div>
              <div className=" gap-2 md:text-xl">
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">1/4</span> Peri
                    Peri Chicken
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">1/2</span> Peri
                    Peri Chicken
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">Whole</span>{" "}
                    Peri Peri Chicken
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">5</span> Peri
                    Peri wings
                  </h2>
                  <p>£10.10</p>
                </div>
              </div>
            </div>
          </div></SlideScrollAnimationR>

          <SlideScrollAnimationR><div
            id="burgers"
            className="w-full md:w-auto flex flex-row justify-between items-center gap-2 md:gap-3 bg-gradient-to-br from-red-600 to-red-950 border-b-2 rounded-lg shadow-md shadow-red-200 p-2"
          >
            <div className="flex flex-col justify-between items-start  text-white">
              <div>
                <h1 className="font-semibold text-3xl md:text-4xl mb-2">
                  The Melt Burgers
                </h1>
              </div>
              <div className="gap-2 md:text-xl ">
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    The Melt{" "}
                    <span className="font-semibold text-[#FBBF24]">BEEF</span>{" "}
                    Burger
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    The Melt{" "}
                    <span className="font-semibold text-[#FBBF24]">CHICKEN</span>{" "}
                    Burger
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    The Melt{" "}
                    <span className="font-semibold text-[#FBBF24]">Fillet</span>{" "}
                    Burger
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>The Goody Two Shoes</h2>
                  <p>£10.10</p>
                </div>
              </div>
            </div>{" "}
            <div className="w-40 md:w-60 h-40 md:h-60 group bg-white shadow shadow-red-200 rounded-md">
              {" "}
              <img
                src={burger1}
                alt="beef burger image"
                className=" items-center rounded-md object-cover group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
              />
            </div>{" "}
          </div>
</SlideScrollAnimationR>
          <SlideScrollAnimationR><div
            id="kebabs"
            className="w-full md:w-auto flex flex-row justify-between items-center gap-2 md:gap-3 bg-gradient-to-br from-red-600 to-red-950 border-b-2 rounded-lg shadow-md shadow-red-200 p-2"
          >
            <div className="w-40 md:w-60 h-40 md:h-60 group bg-white shadow-md shadow-red-200 rounded-md">
              {" "}
              <img
                src={doner}
                alt="doner kebab image"
                className=" items-center rounded-md object-cover group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
              />
            </div>{" "}
            <div className="flex flex-col justify-between items-start ">
              <div>
                <h1 className="font-semibold text-3xl md:text-4xl mb-2 text-white">
                  The Melt Kebabs
                </h1>
              </div>
              <div className="w-full gap-2 md:text-xl text-white">
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">Lamb</span>{" "}
                    Doner Kebab
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">Chicken</span>{" "}
                    Doner Kebab
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">Mixed</span>{" "}
                    Doner Kebab
                  </h2>
                  <p>£10.10</p>
                </div>
                <div className="flex flex-row justify-between items-center border-b ">
                  <h2>
                    <span className="font-semibold text-[#FBBF24]">5</span> Peri
                    Peri wings
                  </h2>
                  <p>£10.10</p>
                </div>
              </div>
            </div>
          </div></SlideScrollAnimationR>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
