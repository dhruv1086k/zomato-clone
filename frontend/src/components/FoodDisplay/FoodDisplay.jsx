import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log("Current category:", category);

  return (
    <div className="w-full h-auto">
      <h1 className="text-4xl">Top dishes near you</h1>
      <div className="my-10 flex justify-center items-center flex-wrap gap-6">
        {food_list
          ?.filter(
            (food_item) => category === "All" || food_item.category === category
          )
          .map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img src={item.image} alt="" />
                <div className="w-10 h-10 rounded-full absolute bottom-2 right-2">
                  <img
                    src={assets.add_icon_white}
                    alt=""
                    className="w-full h-full rounded-full cursor-pointer"
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl">{item.name}</h1>
                  <img src={assets.rating_starts} alt="" className="w-[80px]" />
                </div>
                <p className="text-sm my-2">{item.description}</p>
                <h3 className="text-2xl text-orange-500 font-semibold">
                  ${item.price}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
