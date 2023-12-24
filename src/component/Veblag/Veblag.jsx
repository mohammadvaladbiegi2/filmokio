import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";

export default function Veblag() {
  return (
    <div className="container m-auto mt-[80px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <IoNewspaperOutline className="text-[#f5ad11] text-3xl me-3" />
          وبلاگ
        </div>
        <button className="bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3]">
          وبلاگ ها
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-evenly mt-[50px] px-[70px]">
        <div className=" aspect-video  w-[320px]  h-80">
          <div className="relative">
            <img
              src="/images/silo-450x253.jpg"
              className="rounded-lg object-cover "
              alt=""
            />
            <div className="absolute group-hover:hidden top-2 text-[15px] left-[0.5rem]">
              <button
                className="text-white bg-[#000000c2] rounded-lg p-1"
                variant="secondary"
              >
                ۱ دی ۱۴۰۲
              </button>
            </div>
          </div>
          <span className="text-white text-[20px] text-center block">
            فیلمبرداری فصل دوم سریال Silo ادامه می یابد
          </span>
          <div className="flex flex-col h-16 overflow-hidden my-2">
            <p className="text-[#aaa] text-[1rem] text-justify line-clamp-1 lg:line-clamp-2">
              پس از مدت‌ها انتظار، سرانجام به صورت رسمی اعلام شد که پروسه تولید
              و فیلمبرداری فصل دوم سریال Silo به …
            </p>
          </div>
        </div>
        <div className=" aspect-video  w-[320px] relative h-80">
          <img
            src="/images/fall-guy-2024-450x253.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <div className="absolute group-hover:hidden top-2 text-[15px] left-[0.5rem]">
            <button
              className="text-white bg-[#000000c2] rounded-lg p-1"
              variant="secondary"
            >
              ۱ دی ۱۴۰۲
            </button>
          </div>
          <span className="text-white text-[20px] text-center block">
            انتشار تصاویر جدید از فیلم The Fall Guy
          </span>
          <div className="flex flex-col h-16 overflow-hidden my-2">
            <p className="text-[#aaa] text-[1rem] text-justify line-clamp-1 lg:line-clamp-2">
              به تازگی، رسانه اینترتینمنت ویکلی تصاویر جدیدی از فیلم The Fall
              Guy به کارگردانی دیوید لیچ (David Leitch) را با
            </p>
          </div>
        </div>
        <div className=" aspect-video  w-[320px] relative h-80">
          <img
            src="/images/superman-legacy-450x253.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <div className="absolute group-hover:hidden top-2 text-[15px] left-[0.5rem]">
            <button
              className="text-white bg-[#000000c2] rounded-lg p-1"
              variant="secondary"
            >
              ۱ دی ۱۴۰۲
            </button>
          </div>
          <span className="text-white text-[20px] text-center block">
            بازه زمانی شروع فیلمبرداری فیلم Superman: Legacy مشخص شد
          </span>
          <div className="flex flex-col h-16 overflow-hidden my-2">
            <p className="text-[#aaa] text-[1rem] text-justify line-clamp-1 lg:line-clamp-2">
              پس از گذشت سال‌ها انتظار و انتشار شایعات مختلف در مورد پروژه مستقل
              بعدی شخصیت سوپرمن، می‌دانیم که
            </p>
          </div>
        </div>
        <div className=" aspect-video  w-[320px] relative h-80">
          <img
            src="/images/driver-450x253.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
          <div className="absolute group-hover:hidden top-2 text-[15px] left-[0.5rem]">
            <button
              className="text-white bg-[#000000c2] rounded-lg p-1"
              variant="secondary"
            >
              ۳۰ آذر ۱۴۰۲
            </button>
          </div>
          <span className="text-white text-[20px] text-center block">
            آدام درایور از فیلم Megapolis می‌گوید
          </span>
          <div className="flex flex-col h-16 overflow-hidden my-2">
            <p className="text-[#aaa] text-[1rem] text-justify line-clamp-1 lg:line-clamp-2">
              برکسی پوشیده نیست که فرانسیس فورد کاپولا (Francis Ford Coppola) با
              ساخت سری فیلم‌های The Godfather
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
