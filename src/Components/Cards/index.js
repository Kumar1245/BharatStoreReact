import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Vector from "../../Assets/Vector.png";
import HalfVector from "../../Assets/HalfStar.png";

// export const BasicRating = () => {
//   const [value, setValue] = useState(2);
//   return (
//     <>
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event) => {
//           setValue(event.value);
//         }}
//       />
//       <Typography component="legend">Read only</Typography>
//       <Rating name="read-only" value={value} readOnly />
//     </>
//   );
// };

const Cards = (Props) => {
  return (
    <>
      <div className="flex flex-col bg-white p-2 shadow border hover:scale-105 transition-all duration-500">
        <span className=" flex justify-between ">
          <span className="bg-red-400 h-6 text-sm w-8">-45%</span>
          <div className="flex flex-col p-3 -mr-3">
            <FavoriteBorderIcon />
            <RemoveRedEyeIcon />
          </div>
        </span>

        <span className="flex justify-center items-center pb-2 -mt-10 mx-3 ">
          <img
            alt=""
            src={Props.item.product_image}
            className="flex justify-center h-40 w-40 items-center mx-3 bg-gray-200"
          />
        </span>
        <p className="whitespace-nowrap text-sm items-start font-bold ">
          {Props.item.product_name}
        </p>
        <span className=" flex flex-col text-black">
          <p className="text-sm text-red-600">
            ${Props.item.product_price} <s className="text-black px-2">$360</s>
          </p>
          <span className="flex gap-2">
            <img src={Vector} alt="" />
            <img src={Vector} alt="" />
            <img src={Vector} alt="" />
            <img src={HalfVector} alt="" />
          </span>
        </span>
        <span className="flex justify-center items-center p-4 ">
          <button className="text-white bg-gradient-to-r from-[#DE1C34] to-[#520B29]  w-full rounded-full transition-all duration-500 hover:rounded-lg">
            Add to Cart
          </button>
        </span>
      </div>
      {/* New Arrival Product  */}
    </>
  );
};

export default Cards;
