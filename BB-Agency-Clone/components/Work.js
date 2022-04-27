import DoubleLayout from "./grid-related/DoubleLayout";

function Work() {
  return (
    <div className="text-custom-background-green">
      {/* Upper Description Portion */}
      <div>
        <p className="text-3xl md:text-4xl md:leading-[40px] lg:text-5xl lg:leading-[52px] sm:w-3/4 md:w-2/4">
          The work we do, and the people we help.
        </p>
        <p className="pt-10 pb-14 sm:w-3/4 md:w-2/5">
          12 — SaaS companies we’ve helped in the past 24 months. Our holistic
          process takes care of discovery, branding, design, and development.
        </p>
      </div>

      {/* Work Double Layout */}
      <DoubleLayout />
    </div>
  );
}

export default Work;
