import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SlideScrollLeft from "../components/animations/SlideScrollLeft";
import SlideScrollAnimationR from "../components/animations/SlideScrollAnimation";
import metltlogo from "../assets/meltlogo.png";

const MenuItem = ({ title, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <SlideScrollAnimationR>
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-gray-800 font-bold">{item.price}</p>
          </div>
        </SlideScrollAnimationR>
      ))}
    </div>{" "}
  </div>
);

const Menu = () => {
  const menu = [
    {
      title: "Peri Peri Chicken",
      items: [
        {
          name: "1/4 Peri Peri Chicken",
          description: "Lemon & Herb, Mango & Lime, Hot & Extra Hot",
          price: "£3.45",
        },
        { name: "1/2 Peri Peri Chicken", price: "£7.45" },
        { name: "Whole Peri Peri Chicken", price: "£12.95" },
        { name: "5 Peri Peri Wings", price: "£3.95" },
        { name: "10 Peri Peri Wings", price: "£7.95" },
      ],
    },
    {
      title: "The Melt Burgers",
      items: [
        { name: "Beef Burger", price: "£2.95" },
        { name: "Grilled Chicken Burger", price: "£5.95" },
        { name: "Fillet Burger", price: "£5.95" },
        {
          name: "The Goody Two Shoes",
          price: "£5.95",
          description:
            "Veggie Burger with falafal, halloumi, lettuce, tomato, mayo",
        },
      ],
    },
    {
      title: "The Melt Kebabs",
      items: [
        { name: "Lamb Doner", price: "£8.95" },
        { name: "Chicken Doner", price: "£14.50" },
        { name: "Mixed Doner", price: "£5.95" },
      ],
    },
    // Add more sections here...
  ];
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12 px-4 bg-gradient-to-br from-red-500 to-red-950">
        <h1 className="text-4xl font-bold mb-8 ">Menu</h1>
        {menu.map((section, index) => (
          <MenuItem key={index} title={section.title} items={section.items} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="relative w-72 h-72 md:w-96 md:h-96 group ">
          <img
            src={metltlogo}
            alt="logo melt peri peri image"
            className="absolute inset-0 object-cover rounded w-full h-full group-hover:scale-125 group-hover:rotate-2 transition-all ease-in-out duration-500"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
