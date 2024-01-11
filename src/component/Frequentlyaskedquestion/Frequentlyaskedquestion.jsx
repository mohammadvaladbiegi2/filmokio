import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronUpSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  getFrequentlyaskFromServer,
  showhandel,
} from "../../Redux/stors/Frequentlyask";
export default function Frequentlyaskedquestion() {
  const myComponentRef = useRef();
  const dispatch = useDispatch();
  const Frequentlyask = useSelector((state) => state.Frequentlyask);

  const handleAskClick = (id) => {
    dispatch(showhandel({ id }));
  };

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getFrequentlyaskFromServer());
    dispatch(showhandel({ id: 1 }));
  }, []);

  return (
    <div className="mx-auto flex-col" ref={myComponentRef}>
      <div className=" mb-10">
        <h1
          className="text-white text-3xl  relative"
          style={{ fontWeight: "500" }}
        >
          سوالات متداول ؟
        </h1>
        <div className="bg-[#ffa600bb] p-1 w-[215px] mt-[-8px]"></div>
      </div>
      <div className="flex flex-col gap-2">
        {Frequentlyask.map((item) => (
          <div
            onClick={() => handleAskClick(item.id)}
            className="group cursor-pointer"
            key={item.id}
          >
            <div className=" w-[210px] px-2 py-4 sm:w-[300px] md:w-[450px]  lg:w-[550px] xl:w-[650px] border-solid border-2 border-[#666] h-auto  rounded-2xl flex justify-between items-center ">
              <div className="text-white font-medium	group-hover:text-[#ffa600bb] transition duration-300 ">
                <span className="text-[#ffa600bb]">{item.id}.</span>
                {item.title}
              </div>
              {!item.show ? (
                <FaAngleDown className="text-white text-[16px] cursor-pointer hidden lg:block group-hover:text-[#ffa600bb] transition duration-300 " />
              ) : (
                <IoChevronUpSharp className="text-white text-[16px] cursor-pointer hidden lg:block group-hover:text-[#ffa600bb] transition duration-300 " />
              )}
            </div>

            <div
              className={`${
                item.show ? "animate__animated animate__fadeIn" : " hidden"
              } w-[210px] sm:w-[300px]  md:w-[450px] lg:w-[550px] xl:w-[650px] p-2 text-justify text-white bg-[#666] h-52 lg:h-auto mt-1 overflow-y-auto rounded-2xl`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
