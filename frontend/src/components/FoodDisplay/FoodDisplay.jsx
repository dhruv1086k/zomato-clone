import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

import { FaCcDiscover, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FoodDisplay = ({ category }) => {
  const { food_list, cartCounter, addToCart, removeFromCart } =
    useContext(StoreContext);

  return (
    <div className="w-full h-auto">
      <h1 className="text-4xl">Top dishes near you</h1>
      <div className="my-10 flex justify-center items-center flex-wrap gap-6">
        {food_list
          ?.filter(
            (food_item) => category === "All" || food_item.category === category
          )
          .map((item, idx) => {
            const count = cartCounter[idx] || 0;

            return (
              <div
                key={idx}
                className="w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="relative">
                  <img src={item.image} alt="" />
                  <div
                    className={`${
                      count <= 0 ? "w-10" : "w-24"
                    } h-10 bg-white rounded-full absolute bottom-2 right-2`}
                  >
                    {count <= 0 ? (
                      <div className="w-full h-full flex justify-center items-center">
                        <img
                          src={assets.add_icon_white}
                          alt=""
                          className="w-10 h-10 rounded-full cursor-pointer"
                          onClick={() => addToCart(idx)}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-between items-center p-2">
                        <span
                          className="text-sm cursor-pointer"
                          onClick={() => addToCart(idx)}
                        >
                          <img
                            src={assets.add_icon_green}
                            alt=""
                            className="w-6 h-6 rounded-full cursor-pointer"
                          />
                        </span>
                        <h4 className="text-lg">{count}</h4>
                        <span
                          className="text-sm cursor-pointer"
                          onClick={() => removeFromCart(idx)}
                        >
                          <img
                            src={assets.remove_icon_red}
                            alt=""
                            className="w-6 h-6 rounded-full cursor-pointer bg-cover"
                          />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl">{item.name}</h1>
                    <img
                      src={assets.rating_starts}
                      alt=""
                      className="w-[80px]"
                    />
                  </div>
                  <p className="text-sm my-2">{item.description}</p>
                  <h3 className="text-2xl text-orange-500 font-semibold">
                    ${item.price}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FoodDisplay;
