import React, { useEffect, useRef, useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
export default function Select({ children, Ordered, title }) {
  const [show, setshow] = useState(false);
  const mycomponent = useRef();

  const handleWindowClick = (event) => {
    if (!mycomponent.current.contains(event.target)) {
      setshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  return (
    <div
      ref={mycomponent}
      className="group cursor-pointer mx-3 my-3 md:my-4"
      onClick={() => {
        setshow((prev) => !prev);
      }}
    >
      <div className=" w-[210px] px-2 py-4  border-solid border-2 border-[#666] h-auto  rounded-2xl flex justify-between items-center ">
        <div className="text-white font-medium	 transition duration-300 ">
          {title}
        </div>

        {!show ? (
          <FaAngleDown className="text-white text-[16px] cursor-pointer   transition duration-300 " />
        ) : (
          <IoChevronUpSharp className="text-white text-[16px] cursor-pointer   transition duration-300 " />
        )}
      </div>

      <div
        className={`w-[210px] absolute ${
          show
            ? "animate__animated animate__fadeInUp animate__faster"
            : "hidden"
        }  z-20 p-2 text-justify text-white bg-[#232729] h-32 mt-1 rounded-2xl overflow-y-scroll `}
      >
        {children}
      </div>
    </div>
  );
}
