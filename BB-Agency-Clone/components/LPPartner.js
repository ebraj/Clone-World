import CardBox from "./utils/CardBox";

const allDatas = [
  {
    imgSrc: "/logos/progressive@2x.jpg",
    alt: "progressive@2x",
    content:
      "Working closely with the design team at ThoughtSpot, the big data analytics platform, to research, inform and reinvigorate the product experience.",
    width: 328,
    height: 40,
  },
  {
    imgSrc: "/logos/thoughtspot@2x.jpg",
    alt: "thoughtspot@2x",
    content:
      "Working closely with the design team at ThoughtSpot, the big data analytics platform, to research, inform and reinvigorate the product experience.",
    width: 377,
    height: 76,
  },
  {
    imgSrc: "/logos/sendlane@2x.jpg",
    alt: "sendlane@2x",
    content:
      "We’ve helped Sendlane, the marketing automation tool with a refreshed branding, user interface, product, website, and CMS development.",
    width: 334,
    height: 52,
  },
  {
    imgSrc: "/logos/deloitte@2x.jpg",
    alt: "deloitte@2x",
    content:
      "We launched Deloitte’s in-house product named Semoss to help simplify big data management.",
    width: 243,
    height: 44,
  },
  {
    imgSrc: "/logos/otsuka@2x.jpg",
    alt: "otsuka@2x",
    content:
      "We had an extensive partnership with Otsuka Pharmaceutical’s innovation department to test and publish multiple healthcare apps.",
    width: 296,
    height: 112,
  },
  {
    imgSrc: "/logos/bnp-paribas@2x.jpg",
    alt: "bnp-paribas@2x",
    content:
      "To help BNP Paribas manage their largest clients with more than 150,000 employees, we created concepts and visuals for customer communication solutions in partnership with Sugar CRM.",
    width: 348,
    height: 72,
  },
  {
    imgSrc: "/logos/shipbob@2x.jpg",
    alt: "shipbob@2x",
    content:
      "We’ve helped ShipBob, the $1B valued shipping logistics provider, with a refreshed branding, website, and CMS development.",
    width: 304,
    height: 80,
  },
  {
    imgSrc: "/logos/teachable@2x.jpg",
    alt: "teachable@2x",
    content:
      "A partnership where we work closely with Teachable to redesign and reengineer the Teachable experience from top to bottom.",
    width: 292,
    height: 48,
  },
];

function LPPartner() {
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
        {allDatas.map((singleData) => {
          return (
            <div key={singleData.alt}>
              <CardBox details={singleData} />
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

export default LPPartner;
