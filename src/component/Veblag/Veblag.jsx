import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import VeblagCard from "../VeblagCard/VeblagCard";
import { Link } from "react-router-dom";

export default function Veblag() {
  return (
    <div className="container m-auto mt-[80px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <IoNewspaperOutline className="text-[#f5ad11] text-3xl me-3" />
          وبلاگ
        </div>
        <Link
          to="/weblog"
          className="bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3]"
        >
          وبلاگ ها
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-evenly mt-[50px] px-[70px]">
        <VeblagCard
          img="/images/silo-450x253.jpg"
          title="فیلمبرداری فصل دوم سریال Silo ادامه می یابد"
          date="۱ دی ۱۴۰۲"
          desc="  پس از مدت‌ها انتظار، سرانجام به صورت رسمی اعلام شد که پروسه تولید و
          فیلمبرداری فصل دوم سریال Silo به …"
        />
        <VeblagCard
          img="/images/fall-guy-2024-450x253.jpg"
          title="انتشار تصاویر جدید از فیلم The Fall Guy"
          date="۱ دی ۱۴۰۲"
          desc="به تازگی، رسانه اینترتینمنت ویکلی تصاویر جدیدی از فیلم The Fall
          Guy به کارگردانی دیوید لیچ (David Leitch) را با"
        />
        <VeblagCard
          img="/images/superman-legacy-450x253.jpg"
          title=" بازه زمانی شروع فیلمبرداری فیلم Superman: Legacy مشخص شد"
          date=" ۱ دی ۱۴۰۲"
          desc="  پس از گذشت سال‌ها انتظار و انتشار شایعات مختلف در مورد پروژه مستقل
          بعدی شخصیت سوپرمن، می‌دانیم که"
        />
        <VeblagCard
          img="/images/driver-450x253.jpg"
          title=" آدام درایور از فیلم Megapolis می‌گوید"
          date="۳۰ آذر ۱۴۰۲"
          desc="   برکسی پوشیده نیست که فرانسیس فورد کاپولا (Francis Ford Coppola) با
          ساخت سری فیلم‌های The Godfather"
        />
      </div>
    </div>
  );
}
