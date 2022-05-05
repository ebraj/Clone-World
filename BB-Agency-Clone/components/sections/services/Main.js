import Image from "next/image";

function Main({ datas }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl lg:text-[3rem] lg:leading-[60px] sm:w-[80%] md:w-[70%] py-10">
        We have developed specific use cases where our approach and expertise
        combined help businesses to truly excel.
      </h2>

      {/* Single Layout - Image and Content */}
      <div className="space-y-16">
        {datas.workImgDetails.map((singleData) => {
          return (
            <div
              className="grid md:grid-cols-2 gap-10 sm:gap-20 md:gap-40 space-y-8 py-10"
              key={singleData.imgSrc}
            >
              {/* Image part */}
              <div className="sm:w-[85%] md:w-[100%]">
                <Image
                  alt={singleData.alt}
                  src={singleData.imgSrc}
                  layout="responsive"
                  width={singleData.width}
                  height={singleData.height}
                />
              </div>

              {/* Content Portion */}
              <div className="space-y-10 self-center">
                <h2 className="text-4xl md:text-5xl">
                  Building amazing SaaS websites.
                </h2>
                <p className="md:text-2xl">
                  We offer package solutions to help fast-growing SaaS companies
                  scale up their website in line with their expanding workforce
                  and customer base.
                </p>
                {singleData.learnmore ? (
                  <button className="custom-green-btn">Learn More</button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
