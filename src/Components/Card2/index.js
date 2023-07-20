import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Vector from "../../Assets/Vector.png";
import HalfStar from "../../Assets/HalfStar.png";

const Card2 = (props) => {
  return (
    <>
      <div className="flex flex-col bg-white p-2 shadow border items-center hover:scale-105 transition-all duration-500">
        <div className="flex justify-between">
          <span className="flex justify-center items-center">
            <img
              alt=""
              src={props.item.product_image}
              className="p-3 h-40 w-40"
            />
          </span>
          <span className=" flex flex-col h-auto w-auto gap-3">
            <FavoriteBorderIcon className="-mr-3" />
            <RemoveRedEyeIcon />
          </span>
        </div>

        <div className="flex flex-col">
          <span className="whitespace-nowrap text-sm font-bold -ml-10">
            {props.item.product_name}
          </span>
          <span className="flex text-red-500 gap-3 -ml-10">
            <h1>$ {props.item.product_price}</h1>
            <h2 className="gap-3 line-through text-gray-400">$600</h2>
          </span>
          <span className="flex -ml-10 gap-2">
            <img src={Vector} alt="" />
            <img src={Vector} alt="" />
            <img src={Vector} alt="" />
            <img src={Vector} alt="" />
            <img src={HalfStar} alt="" />
            <p className="gap-4 text-sm  ">(40)</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card2;
