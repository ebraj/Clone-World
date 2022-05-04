import { useState } from "react";

import DashMenu from "../../public/images/icons/DashMenu.svg";
import CrossMenu from "../../public/images/icons/CrossMenu.svg";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const changeMenuFun = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="relative bg-custom-background-green px-5 md:px-16 lg:px-28">
        <div className="max-w-screen-xl mx-auto">
          {/* Navbar for the large screen */}
          <nav className="flex py-10 text-custom-primary-white items-center justify-between">
            {/* Logo/Title */}
            <div>
              <Link href="/">
                <a className="font-LGBold">Balkan Bros.</a>
              </Link>
            </div>

            {/* HAmburger  */}
            <div
              className="z-50 lg:hidden cursor-pointer"
              onClick={changeMenuFun}
            >
              <DashMenu />
              {/* {isMenuOpen ? <CrossMenu /> : <DashMenu />} */}
            </div>

            {/* Nav List Items */}
            <ul className="hidden lg:flex space-x-5 items-center">
              <li>
                <Link href="/work">
                  <a>Work</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/join-us">
                  <a>Join Us</a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a>Insights</a>
                </Link>
              </li>
              <li className="custom-white-btn">Start a Project</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
