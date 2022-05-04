import Image from "next/image";

function Partner({ datas }) {
  return (
    <>
      {/* Title Part */}
      <div className="space-y-10 pb-20 md:pb-24 md:pt-10">
        <p className="text-2xl sm:text-4xl md:text-5xl md:leading-[65px] md:w-8/12">
          We are partnering with forward-thinking companies since 2012.
        </p>
        <p className="text-xl w-8/12 md:text-2xl">
          <span className="font-LGBold">~$250B</span> — Valuation of the
          companies we have been privileged to work with, including Fortune 500
          companies, technology SMEs, and funded startups.
        </p>
      </div>

      {/* Grid Part */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Minor Box */}
        {datas.logosDetails.map((singleData) => {
          return (
            <div key={singleData.alt}>
              <div className="space-y-16">
                {/* Logo */}
                <div className="w-4/12">
                  <Image
                    src={singleData.imgSrc}
                    layout="responsive"
                    alt={singleData.alt}
                    width={singleData.width}
                    height={singleData.height}
                  />
                </div>

                {/* description */}
                <p className="text-xl">{singleData.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Part */}

      <div className="pt-16 text-center mx-auto">
        <div className="border-b md:my-16"></div>
        <p className="text-center text-3xl px-5 py-10 sm:text-5xl sm:leading-[60px] md:text-6xl md:leading-[68px] md:w-9/12 mx-auto">
          Have a project in mind? Let’s get to work.
        </p>
        <button className="custom-green-btn">Start a Project</button>
      </div>
    </>
  );
}

export default Partner;
