import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronUpSharp } from "react-icons/io5";
export default function Frequentlyaskedquestion() {
  const [showAc, setShowAc] = useState(null);
  const myComponentRef = useRef();

  const handleWindowClick = (event) => {
    if (!myComponentRef.current.contains(event.target)) {
      setShowAc(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    window.scroll(0, 0);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
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
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <div
              onClick={() => setShowAc(index)}
              className="group cursor-pointer"
              key={index}
            >
              <div className=" w-[210px] px-2 py-4 sm:w-[300px] md:w-[450px]  lg:w-[550px] xl:w-[650px] border-solid border-2 border-[#666] h-auto  rounded-2xl flex justify-between items-center ">
                <div className="text-white font-medium	group-hover:text-[#ffa600bb] transition duration-300 ">
                  <span className="text-[#ffa600bb]">1.</span> چرا زمانی که بر
                  روی لینک دانلود کلیک میکنم دانلود نمیشود یا بصورت آنلاین پخش
                  میشود؟
                </div>
                {index !== showAc ? (
                  <FaAngleDown className="text-white text-[16px] cursor-pointer hidden lg:block group-hover:text-[#ffa600bb] transition duration-300 " />
                ) : (
                  <IoChevronUpSharp className="text-white text-[16px] cursor-pointer hidden lg:block group-hover:text-[#ffa600bb] transition duration-300 " />
                )}
              </div>

              <div
                className={`${
                  index === showAc
                    ? "animate__animated animate__fadeIn"
                    : " hidden"
                } w-[210px] sm:w-[300px]  md:w-[450px] lg:w-[550px] xl:w-[650px] p-2 text-justify text-white bg-[#666] h-auto mt-1 rounded-2xl`}
              >
                دانلود از سایت تنها با برنامه ها مدیریت دانلود امکان پذیر میباشد
                ، به دلیل قوانین جدید گوگل امکان دانلود فایل های حجیم بصورت
                مستقیم بر روی مرورگر وجود ندارد . به همین منظور کافیست لینک
                دانلود فیلم مورد نظر خود را از سایت کپی کرده (بر روی لینک کلیک
                راست کنید یا طولانی لمس نمایید سپس Copy link address) و در
                دانلود منیجر های معرفی شده وارد نمایید. (برای دانلود Vpn خود را
                خاموش کنید)
              </div>
            </div>
          ))}
        <button
          className="bg-yellow-500 font-medium text-black p-3 text-center rounded-2xl"
          onClick={() => setShowAc(null)}
        >
          بستن سوالات
        </button>
      </div>
    </div>
  );
}
