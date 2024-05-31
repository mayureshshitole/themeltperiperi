import React from "react";
import fries from "../assets/fries.png";
import hotwings from "../assets/hotwings.png";
import burger1 from "../assets/burger1.jpeg";

const Features = () => {
  return (
    <div className="mx-auto md:max-w-6xl">
      <section class="text-gray-100 body-font bg-gradient-to-br from-red-500 to-red-950 rounded-md my-4">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
                10K+
              </h2>
              <p class="leading-relaxed">Monthly Customers</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
                40+
              </h2>
              <p class="leading-relaxed">Menu Items</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
                20+
              </h2>
              <p class="leading-relaxed">Years In Industry</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-50">
                4
              </h2>
              <p class="leading-relaxed">Amazing Chefs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
