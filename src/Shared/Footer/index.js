import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIcon from "@mui/icons-material/LinkedIn";
import bharatstore from "../../Assets/bharatstore.png";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-[#feebef] text-white">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 justify-start ">
        <div className="px-3 py-3 bg-white shadow-2xl border-r-2 hidden lg:grid">
          <img src={bharatstore} alt="" className="hidden lg:flex md:flex" />
          <span className="flex  px-10 items-center text-[#500b28]">
            <FacebookIcon className="h-4 w-4" />
            <InstagramIcon className="h-4 w-4" />
            <TwitterIcon className="h-4 w-4" />
            <LinkedIcon className="h-4 w-4" />
          </span>
        </div>
        <div className="flex flex-col justify-start text-[#9d6e80]">
          <p className="text-[#500b28] text-xl px-3 py-3 text-bold">
            Our Company
          </p>
          <p className="px-4 py-1"> Home</p>
          <p className="px-4 py-1">About Us</p>
          <p className="px-4 py-1">Contact Us</p>
          <p className="px-4 py-1">Product</p>
          <p className="px-4 py-1">Blog</p>
        </div>
        <div className="flex flex-col justify-start text-[#9d6e80]">
          <p className="text-[#500b28] text-xl px-3 py-3">Inspire Me</p>
          <p className="px-3 py-1"> Blog</p>
          <p className="px-3 py-1">News</p>
          <p className="px-3 py-1">Store</p>
          <p className="px-3 py-1">Invester Relationship</p>
        </div>
        <div className="flex flex-col justify-start text-[#9d6e80]">
          <p className="text-[#500b28] text-xl px-3 py-3 text-bold">Help</p>
          <p className="px-3 py-1"> Privacy & Policy</p>
          <p className="px-3 py-1">Help Desk</p>
          <p className="px-3 py-1">Return & Refund Policy </p>
        </div>
        <div className="flex flex-col justify-start text-[#9d6e80]">
          <p className="text-[#46383e] text-xl px-3 py-3 text-bold">FAQ</p>
          <span className="pr-8  gap-4 py-6">
            <Button
              variant="contained "
              className="!bg-gradient-to-r from-[#DE1C34] to-[#520B29] !rounded-xl pr-4"
            >
              Enter Number
            </Button>
          </span>
          <span className="pr-8 py-6 ">
            <Button
              variant="contained"
              size="small"
              className="!bg-gradient-to-r from-[#DE1C34] to-[#520B29] !rounded-xl pr-4"
            >
              Send OTP
            </Button>
          </span>
        </div>
      </div>
      <div className="flex  bg-[#500b28] justify-center items-center">
        <span className=" flex text-white items-center px-2 py-2 text-sm">
          @2023 Bhaarat Store Pvt. Ltd. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
