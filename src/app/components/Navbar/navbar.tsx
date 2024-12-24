import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="w-full px-3">
        <div className="flex justify-between items-center py-4">
          <div className="md:block hidden">
            <CiSearch />
          </div>
          <div>
            <h1 className="font-satoshi text-base font-bold leading-6 text-left cursor-pointer">
              <Link href="/">Avion</Link>
            </h1>
          </div>
          <div className="md:flex gap-3 hidden">
            <Link href="/shopping-cart">
              <BsCart3 />
            </Link>
            <FaRegUserCircle />
          </div>
          <div className="hamburger block md:hidden cursor-pointer">
            <div className="flex gap-2 md:hidden cursor-pointer">
              <CiSearch />
              <RxHamburgerMenu />
            </div>

            <div className="hidden">
              <ul>
                <li>
                  <Link
                    href={"#"}
                    className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
                  >
                    Plants pots
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
                  >
                    Ceramics
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
                  >
                    Tables
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
                  >
                    Chairs
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
                  >
                    Crockery
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
                  >
                    Crockery
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
                  >
                    Cutlery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-[1px] border-solid border-[#0000001A]"></div>
        <div className="md:block hidden">
          <ul className="flex justify-center gap-5 py-4">
            <li>
              <Link
                href={"/Product-Listing"}
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
              >
                Plants pots
              </Link>
            </li>
            <li>
              <Link
                href={"/Product-Listing"}
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
              >
                Ceramics
              </Link>
            </li>
            <li>
              <Link
                href={"/Product-Listing"}
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
              >
                Tables
              </Link>
            </li>
            <li>
              <Link
                href={"/Product-Listing"}
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
              >
                Chairs
              </Link>
            </li>
            <li>
              <Link
                href={"/Product-Listing"}
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
              >
                Crockery
              </Link>
            </li>
            <li>
              <Link
                href={"/Product-Listing"}
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
              >
                Tableware
              </Link>
            </li>
            <li>
              <Link
                href={"/Product-Listing"}
                className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#726E8D]"
              >
                Cutlery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
