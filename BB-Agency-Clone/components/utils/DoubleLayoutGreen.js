import Image from "next/image";

function DoubleLayout({ allDatas }) {
  return (
    <div className="grid grid-cols-1 gap-24 py-20 md:grid-cols-2">
      {allDatas.map((singleData) => {
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
  );
}

export default DoubleLayout;
