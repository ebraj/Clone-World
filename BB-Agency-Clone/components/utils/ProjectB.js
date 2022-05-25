import React from "react";

function ProjectB({ onTop }) {
  return (
    <div>
      {/* Bottom Part */}
      <div className="text-center mx-auto">
        {onTop && <div className="border-b md:my-16"></div>}
        <p className="text-center text-3xl px-5 py-10 sm:text-5xl sm:leading-[60px] md:text-6xl md:leading-[68px] md:w-9/12 mx-auto">
          Have a project in mind? Let’s get to work.
        </p>
        <button className="custom-green-btn">Start a Project</button>
      </div>
    </div>
  );
}

export default ProjectB;
