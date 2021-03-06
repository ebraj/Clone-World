import React from "react";
import Image from "next/image";

function Quote({ data, isGreen }) {
  return (
    <div
      className={
        isGreen
          ? `sm:w-[90%] md:w-[70%] mx-auto border-l pl-5 mb-10 border-gray-100`
          : `sm:w-[90%] md:w-[70%] mx-auto border-l pl-5  border-gray-900`
      }
    >
      <p>{data.title}</p>
      <p className="py-10 text-2xl md:text-4xl">{data.description}</p>

      <div className="flex items-center space-x-5">
        {/* Left Portion */}
        <div>
          <div className="w-[80px] rounded-full overflow-hidden">
            <Image
              alt={data.imgSrc}
              src={data.imgSrc}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* Right Portion */}
        <div>
          <h2 className="font-LGBold">{data.author}</h2>
          <p>{data.position}</p>
        </div>
      </div>
    </div>
  );
}

export default Quote;
