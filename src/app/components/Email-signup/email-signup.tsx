import React from "react";

const EmailSignup = () => {
  return (
    <div>
      <div className="w-full bg-[#F9F9F9] py-[40px] px-3">
        <div className="container bg-white mx-auto lg:w-[1182px] py-[40px]">
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <div className="flex flex-col items-center">
              <h1 className="font-clashDisplay text-[36px] font-normal leading-[50.4px] text-center text-[#2A254B]">
                Join the club and get the benefits
              </h1>
              <p className="font-satoshi text-[16px]  font-normal leading-[24px] text-center text-[#2A254B] md:w-[450px] w-auto">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
              </p>
            </div>
            <div className="font-satoshi text-[16px] font-normal leading-[21.6px] text-start">
              <input
                type="text"
                placeholder="your@email.com"
                className="bg-[#F9F9F9] p-[10px] font-satoshi text-[16px] font-normal leading-[21.6px] text-start"
              />
              <button className="bg-[#2A254B] py-[10px] px-[20px] font-satoshi text-[16px] font-normal leading-[21.6px] text-start text-white">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
