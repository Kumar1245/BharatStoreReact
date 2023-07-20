import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import BharatStore from "../../Assets/bharatstore.png";

import { MockData } from "../../Components";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="hidden lg:flex md:flex justify-between bg-gradient-to-r from-[#DE1C34] to-[#520B29]  ">
        <span className="flex px-6 py-2 items-center gap-4 text-white ">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/1851/1851070.png"
            alt=""
            className="h-6 w-6 ml-5"
          /> */}
          <PhoneInTalkIcon />
          <p className="w-6  text-white">09887654211</p>
        </span>
        <span className="flex gap-3 justify-center items-center px-10 text-white">
          {/* {MockData.map((i) => {
            return (
              <>
                <p>{i.image_facebook}</p>
                <p>{i.image_Insta}</p>
                <p>{i.image_twitter}</p>
                <p>{i.image_limkdn}</p>
              </>
            );
          })} */}
          <FacebookIcon className="h-4 w-4" />
          <InstagramIcon className="h-4 w-4" />
          <TwitterIcon className="h-4 w-4" />
          <LinkedIcon className="h-4 w-4" />

          <button className="flex  items-center ml-4 gap-2 border-b-2 border-gray-400 text-gray-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <g id="map-pin">
                <path
                  id="Vector"
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            Location
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-down">
                <path
                  id="Vector"
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </span>
      </div>
      <div className="bg-gradient-to-r from-red-200 to-gray-300">
        <div className="flex justify-between ">
          <span>
            <img src={BharatStore} alt="" />
          </span>
          <span className="flex justify-center items-center gap-3 px-8 ">
            <input
              type="text"
              name=""
              value=""
              placeholder="Search Here.."
              className="bg-gradient-to-r from-[#DE1C34] to-[#520B29] items-center text-gray-400 w-[350px] h-8 rounded-2xl px-3"
            />
            <ShoppingCartIcon />
            <NotificationImportantIcon />
            <AccountBalanceWalletIcon />
            <Button
              variant="contained"
              size="small"
              className="!bg-gradient-to-r from-[#DE1C34] to-[#520B29] !rounded-xl"
            >
              Login
            </Button>
          </span>
        </div>
        <Divider className="!px-4" />
        <div className="flex gap-3 px-20 py-4 bg-gradient-to-r from-red-200 to-gray-300">
          <Button
            variant="outlined"
            className="!bg-gradient-to-r from-[#DE1C34] to-[#520B29] !rounded-2xl !text-white  "
          >
            All Product
          </Button>
          <Button
            variant="outlined"
            className="!rounded-2xl !text-white !border-[#46383e] !border-t-0"
            endIcon={<KeyboardArrowDownIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
