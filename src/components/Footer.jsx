import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 mt-5 w-full sm:max-w-6xl mx-auto  border-t  border-red-400 rounded-t shadow-sm px-1 sm:px-4 py-2">
      <div className=" flex justify-center items-center px-2">
        <div>
          {" "}
          <span className="text-red-950"> &copy;</span> 2023-
          <span className=" "> The Melt Peri Peri</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
