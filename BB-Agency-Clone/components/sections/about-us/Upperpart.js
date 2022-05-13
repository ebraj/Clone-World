import React from "react";
import Image from "next/image";

function Upperpart({ datas }) {
  return (
    <div className="space-y-24">
      <h2 className="text-7xl sm:w-[80%] md:text-9xl">We are BB Agency.</h2>
      <p className="text-2xl sm:text-3xl md:text-4xl md:leading-[45px] md:ml-auto md:w-[70%]">
        BB Agency was founded in 2012 on Island Krk, Croatia. Today we are a
        fully remote digital agency with members and collaborators working
        together from all over the world to provide a valuable global
        perspective on our work.
        <br />
        <br />
        Like the world around us and the businesses we work with, our design
        practice is constantly moving and improving. We’re always striving to
        see a different way and find a better path.
        <br />
        <br />
        We pride ourselves on our ability to challenge core assumptions, unpick
        legacy behaviors, streamline complex processes, and shape the products
        and services that improve the lives of thousands every single day.
      </p>
      <div className="grid md:grid-cols-2 gap-16">
        {datas.map((singleData, index) => {
          return (
            <div key={singleData.imgSrc}>
              <Image
                src={singleData.imgSrc}
                layout="responsive"
                alt={singleData.imgSrc}
                width={singleData.width}
                height={singleData.height}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Upperpart;
