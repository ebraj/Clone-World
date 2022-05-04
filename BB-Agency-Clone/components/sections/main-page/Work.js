import Image from "next/image";

function Work({ datas }) {
  return (
    <div className="text-custom-background-green">
      {/* Upper Description Portion */}
      <div>
        <p className="text-3xl md:text-4xl md:leading-[40px] lg:text-5xl lg:leading-[52px] sm:w-3/4 md:w-2/4">
          The work we do, and the people we help.
        </p>
        <p className="pt-10 pb-14 sm:w-3/4 md:w-2/5">
          12 — SaaS companies we have helped in the past 24 months. Our holistic
          process takes care of discovery, branding, design, and development.
        </p>
      </div>

      {/* Work Double Layout */}
      <div className="grid sm:grid-cols-2 sm:gap-10 md:gap-24">
        {/* Left Part */}
        {datas.workImgDetails.map((singleImgDetail) => {
          return (
            <div key={singleImgDetail.imgSrc}>
              <Image
                src={`/images/works/${singleImgDetail.imgSrc}.jpeg`}
                layout="responsive"
                alt="Thoughtspot"
                width={singleImgDetail.width}
                height={singleImgDetail.height}
              />

              <p className="text-2xl md:text-3xl py-12">
                {singleImgDetail.desc}
              </p>
              {singleImgDetail.isComingSoon && (
                <button className="custom-yellow-btn mb-12">
                  Comming Soon
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
