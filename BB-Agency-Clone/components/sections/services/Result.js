import React from "react";
import Quote from "../../utils/Quote";
import ThreeColumnGrid from "../../utils/ThreeColumnGrid";

function Result({ datas }) {
  return (
    <div>
      <h2 className="text-center text-5xl pt-5 pb-12 md:text-6xl md:pb-24">
        The results we deliver.
      </h2>
      <ThreeColumnGrid datas={datas.ourResults} isGreen={true} />
      <Quote data={datas.quoteDetails[2]} isGreen={true} />
    </div>
  );
}

export default Result;
