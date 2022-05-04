import React from "react";

function MaxWLayout({
  children,
  bgColor = "bg-custom-background-green",
  textColor = "text-white",
}) {
  return (
    <div
      className={`relative ${bgColor} ${textColor} px-5 md:px-16 lg:px-28 py-16`}
    >
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
}

export default MaxWLayout;
