import Image from "next/image";
import Link from "next/link";
import React from "react";

interface cartItems {
  id: number;
  src: string;
  alt: string;
  productName: string;
  productDesc: string;
  productPrice: number;
  productQuantity: number;
  total: number;
}

interface cartProps {
  items: cartItems[];
}

const Cart: React.FC<cartProps> = ({ items }) => {
  return (
    <div className="bg-[#F9F9F9] px-3 md:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 auto-rows-auto auto-col-auto gap-3 py-[40px]">
          <div className="md:col-start-2 md:col-span-3 col-start-1 col-span-12 my-4">
            <h1 className="font-clashDisplay text-[36px] font-normal leading-[50.4px] text-left text-[#2A254B]">
              Your shopping cart
            </h1>
          </div>
          <div className="col-start-2 col-span-3 md:block hidden">
            <h4 className="font-clashDisplay text-[14px] font-normal leading-[19.6px] text-left text-[#2A254B]">
              Product
            </h4>
          </div>
          <div className="col-start-7 col-span-1 md:block hidden">
            <h4 className="font-clashDisplay text-[14px] font-normal leading-[19.6px] text-left text-[#2A254B]">
              Quantity
            </h4>
          </div>
          <div className="col-start-9 col-span-3 md:block hidden">
            <h4 className="font-clashDisplay text-[14px] font-normal leading-[19.6px] text-right text-[#2A254B]">
              Total
            </h4>
          </div>
          <div className="col-start-2 col-span-10 md:block hidden">
            <div className="border border-[#EBE8F4]"></div>
          </div>
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                className={`md:col-start-2 md:col-span-1 col-start-1 col-span-5 `}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={109}
                  height={134}
                  layout="responsive"
                />
              </div>
              <div className="md:col-start-3 md:col-span-2 col-start-6 col-span-7 md:self-center self-start">
                <h3 className="font-clashDisplay text-[20px] font-normal leading-[28px] text-left text-[#2A254B]">
                  {item.productName}
                </h3>
                <p className="font-satoshi text-[14px] font-normal leading-[21px] text-left text-[#2A254B]">
                  {item.productDesc}
                </p>
                <p className="font-satoshi text-[14px] font-normal leading-[21px] text-left text-[#2A254B]">
                  £{item.productPrice}
                </p>
                <span className="font-satoshi text-[16px] font-normal leading-[100.6px] text-left text-[#2A254B] self-end justify-self-center md:hidden grid">
                  {item.productQuantity}
                </span>
              </div>

              <div className="md:col-start-7 md:col-span-1 col-start-6 col-span-7 self-center justify-self-center md:block hidden">
                <span className="font-satoshi text-[16px] font-normal leading-[21.6px] text-left text-[#2A254B]">
                  {item.productQuantity}
                </span>
              </div>
              <div className="col-start-9 col-span-3 self-center text-right md:block hidden">
                <span className="font-satoshi text-[18px] font-normal leading-[27px] text-left text-[#2A254B]">
                  £{item.total}
                </span>
              </div>
            </React.Fragment>
          ))}
          <div className="col-start-2 col-span-10 ">
            <div className="border border-[#EBE8F4]"></div>
          </div>
          <div className="md:col-start-9 md:col-span-3 col-start-1 col-span-12 self-center text-right">
            <span className="font-clashDisplay text-[24px] font-normal leading-[33.6px] text-right text-[#4E4D93] mr-3">
              Subtotal
            </span>
            <span className="font-clashDisplay text-[20px] font-normal leading-[28px] text-right text-[#4E4D93]">
              £210
            </span>
          </div>
          <p className="md:col-start-9 md:col-span-3 col-start-1 col-span-12 self-center text-right font-satoshi text-[14px] font-normal leading-[21px] text-right text-[#4E4D93]">
            Taxes and shipping are calculated at checkout
          </p>
          <div className="md:col-start-9 md:col-span-3 col-start-1 col-span-12 self-center text-right">
            <button className="bg-[#2A254B] py-[15px] px-[30px] font-satoshi text-[16px] font-normal leading-[24px] text-left text-white ">
              <Link href="#" className="text-white" />
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
