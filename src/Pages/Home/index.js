import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  BrowseCardData,
  CardData,
  CardData2,
  ExploreData,
} from "../../Components";
import Cards from "../../Components/Cards";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import jblbox from "../../Assets/jblbox.png";
import Vector from "../../Assets/Vector.png";
import HalfStar from "../../Assets/HalfStar.png";
import NewArrival from "../../Assets/NewArrival.png";
import Delivery from "../../Assets/Delivery.png";
import GucciCosmo from "../../Assets/GucciCusmo.png";
import womenWear from "../../Assets/womenWear.png";
import musicBand from "../../Assets/musicBand.png";
import Card2 from "../../Components/Card2";
import Secure from "../../Assets/Secure.png";
import Customer from "../../Assets/Customer.png";

const Home = () => {
  return (
    <>
      <div className="flex justify-center  gap=[-16px]">
        <Carousel autoPlay showThumbs={false} infiniteLoop className="">
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return (
              <img
                alt=""
                src={`https://source.unsplash.com/random/700x200/?fruit/${i}`}
                className=""
                // onClick={() => setImage(i)}
              />
            );
          })}
        </Carousel>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between  px-6 py-4 ">
          <span className="flex flex-col ">
            <p className="text-sm text-red-400"> Today's</p>
            <p className="font-bold text-lg">Flash Sale</p>
          </span>
          <span className="flex gap-3 px-4 pt-4 origin-bottom-right">
            <ArrowBackIcon className="!rounded-2xl border !bg-gray-200" />
            <ArrowForwardIcon />
          </span>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 p-6 s ">
          {CardData.map((item) => {
            return (
              <>
                <div className="">
                  <Cards item={item} />
                </div>
              </>
            );
          })}
        </div>
        <span className="flex justify-center items-center pt-2 p-4">
          <Button variant="contained" color="error">
            View All Products
          </Button>
        </span>
      </div>
      {/* Browse  by categories */}
      <div className="flex flex-col px-4 py-4 border p-3">
        <div className="flex justify-between">
          <span className="flex flex-col">
            <p className="text-sm text-red-500 px-3 p-3">Categories</p>
            <p className="font-bold px-4">Browse by Categories</p>
          </span>
          <span className="flex gap-3 ml-auto mt-auto origin-bottom-right">
            <ArrowBackIcon />
            <ArrowForwardIcon />
          </span>
        </div>
        <div className=" grid lg:grid-cols-6 md:grid-cols-3 gap-4">
          {BrowseCardData.map((i) => {
            return (
              <>
                <div className="border p-2 ">
                  <img src={i.product_image} alt="" className="px-3 " />
                  <button className="flex  bg-red-800 border text-center text-white w-full px-4 justify-center items-center">
                    {i.Categories}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* Best selling p[roducts] */}
      <div className="flex flex-col border px-4 py-4 ">
        <div className="grid lg:grid-cols-2 ">
          <span className=" flex flex-col px-4">
            <p className="text-sm text-red-500 p-2">This Month </p>
            <p className="font-bold ">Best Selling Product</p>
          </span>
          <span className="flex origin-bottom-right items-end ml-auto">
            <Button variant="contained" color="error">
              View All
            </Button>
          </span>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 px-3 py-4 ">
          {CardData2.map((i) => {
            return (
              <div className="flex flex-col bg-white p-2 shadow border items-center hover:scale-105 transition-all duration-500">
                <div className="flex justify-between">
                  <span className="flex justify-center items-center">
                    <img
                      alt=""
                      src={i.product_image}
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
                    {i.product_name}
                  </span>
                  <span className="flex text-red-500 gap-3 -ml-10">
                    <h1>$ {i.product_price}</h1>
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
            );
          })}
        </div>
      </div>

      <div className="flex w-full bg-black px-4 ">
        <div className="flex flex-col justify-center items-start w-1/2">
          <span className="flex flex-col px-16 ">
            <p className="text-sm  text-green-500">Categories</p>
            <p className="text-2xl text-white font-bold">
              Enhance Your Music <br />
              Experience
            </p>
          </span>
          <div className="flex justify-center items-center px-16 ">
            <div className="flex flex-col justify-center items-center w-14 h-14  m-2 rounded-full text-black bg-white ">
              <p className="text-sm">Day</p>
              <p>00</p>
            </div>
            <div className="flex flex-col justify-center items-center w-14 h-14 m-2 rounded-full text-black bg-white ">
              <p className="text-sm">Hour</p>
              <p>03</p>
            </div>
            <div className="flex flex-col justify-center items-center w-14 h-14  m-2 rounded-full text-black bg-white ">
              <p className="text-sm">Minutes</p>
              <p>59</p>
            </div>
            <div className="flex flex-col justify-center items-center w-14 h-14  m-2 rounded-full text-black bg-white ">
              <p className="text-sm">Second</p>
              <p>56</p>
            </div>
          </div>
          <span className="flex justify-center items-start px-16">
            <button className="w-24 text-lg bg-green-500 border border-green-500 ">
              Buy Now
            </button>
          </span>
        </div>
        <div className="flex w-1/2">
          <img src={jblbox} alt="" className="px-3 py-4" />
        </div>
      </div>

      <div className="flex flex-col border px-4 py-4 ">
        <div className="grid lg:grid-cols-2 ">
          <span className=" flex flex-col px-4">
            <p className="text-sm text-red-500 p-2">This Month </p>
            <p className="font-bold ">Best Selling Product</p>
          </span>
          <span className="flex origin-bottom-right items-end ml-auto">
            <Button variant="contained" color="error">
              View All
            </Button>
          </span>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 p-6 s ">
          {ExploreData.map((item) => {
            return (
              <>
                <div className="">
                  <Card2 item={item} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/*    New Arrivals */}

      <div className="flex flex-col ">
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-3">
            <span className="flex h-6 w-4 bg-red-500"></span>
            <p className="text-red-400">Featured </p>
          </div>
          <span className="text-lg font-semibold">New Arrival</span>
        </div>
        <div className="flex justify-center items-center gap-3 ">
          <div className="flex gap-4 bg-black">
            <span className="origin-bottom-right">
              <img src={NewArrival} alt="" className="" />
            </span>
          </div>
          <div className="flex flex-col  ">
            <div className="bg-black h-auto w-auto ">
              <span className="origin-bottom-right">
                <img src={womenWear} alt="" className="" />
              </span>
            </div>
            <div className="flex gap-3 justify-center p-4 items-center">
              <div className="bg-black h-auto  w-auto ">
                <span className="origin-bottom-right">
                  <img src={musicBand} alt="" className="" />
                </span>
              </div>
              <div className="bg-black h-auto w-auto ">
                <span className="origin-bottom-right">
                  <img src={GucciCosmo} alt="" className="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   Terms and condition */}

      <div className="flex justify-center items-center p-6">
        <div className="flex flex-col justify-center items-center gap-3 p-4">
          <div className="flex flex-col gap-4 ">
            <div className="bg-gray-400 rounded-full border-4 gap-3  border-gray-400">
              <img src={Delivery} alt="" className="rounded-full  bg-black" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">FREE AND FAST DELIVERY</p>
            <p className="text-sm text-gray-400 text-center">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        {/* privacy  */}
        <div className="flex flex-col justify-center items-center gap-3 p-4">
          <div className="flex flex-col gap-4 ">
            <div className="bg-gray-400 rounded-full border-4 gap-3  border-gray-400">
              <img src={Customer} alt="" className="rounded-full  bg-black" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">24/7 CUSTOMER SERVICE</p>
            <p className="text-sm text-gray-300 text-center">
              Friendly 24/7 customer support{" "}
            </p>
          </div>
        </div>
        {/* security */}
        <div className="flex flex-col justify-center items-center gap-3 p-4">
          <div className="flex flex-col gap-4 ">
            <div className="bg-gray-400 rounded-full border-4 gap-3  border-gray-400">
              <img src={Secure} alt="" className="rounded-full  bg-black" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">MONEY BACK GUARANTEE</p>
            <p className="text-sm text-gray-300 text-center">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
