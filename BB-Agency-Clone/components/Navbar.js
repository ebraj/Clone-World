import { useState } from "react";

import DashMenu from "../public/images/icons/DashMenu.svg";
import CrossMenu from "../public/images/icons/CrossMenu.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const changeMenuFun = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Navbar for the large screen */}
      <nav className="flex py-5 text-custom-primary-white items-center justify-between">
        {/* Logo/Title */}
        <div className="">
          <h2>Balkan Bros.</h2>
        </div>

        {/* HAmburger  */}
        <div className="z-50 md:hidden cursor-pointer" onClick={changeMenuFun}>
          {/* <CrossMenu /> */}
          {isMenuOpen ? <CrossMenu /> : <DashMenu />}
        </div>

        {/* Nav List Items */}
        <ul className="hidden md:flex space-x-5 items-center">
          <li>Work</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Join Us</li>
          <li>Insights</li>
          <li className="custom-white-btn">Start a Project</li>
        </ul>

        {/* NavList for Mobile View */}
        {isMenuOpen && (
          <ul className="absolute min-h-screen top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-5 text-4xl text-custom-background-green bg-custom-primary-white">
            <li>Work</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Join Us</li>
            <li>Insights</li>
            <li className="custom-white-btn">Start a Project</li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
