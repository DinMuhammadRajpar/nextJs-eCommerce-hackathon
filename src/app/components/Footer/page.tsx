import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#2A254B] px-3">
      <div className="container mx-auto w-full lg:w-[1182px] py-[40px]">
        <div className="grid grid-cols-12 text-white">
          <div className="col-start-1 col-span-6 md:col-start-1 md:col-span-2 row-start-1 ">
            <h4 className="clashDisplay text-[16px] font-normal leading-[40.68px] text-left">
              Menu
            </h4>
            <ul>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  New arrivals
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Best sellers
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Recently viewed
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Popular this week
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-start-7 col-span-6 md:col-start-3 md:col-span-2 row-start-1">
            <h4 className="clashDisplay text-[16px] font-normal leading-[40.68px] text-left">
              Categories
            </h4>
            <ul>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Crockery
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Furniture
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Homeware
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Plant pots
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Chairs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-start-1 col-span-6 md:col-start-5 md:col-span-2 md:row-start-1 row-start-2">
            <h4 className="clashDisplay text-[16px] font-normal leading-[40.68px] text-left">
              Our company
            </h4>
            <ul>
              <li>
                {" "}
                <Link
                  href="/about-page"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  About us
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Vacancies
                </Link>
              </li>
              <li>
                {" "}
                <Link href="#">Contact us</Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left mb-3"
                >
                  Privacy
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="#"
                  className="satoshi text-[14px] font-normal leading-[30.9px] text-left"
                >
                  Returns policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 md:row-start-1 row-start-2 w-full self-start"></div>
          <div className="w-full col-start-1 col-span-12 md:col-start-7 md:col-span-6 md:row-start-1 row-start-3 self-start">
            <p className="mb-3 font-clashDisplay text-[16px] font-normal leading-[40.68px] text-left ">
              Join our mailing list
            </p>

            <div className="flex">
              <input
                type="text"
                placeholder="your@email.com"
                className="bg-[#FFFFFF26] p-[10px] font-satoshi text-[16px] font-normal leading-[21.6px] text-start w-full"
              />
              <button className="bg-white py-[10px] px-[20px] font-satoshi text-[16px] font-normal leading-[21.6px] text-[#2A254B] w-[25%]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full lg:w-[1182px]">
        <div className="border border-[1px] border-[#4E4D93]"></div>

        <div className=" flex md:justify-between justify-center items-center text-white py-[20px]">
          <h5>Copyright 2022 Avion LTD</h5>
          <div className="md:flex hidden gap-2 ">
            <div>
              <CiLinkedin />
            </div>
            <div>
              <FaFacebookSquare />
            </div>
            <div>
              <FaInstagramSquare />
            </div>
            <div>
              <IoLogoSkype />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaPinterest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
