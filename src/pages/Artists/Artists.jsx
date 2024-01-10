import React, { useState, useRef, useEffect } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import ParticlsJS from "../../component/particls/ParticlsJS";
import ArtistCard from "../../component/ArtistCard/ArtistCard";

export default function Artists() {
  window.scroll(0, 0);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const mycomponent = useRef();

  const handleWindowClick = (event) => {
    if (!mycomponent.current.contains(event.target)) {
      setshow1(false);
      setshow2(false);
      setshow3(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  return (
    <div className="pt-[200px]">
      <ParticlsJS />
      <h1 className="font-medium text-center text-white text-5xl">
        آرشیو هنرمندان
      </h1>
      <div className="px-[4.8rem]">
        <div
          ref={mycomponent}
          className="flex items-center justify-center md:flex-row  flex-col  mt-10"
        >
          <div
            className="group cursor-pointer mx-3 my-3 md:my-4"
            onClick={() => {
              setshow1((prev) => !prev);
              setshow2(false);
            }}
          >
            <div className=" w-[210px] px-2 py-4  border-solid border-2 border-[#666] h-auto  rounded-2xl flex justify-between items-center ">
              <div className="text-white font-medium	 transition duration-300 ">
                جنسیت
              </div>

              {!show1 ? (
                <FaAngleDown className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              ) : (
                <IoChevronUpSharp className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              )}
            </div>

            <div
              className={`w-[210px] absolute ${
                show1
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : "hidden"
              }  z-20 p-2 text-justify text-white bg-[#232729] h-auto mt-1 rounded-2xl`}
            >
              <div className="hover:text-yellow-500 py-2">مرد</div>
              <hr />
              <div className="hover:text-yellow-500 py-2">زن</div>
            </div>
          </div>
          <div
            className="group cursor-pointer mx-3 my-3 md:my-4"
            onClick={() => {
              setshow2((prev) => !prev);
              setshow1(false);
            }}
          >
            <div className=" w-[210px] px-2 py-4  border-solid border-2 border-[#666] h-auto  rounded-2xl flex justify-between items-center ">
              <div className="text-white font-medium	 transition duration-300 ">
                حرفه
              </div>

              {!show2 ? (
                <FaAngleDown className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              ) : (
                <IoChevronUpSharp className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              )}
            </div>

            <div
              className={`w-[210px] absolute ${
                show2
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : "hidden"
              }  z-20 p-2 text-justify text-white bg-[#232729] h-auto mt-1 rounded-2xl`}
            >
              <div className="hover:text-yellow-500 py-2">بازیگر</div>
              <hr />
              <div className="hover:text-yellow-500 py-2">کارگردان</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-5 mt-20">
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>

        <div className="flex items-center mt-10 justify-center gap-2">
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-2xl px-10 py-5 flex items-center justify-center w-5 h-5">
            قبلی
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-[50%] p-6 flex items-center justify-center w-5 h-5">
            1
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-[50%] p-6 flex items-center justify-center w-5 h-5">
            2
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-[50%] p-6 flex items-center justify-center w-5 h-5">
            3
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-2xl px-10 py-5 flex items-center justify-center w-5 h-5">
            بعدی
          </button>
        </div>
      </div>
    </div>
  );
}
