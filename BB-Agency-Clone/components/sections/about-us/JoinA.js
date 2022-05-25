import React from "react";
import Image from "next/image";

function JoinA({ datas }) {
  return (
    <div className="space-y-14 md:space-y-24 sm:w-[70%] md:w-[100%] mx-auto">
      <div className="text-center space-y-5 mx-auto md:w-[60%]">
        <h2 className="text-[2.8rem] md:text-[3rem]">
          Purposefully dislocated
        </h2>
        <p>
          Remote work is fundamental to our business model; however, we have
          decided to build our base office on Island Krk, Croatia.
          <br />
          <br />
          With an evergrowing shift towards remote work, the outstanding balance
          of local and international talent, we have been inspired to pursue a
          unique path that has been working since 2012.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {datas.joinALists.map((singleData) => {
          return (
            <div key={singleData.imgSrc} className="space-y-6 self-center">
              {/* Image */}
              <div>
                <Image
                  src={singleData.imgSrc}
                  layout="responsive"
                  alt={singleData.imgSrc}
                  width={singleData.width}
                  height={singleData.height}
                />
              </div>
              {/* Description */}
              <p>{singleData.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JoinA;
