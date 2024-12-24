import React from "react";
import { MdArrowDropDown } from "react-icons/md";
const Filter = () => {
  return (
    <div>
      <div className="md:flex hidden justify-between mt-4 px-3">
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <p>Category</p>
            <MdArrowDropDown />
          </div>
          <div className="flex items-center gap-2">
            <p>Product type</p>
            <MdArrowDropDown />
          </div>
          <div className="flex items-center gap-2">
            <p>Price</p>
            <MdArrowDropDown />
          </div>
          <div className="flex items-center gap-2">
            <p>Brand</p>
            <MdArrowDropDown />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <p>Sorting by:</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Date added</p>
            <MdArrowDropDown />
          </div>
        </div>
      </div>
      <div className="md:hidden flex gap-3 justify-center mt-4 px-3">
        <div className="bg-[#F9F9F9] py-[15px] flex items-center justify-center gap-2 w-full">
          <p>Filters</p>
          <MdArrowDropDown />
        </div>
        <div className="bg-[#F9F9F9] py-[15px]  flex items-center justify-center gap-2 w-full">
          <p>Sorting</p>
          <MdArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Filter;
