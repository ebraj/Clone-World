import Image from "next/image";

function Main({ datas }) {
  return (
    <div>
      <h2 className="text-3xl py-10">
        We have developed specific use cases where our approach and expertise
        combined help businesses to truly excel.
      </h2>

      {/* Single Layout - Image and Content */}
      <div>
        {datas.workImgDetails.map((singleData) => {
          return (
            <div className="space-y-8 py-10" key={singleData.imgSrc}>
              {/* Image part */}
              <div>
                <Image
                  alt={singleData.alt}
                  src={singleData.imgSrc}
                  layout="responsive"
                  width={singleData.width}
                  height={singleData.height}
                />
              </div>

              {/* Content Portion */}
              <div className="space-y-5">
                <h2 className="text-4xl">Building amazing SaaS websites.</h2>
                <p>
                  We offer package solutions to help fast-growing SaaS companies
                  scale up their website in line with their expanding workforce
                  and customer base.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
