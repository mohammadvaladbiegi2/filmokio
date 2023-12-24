import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import "animate.css";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function NavBar() {
  const [showMore, setshowMore] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav
        className={`bg_nav fixed z-20 w-full ${
          visible
            ? "animate__animated animate__fadeInDown"
            : "animate__animated animate__fadeOutUp"
        }`}
      >
        <div className="flex justify-around items-center py-4 ">
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/FilmKio-logo-v4.png" />
            </Link>
            <div className="hidden lg:flex ">
              <ul className="flex justify-around w-[500px]">
                <li>
                  <Link
                    to="/movie"
                    className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium "
                  >
                    فیلم ها
                  </Link>
                </li>
                <li>
                  <Link
                    to="/serial"
                    className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium "
                  >
                    سریال ها
                  </Link>
                </li>
                <li>
                  <Link
                    to="/artists"
                    className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium "
                  >
                    هنرمندان
                  </Link>
                </li>
                <li>
                  <Link
                    to="/weblog"
                    className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium "
                  >
                    وبلاگ ها
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center bg-[#232729] p-3 rounded-[15px] w-[180px] lg:w-[280px]">
            <CiSearch className="mt-1 text-white text-2xl cursor-pointer  hover:text-[#f5ad11] transition-all duration-300 " />
            <input
              type="text"
              placeholder="جستجو..."
              className="input_Search text-white w-[115px] lg:w-[240px] "
            />
            {!showMore ? (
              <CgDetailsMore
                className="mt-1 text-white text-2xl cursor-pointer lg:hidden hover:text-[#f5ad11] transition-all duration-300"
                onClick={() => setshowMore((prev) => !prev)}
              />
            ) : (
              <IoMdClose
                className="mt-1 text-white text-2xl cursor-pointer lg:hidden hover:text-[#f5ad11] transition-all duration-300"
                onClick={() => setshowMore((prev) => !prev)}
              />
            )}
          </div>
        </div>
        <div>
          <div
            className={`${
              showMore
                ? " animate__animated animate__fadeIn animate__faster"
                : " animate__animated animate__fadeOut animate__faster "
            } justify-center bg_nav py-3 lg:hidden  fixed z-20 w-full`}
          >
            <ul className="flex justify-around ">
              <li>
                <Link
                  to="/movie"
                  className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium"
                >
                  فیلم ها
                </Link>
              </li>
              <li>
                <Link
                  to="/serial"
                  className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium"
                >
                  سریال ها
                </Link>
              </li>
              <li>
                <Link
                  to="/artists"
                  className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium"
                >
                  هنرمندان
                </Link>
              </li>
              <li>
                <Link
                  to="/weblog"
                  className="text-white hover:text-[#f5ad11] transition-all duration-300 font-medium"
                >
                  وبلاگ ها
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
