import React from "react";
import justeat from "../assets/justeat.jpeg";
import ubereats from "../assets/ubereats.jpeg";
import deliveroo from "../assets/deliveroo.jpeg";

const Partners = () => {
  return (
    <div className="border-2">
      <div className="mx-auto md:max-w-6xl  flex flex-col justify-center items-center gap-4 my-4 ">
        <h1 className="text-red-950 font-bold tracking-wide text-2xl">
          We are also available on...
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          <img
            src={deliveroo}
            alt={"develiberoo symbol"}
            className={`max-h-40 md:max-h-80 w-40 border-2 rounded-lg shadow-md bg-clip-border bg-gradient-to-br from-red-500 to-red-950`}
          />{" "}
          <img
            src={justeat}
            alt={"justeat symbol"}
            className={`max-h-40 md:max-h-80 w-40 border-2 rounded-lg shadow-md bg-clip-border bg-gradient-to-br from-red-500 to-red-950`}
          />{" "}
          <img
            src={ubereats}
            alt={"ubereats symbol"}
            className={`max-h-40 md:max-h-80 w-40 border-2 rounded-lg shadow-md bg-clip-border bg-gradient-to-br from-red-500 to-red-950`}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
