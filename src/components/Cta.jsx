import React from "react";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";
import halal from "../assets/halal.png";
import discount from "../assets/discount.png";
import SlideScrollAnimationR from "./animations/SlideScrollAnimation";
import SlideScrollLeft from "./animations/SlideScrollLeft";
const Cta = () => {
  const photos = [p1, p2, p3, p4];

  return (
    <div className="mx-auto md:max-w-6xl ">
      <div className="relative rounded-lg bg-gradient-to-br from-red-600 to-red-950 py-8">
        {/* SVG Background Paths */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0 rounded-lg"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#FBBF24"
            d="M20 95c35-65 70-60 115-40s60 85 115 40c55-45 25-130 5-150s-70-20-95 5c-25 25-50 10-95 5s-70 85-110 110c-40 25-70 65-35 110z"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-full h-full z-0 rounded-lg
        "
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            fill="#FBBF24"
            d="M195 90c-35-65-70-60-115-40s-60 85-115 40c-55-45-25-130-5-150s70-20 95 5c25 25 50 10 95 5s70 85 110 110c40 25 70 65 35 110z"
          />
        </svg>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to elevate your{" "}
            <span className="italic text-red-950 font-bold">Test Buds</span>?
          </h2>
          <p className="text-lg text-gray-900 mb-8">
            <span className="italic text-red-950 font-semibold">
              Free home delivery
            </span>{" "}
            across Colchester City on orders above £15
          </p>
          <SlideScrollAnimationR>
            <div className="flex flex-wrap justify-center gap-4 ">
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className={`max-h-40 md:max-h-80 border-2 rounded-lg shadow-md bg-clip-border bg-gradient-to-br from-red-500 to-red-950`}
                  style={{
                    transform: `rotate(${index % 2 === 0 ? "-" : ""}${
                      index * 5
                    }deg)`,
                  }}
                />
              ))}
            </div>
          </SlideScrollAnimationR>
          <div className="flex justify-center mt-8">
            <button className="bg-white text-red-950 py-3 px-6 rounded-full text-lg font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-purple-400">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <SlideScrollAnimationR>
        <div className="flex flex-col justify-center items-center gap-2 mt-8">
          <h2 className="text-red-950 font-bold tracking-wide text-3xl">
            We Are Halal
          </h2>
          <img
            src={halal}
            alt={"halal symbol"}
            className={`max-h-40 md:max-h-80 border-2 rounded-lg shadow-md bg-clip-border bg-gradient-to-br from-red-500 to-red-950`}
          />
          <p className="font-thin text-center px-4">
            Savor the taste of trust and quality with our delectable halal
            cuisine, served with care and crafted with passion.
          </p>
        </div>
      </SlideScrollAnimationR>
      <SlideScrollLeft>
        {" "}
        <div className="flex flex-col justify-center items-center gap-2 mt-8">
          <img
            src={discount}
            alt={"discount image"}
            className={`max-h-80 md:max-h-80 border-2 rounded-lg shadow-md bg-clip-border bg-gradient-to-br from-red-500 to-red-950`}
          />
          <p className="font-medium italic mb-4 text-center px-4 text-red-950 ">
            What are you waiting for? Come, Hurry Up!
          </p>
        </div>
      </SlideScrollLeft>
    </div>
  );
};

export default Cta;
