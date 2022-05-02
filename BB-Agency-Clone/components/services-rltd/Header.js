import React from "react";
import allDatas from "../datas/work-img";
import DoubleLayoutGreen from "../utils/DoubleLayoutGreen";

function Header() {
  return (
    <>
      <div className="text-center space-y-5 py-16 md:py-24 md:space-y-10">
        <h2 className="font-LGRegular text-[2.65rem] sm:text-5xl md:text-7xl sm:leading-[65px] md:leading-[75px] leading-[50px] md:w-[90%] mx-auto">
          We shape the products and services that improve the lives of thousands
          every single day.
        </h2>
        <p className=" text-custom-light-green sm:text-xl">
          We do this by following a simple approach.
        </p>
      </div>

      {/* Rendering the images in the DoubleLayoutGreen */}
      <DoubleLayoutGreen allDatas={allDatas} />
    </>
  );
}

export default Header;
