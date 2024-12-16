import Image from "next/image";
import React from "react";

const ProductsBanner = () => {
  return (
    <div>
      <div className="md:block hidden">
        <Image
          src="/All-Product-Banner.png"
          alt="All-Product-Banner"
          width={1440}
          height={209}
          layout="responsive"
        />
      </div>
      <div className="md:hidden block">
        <Image
          src="/All-Product-Banner-small.png"
          alt="All-Product-Banner"
          width={1440}
          height={209}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default ProductsBanner;
