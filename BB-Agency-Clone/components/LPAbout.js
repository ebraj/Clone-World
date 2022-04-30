import Image from "next/image";

function LPAbout() {
  return (
    <div className="text-white">
      {/* Upper Portion */}
      <p className="w-11/12 mx-auto text-3xl text-center leading-[40px] sm:text-4xl md:text-6xl md:leading-[70px] sm:w-9/12 md:py-24">
        We translate research into solutions, crafting thoughtful and unified
        brands, apps, websites, interfaces, and systems.
      </p>

      <div className="grid grid-col-1 space-y-16 text-xl py-14 md:grid-cols-2 gap-10">
        {/* Right portion */}
        <div className="">
          <Image
            alt="Lpabout"
            src="/images/landing-page-images/lpabout.jpeg"
            layout="responsive"
            width={1200}
            height={1440}
          />
        </div>
        {/* Left Portion */}
        <div className="place-self-center md:text-2xl">
          <p className="pb-8">
            We partner with design leaders of tech brands and growing businesses
            to create simple, functional, and scalable digital solutions.
          </p>
          <p className="pb-10">
            Our global team of researchers, strategists, creatives, and
            engineers work with streamlined processes to break through
            organizational roadblocks and shape the brands of tomorrow.
          </p>

          <span className="border-b">About Us</span>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="grid grid-col-1 space-y-16 text-xl py-14 sm:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="px-10 md:px-36">
          <Image
            src="/images/landing-page-images/lpfaq.png"
            layout="responsive"
            width={524}
            height={676}
          />
        </div>

        {/* Content Section */}
        <div className="py-10 place-self-center md:-order-1 md:text-2xl">
          <p className="text-3xl">How can we work together?</p>
          <p className="py-6">
            We have developed a simple onboarding process to help us better
            understand our client's strategic needs.
          </p>

          <span className="border-b">Read FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default LPAbout;
