import React from "react";
import Quote from "../../utils/Quote";
import ThreeColumnGrid from "../../utils/ThreeColumnGrid";

function Deliver({ datas }) {
  return (
    <div>
      <h2 className="text-center text-5xl pt-5 pb-12 md:text-6xl md:pb-24">
        How we deliver results?
      </h2>
      <ThreeColumnGrid datas={datas.ourDelivers} isGreen={false} />
      <Quote data={datas.quoteDetails[3]} isGreen={false} />
    </div>
  );
}

export default Deliver;
