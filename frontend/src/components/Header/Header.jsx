import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[60vh] bg-[url('./assets/header_img.png')] bg-cover bg-center bg-no-repeat rounded-2xl space-y-5 pt-28 pl-18 animation-fadein">
      <h1 className="text-7xl text-white font-semibold text-shadow-lg text-shadow-black">
        Order your favourite <br />
        food here
      </h1>
      <p className="text-white w-3/5 text-lg text-shadow-md text-shadow-black">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <button className="px-8 py-2 bg-white rounded-full cursor-pointer">
        Sign in
      </button>
    </div>
  );
};

export default Header;
