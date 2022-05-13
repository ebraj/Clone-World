import Link from "next/link";
import React from "react";

function Total({ datas }) {
  return (
    <div className="space-y-20 md:space-y-36">
      {/* Top Section */}
      <div className="text-center space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl md:w-[75%] mx-auto md:leading-[55px]">
          With human-centric design at the core of our principles, we depend on
          our team's varied perspectives and life experiences to help us build
          products for the many.
        </h2>
        <div>
          <Link href="/services">
            <a className="text-2xl border-b-2">Our Approach</a>
          </Link>
        </div>
      </div>

      <div className="grid gap-16 md:grid-cols-3">
        {datas.map((singleData) => {
          return (
            <div className="text-center space-y-8">
              <h2 className="text-5xl">{singleData.heading}</h2>
              <p className="mx-auto w-[80%] sm:w-[60%] md:w-[100%]">
                {singleData.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Total;
