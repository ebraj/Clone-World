import Link from "next/link";
import React from "react";

function Total({ datas }) {
  return (
    <div className="space-y-20 md:space-y-36">
      {/* Top Section */}
      <div className="text-center space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl md:w-[75%] mx-auto md:leading-[55px]">
          With human-centric design at the core of our principles, we depend on
          our team&apos;s varied perspectives and life experiences to help us
          build products for the many.
        </h2>
        <div>
          <Link href="/services">
            <a className="text-2xl border-b-2">Our Approach</a>
          </Link>
        </div>
      </div>

      <div className="grid gap-16 md:grid-cols-3">
        {datas.totalLists.map((singleData) => {
          return (
            <div className="text-center space-y-8" key={singleData.heading}>
              <h2 className="text-5xl">{singleData.heading}</h2>
              <p className="mx-auto w-[80%] sm:w-[60%] md:w-[100%]">
                {singleData.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Client */}
      <div className="space-y-14 py-8">
        <div className="md:w-[70%] space-y-14">
          <p className="text-5xl leading-[55px] md:w-[70%]">
            Homegrown service, global thinking.
          </p>
          <p>
            Our core team is based on Island Krk, Croatia, and we’re proud to
            say our clients come to us from all around the world. We work with
            them almost exclusively on a remote basis, something that’s never
            been as easy and efficient as it is today, thanks to our streamlined
            working processes.
            <br />
            <br />
            The same goes for the BB Agency extended team — our international
            network of designers, strategists, directors and developers who
            collaborate to execute projects and provide a valuable global
            perspective on our work.
            <br />
            <br />
            We like to think this offers our clients a unique combination —
            service they can depend on, with the freedom to collaborate at
            scale.
          </p>
        </div>
        {datas.allClients.map((singleData) => {
          return (
            <div
              key={singleData.index}
              className="border-b py-5 flex justify-between items-center text-xl"
            >
              <div className="flex items-center justify-center space-x-5">
                <div className="h-16 w-16 rounded-full bg-green-400"></div>
                <div className="md:flex md:space-x-10">
                  <p>{singleData.name}</p>
                  <h2 className="font-LGSemiBold">{singleData.title}</h2>
                </div>
              </div>
              <div className="hidden md:block">
                <p>{singleData.area}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Total;
