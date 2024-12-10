import React from "react";
import Link from "next/link";

const BannerPage = () => {
  return (
    <div
      className="
    min-h-screen banner"
    >
      <div className="w-full sm:w-auto">
        <img src="/images/banner.svg" alt="banner" className="w-full" />
      </div>
      <div className="bg-[#FFF3E3] w-[450px] h-[350px] m-9 p-9 border border-[#b88e2f] absolute top-[200px] left-[50%] px-8 hidden sm:hidden lg:block">
        <h3 className="font-poppins font-semibold text-[#333333] text-sm  p-0 m-0">
          New Arrival
        </h3>
        <h1 className="text-[#B88E2F] font-poppins font-bold text-5xl">
          Discover Our New Collection
        </h1>
        <p className="font-poppins font-medium text-xl text-[#333333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link href="/checkout">
          {/* The icon image */}
          <button className="text-white bg-[#B88E2F] px-[50px] py-[25px] mt-6 font-poppins font-bold text-sm">
            BUY Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerPage;
