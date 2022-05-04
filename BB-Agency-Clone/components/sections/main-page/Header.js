import Link from "next/link";

function Header() {
  return (
    <>
      <div className="bg-custom-background-green text-white py-14">
        {/* Title & Description Portion */}
        <div>
          <h1 className="text-5xl leading-[60px] md:text-6xl md:leading-[70px] md:w-4/6">
            We craft holistic, people- friendly digital experiences.
          </h1>
          <p className="text-2xl leading-[32px] py-14 md:w-4/6">
            BB Agency is a strategic partner for fast-growing tech companies in
            need of a scalable{" "}
            <span className="border-b border-custom-light-green">
              website with modular CMS
            </span>
            ,{" "}
            <span className="border-custom-light-green border-b">
              a design system
            </span>
            , and future-proof{" "}
            <span className="border-b border-custom-light-green">
              brand identity.
            </span>
          </p>
        </div>

        {/* Video Portion */}
        <div className="py-10">
          <video autoPlay muted loop>
            <source src="./videos/showcase.mp4" type="video/mp4"></source>
          </video>
        </div>

        {/*Extra Description */}
        <div className="py-12 lg:pl-96">
          <p className="text-2xl leading-[35px] md:text-3xl md:leading-[40px]">
            <p>
              Our clients are the companies and startups who make the world go
              round —{" "}
              <span className="border-b border-custom-light-green">
                that treat diseases
              </span>
              ,{" "}
              <span className="border-b border-custom-light-green">
                move parcels
              </span>
              ,{" "}
              <span className="border-b border-custom-light-green">
                insure cars
              </span>
              ,{" "}
              <span className="border-b border-custom-light-green">
                create jobs
              </span>
              ,{" "}
              <span className="border-b border-custom-light-green">
                send emails
              </span>{" "}
              and{" "}
              <span className="border-b border-custom-light-green">
                publish courses.
              </span>
            </p>
            <p className="py-10">
              Vast and complex businesses like these need{" "}
              <span className="text-custom-light-green">
                digital experiences
              </span>{" "}
              that are just as{" "}
              <span className="text-custom-light-green">people friendly</span>{" "}
              as they are{" "}
              <span className="text-custom-light-green">robust & scalable</span>
              .
            </p>
            <p>
              {" "}
              Through challenging core assumptions, we shape the products and
              services that improve the lives of thousands every single day.
            </p>
          </p>

          {/* Link */}
          <div className="pt-10 text-2xl md:text-3xl">
            <Link href="/">
              <a className="border-b border-custom-light-green">Our approach</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
