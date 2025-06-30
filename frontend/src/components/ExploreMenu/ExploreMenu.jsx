import React from "react";
import { assets, menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="my-12 animation-fadein">
      <h1 className="text-4xl">Explore our menu</h1>
      <p className="my-4 text-gray-500">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your <br /> cravings and elevate your dining
        experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list flex overflow-x-scroll gap-16">
        {menu_list.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[150px] h-[250px] flex flex-col items-center justify-center"
          >
            <img src={item.menu_image} alt="" className="w-full h-auto" />
            <h4 className="text-2xl my-2 text-gray-600">{item.menu_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
