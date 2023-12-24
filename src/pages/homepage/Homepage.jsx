import "./Homepage.css";
import SliderHomepageS1 from "../../component/SliderHomepageS1/SliderHomepageS1";
import Seriesisplaying from "../../component/seriesisplaying/seriesisplaying";
import LastMovie from "../../component/latestmovies/latestmovies";
import Veblag from "../../component/Veblag/Veblag";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronUpSharp } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";

export default function Homepage() {
  const [showAc, setShowAc] = useState(null);
  const myComponentRef = useRef();

  const handleWindowClick = (event) => {
    if (!myComponentRef.current.contains(event.target)) {
      setShowAc(null);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  return (
    <>
      <SliderHomepageS1 />
      <Seriesisplaying />
      <LastMovie />
      <Veblag />
      <div className="flex flex-wrap  justify-between mt-[50px] px-[70px]">
        <div className="lg:w-[50%] w-[100%]">
          <div className=" mb-10">
            <h1
              className="text-white text-3xl  relative"
              style={{ fontWeight: "500" }}
            >
              فیلمکیو کجاست؟
            </h1>
            <div className="bg-[#ffa600bb] p-1 w-[215px] mt-[-8px]"></div>
          </div>
          <p className=" text-justify text-slate-300">
            فیلمکیو یک سرویس آنلاین تماشا و دانلود فیلم و سریال است.در فیلمکیو
            ما سعی میکنم جدیدترین و بهترین آثار سینمایی جهان در اختیار همراهان
            عزیز قرار دهیم.بیش از 90% محتوای فیلمکیو رایگان در اختیار همه ی
            کاربران است.برای حمایت از ما در شبکه های اجتماعی ما را دنبال کنید و
            سایت را به دوستان خودتان معرفی کنید همچین در صورت بروز مشکل برای
            کابران داخل ایران همواره آدرس جدید سایت در کانال تلگرام و پیج
            اینستاگرام معرفی میشود.امید داریم با همراهی شما همواره فعالیت خود را
            در این زمینه ارتقا دهیم.برای حمایت از ما می توانید با مبلغ ناچیزی
            اشتراک تهیه کنید همچین تمامی محتوای فیلمکیو بدون حذفیات بوده و فایل
            بصورت کامل و اورجینال در اختیار شما برای دانلود قرار میگیرد.
          </p>
        </div>
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
                      <span className="text-[#ffa600bb]">1.</span> چرا زمانی که
                      بر روی لینک دانلود کلیک میکنم دانلود نمیشود یا بصورت
                      آنلاین پخش میشود؟
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
                    دانلود از سایت تنها با برنامه ها مدیریت دانلود امکان پذیر
                    میباشد ، به دلیل قوانین جدید گوگل امکان دانلود فایل های حجیم
                    بصورت مستقیم بر روی مرورگر وجود ندارد . به همین منظور کافیست
                    لینک دانلود فیلم مورد نظر خود را از سایت کپی کرده (بر روی
                    لینک کلیک راست کنید یا طولانی لمس نمایید سپس Copy link
                    address) و در دانلود منیجر های معرفی شده وارد نمایید. (برای
                    دانلود Vpn خود را خاموش کنید)
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
      </div>
    </>
  );
}
