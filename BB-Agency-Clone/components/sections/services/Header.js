import React from "react";
import Image from "next/image";

function Header({ datas }) {
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
      <div className="grid grid-cols-1 gap-24 py-20 md:grid-cols-2">
        {datas.mainImgDetails.map((singleData) => {
          return (
            <div
              key={singleData.imgSrc}
              className="mx-auto text-center space-y-8 sm:w-[80%]"
            >
              <div className="w-[65%] mx-auto">
                <Image
                  alt={singleData.alt}
                  src={singleData.imgSrc}
                  layout="responsive"
                  width={singleData.width}
                  height={singleData.height}
                />
              </div>
              <p className="text-custom-light-green text-3xl leading-[40px]">
                {singleData.content}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Header;
