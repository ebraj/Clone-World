import Image from "next/image";

// Images title list
const imageDetails = [
  {
    imgSrc: "thoughtspot",
    width: 1184,
    height: 1184,
    desc: "ThoughtSpot — Researching, informing, and reinvigorating the product experience for the multi-billion data analytics platform.",
    isComingSoon: true,
  },
  {
    imgSrc: "sendlane",
    width: 1434,
    height: 1625,
    desc: "Sendlane — Revitalising the website and brand for a premier automated marketing platform.",
    isComingSoon: false,
  },
  {
    imgSrc: "shipbob",
    width: 2454,
    height: 1720,
    desc: "Shipbob — From startup to grown up: building a scalable brand for ShipBob, the $1B valued shipping logistics provider.",
    isComingSoon: false,
  },
  {
    imgSrc: "wonde",
    width: 1434,
    height: 1624,
    desc: "Wonde — Changing the global ed-tech industry with a new brand strategy and website experience.",
    isComingSoon: true,
  },
  {
    imgSrc: "nexudus",
    width: 1184,
    height: 1184,
    desc: "Nexudus — Designing and reengineering the Nexudus suite of apps to help build better coworking spaces.",
    isComingSoon: true,
  },
  {
    imgSrc: "heystack",
    width: 2454,
    height: 1720,
    desc: "Haystack — Supporting Haystack’s mission to make big companies feel smaller with a new brand, website design, and CMS.",
    isComingSoon: true,
  },
  {
    imgSrc: "immocapital",
    width: 1184,
    height: 1184,
    desc: "IMMO Capital — Improving customer experience for a next-gen real estate platform.",
    isComingSoon: true,
  },
  {
    imgSrc: "glofox",
    width: 1434,
    height: 1625,
    desc: "Glofox — Creating a dynamic and scalable design language to help power the future of fitness with Glofox.",
    isComingSoon: true,
  },
  {
    imgSrc: "teachable",
    width: 2454,
    height: 1720,
    desc: "Teachable — Discover by Teachable — Helping 100,000 creators to share their knowledge.",
    isComingSoon: true,
  },
];

function DoubleLayout() {
  return (
    <div className="grid sm:grid-cols-2 sm:gap-10 md:gap-24">
      {/* Left Part */}
      {imageDetails.map((singleImgDetail) => {
        return (
          <div key={singleImgDetail.imgSrc}>
            <Image
              src={`/images/works/${singleImgDetail.imgSrc}.jpeg`}
              layout="responsive"
              alt="Thoughtspot"
              width={singleImgDetail.width}
              height={singleImgDetail.height}
            />

            <p className="text-2xl md:text-3xl py-12">{singleImgDetail.desc}</p>
            {singleImgDetail.isComingSoon && (
              <button className="custom-yellow-btn mb-12">Comming Soon</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DoubleLayout;
