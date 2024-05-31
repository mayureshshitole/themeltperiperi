import React from "react";
import metltlogo from "../assets/meltlogo.png";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.51845995227!2d0.8931648764940404!3d51.88800197190229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d905f2d568aa17%3A0x5ba364e5bd927ee8!2sThe%20Malt%20Peri%20Peri!5e0!3m2!1sen!2suk!4v1715283967889!5m2!1sen!2suk"
              //   style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  18/19 church walk, off head street, co1 1ns
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  contact@meltperiperi.co.uk
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">01206-234959</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 group ">
            <img
              src={metltlogo}
              alt="logo melt peri peri image"
              className="absolute inset-0 object-cover rounded w-full h-full group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
