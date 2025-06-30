import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex w-full h-[12vh] justify-between items-center">
      <img src={assets.logo} alt="" className="w-[150px] h-auto" />
      <ul className="flex justify-center items-center gap-7 max-[948px]:hidden">
        <li
          className={`text-gray-600 relative ${
            menu === "home" && "activeNavLink"
          }`}
          onClick={() => setMenu("home")}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={`text-gray-600 relative ${
            menu === "menu" && "activeNavLink"
          }`}
          onClick={() => setMenu("menu")}
        >
          <a href="#">Menu</a>
        </li>
        <li
          className={`text-gray-600 relative ${
            menu === "mobileApp" && "activeNavLink"
          }`}
          onClick={() => setMenu("mobileApp")}
        >
          <a href="#">Mobile-app</a>
        </li>
        <li
          className={`text-gray-600 relative ${
            menu === "contactUs" && "activeNavLink"
          }`}
          onClick={() => setMenu("contactUs")}
        >
          <a href="#">Contact us</a>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-12 max-xl:gap-6">
        <img
          src={assets.search_icon}
          alt=""
          className="w-6 h-6 cursor-pointer"
        />
        <div className="relative">
          <img
            src={assets.basket_icon}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />
          <div className="w-2 h-2 bg-red-400 rounded-full absolute -right-1 -top-1 animate-ping"></div>
        </div>
        <button className="px-5 py-2 border-2 border-amber-400 rounded-full cursor-pointer hover:bg-amber-100 transition-all duration-200 ease-in">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
