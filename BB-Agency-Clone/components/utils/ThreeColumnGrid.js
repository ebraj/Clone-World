import Quote from "./Quote";

function ThreeColumnGrid({ datas, isGreen }) {
  return (
    <div className="grid gap-16 md:gap-20 pb-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {datas.map((singleResult) => {
        return (
          <div key={singleResult.heading} className="space-y-2 md:space-y-5">
            {/* Page Title */}
            <h2
              className={
                isGreen
                  ? `text-white text-[3rem] md:text-[3.4rem] lg:text-[5rem]`
                  : `text-custom-background-green text-[1.9rem] md:text-[2rem] pb-2`
              }
            >
              {singleResult.heading}
            </h2>

            {/* Three Column Layout */}
            <p
              className={
                isGreen
                  ? `text-custom-light-green`
                  : `text-custom-background-green`
              }
            >
              {singleResult.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ThreeColumnGrid;
