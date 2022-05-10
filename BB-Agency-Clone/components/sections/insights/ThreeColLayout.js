import React from "react";
import Image from "next/image";

function ThreeColLayout({ datas }) {
  return (
    <div className="grid gap-10 md:gap-16 pb-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {datas.map((singleData) => {
        return (
          <div key={singleData.imgSrc} className="space-y-10">
            <Image
              src={singleData.imgSrc}
              layout="responsive"
              alt="Thoughtspot"
              width={singleData.width}
              height={singleData.height}
            />
            <p className="text-2xl">{singleData.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ThreeColLayout;
