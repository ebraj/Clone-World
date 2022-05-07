import Image from "next/image";
import Quote from "../../utils/Quote";

function Capabilities({ datas }) {
  return (
    <div>
      {/* Title & content */}
      <div className="pb-16 space-y-2">
        <h2 className="text-[2.8rem] md:text-[3.6rem]">Our Capabilities</h2>
        <p className="md:text-2xl md:w-[60%]">
          <span className="font-LGBold">200+</span> — projects we’ve helped
          launch through the years. Take a look at some of our selected case
          studies.
        </p>
      </div>

      {/* All Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {datas.ourCapabilities.map((singleCapability) => {
          return (
            <div
              key={singleCapability.title}
              className="space-y-4 md:pl-[150px]"
            >
              <h2 className="text-3xl md:text-4xl">{singleCapability.title}</h2>
              {/* all lists */}
              <ul className="space-y-1">
                {singleCapability.allLists.map((singleList) => {
                  return <li key={singleList}>{singleList}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Image Section */}
      <div className="py-16">
        <Image
          alt="/images/services-page-images/services01@2x.jpeg"
          src="/images/services-page-images/services01@2x.jpeg"
          layout="responsive"
          width={2960}
          height={1816}
        />
      </div>

      {/* Quote Section */}
      <div>
        <Quote data={datas.quoteDetails[1]} />
      </div>
    </div>
  );
}

export default Capabilities;
