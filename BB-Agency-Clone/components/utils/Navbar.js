import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import DashMenu from "../../public/images/icons/DashMenu.svg";
import CrossMenu from "../../public/images/icons/CrossMenu.svg";
import Link from "next/link";

function Navbar() {
  const [isGreen, setIsGreen] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const changeMenuFun = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (
      pathname === "/work" ||
      pathname === "/about-us" ||
      pathname === "/join-us" ||
      pathname === "/insights"
    ) {
      setIsGreen(false);
    } else {
      setIsGreen(true);
    }
  }, []);
  return (
    <>
      <div
        className={
          isGreen
            ? "relative bg-custom-background-green px-5 md:px-16 lg:px-28"
            : "relative bg-white text-custom-background-green px-5 md:px-16 lg:px-28"
        }
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Navbar for the large screen */}
          <nav
            className={
              isGreen
                ? "flex py-10 text-white items-center justify-between"
                : "flex py-10 text-custom-background-green items-center justify-between"
            }
          >
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
              <li
                className={
                  isGreen ? "custom-white-btn" : "custom-nav-green-btn"
                }
              >
                Start a Project
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
