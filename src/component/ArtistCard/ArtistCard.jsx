import React from "react";
import "./ArtistCard.css";

export default function ArtistCard() {
  return (
    <div className="bg-[#111618] w-[280px] sm:w-[320px] px-2 my-8">
      <div className="w-[130px] h-[200px] sm:w-[170px] sm:h-[250px] m-auto mt-[-50px]">
        <img
          src="/images/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._SY600_SX400.jpg"
          alt=""
          className="w-full h-full rounded-lg card__placeholder"
        />
      </div>
      <div className="text-center mt-5 ">
        <h1 className="font-medium text-white text-[1.375rem]">
          Morgan Freeman
        </h1>
        <span className="text-[#ccc] text-sm">بازیگر,تهیه کننده,کارگردان</span>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex justify-between px-2 info_Artist relative">
          <span className="text-white font-medium text-sm">نام فارسی :</span>

          <span className="text-white font-medium text-sm">مورگان فریمن</span>
        </div>
        <div className="flex justify-between px-2 info_Artist_Date relative">
          <span className="text-white font-medium text-sm">تاریخ تولد :</span>

          <span className="text-white font-medium text-sm">۱۱ خرداد ۱۳۱۶</span>
        </div>
        <div className="flex justify-between px-2 info_Artist_Age relative">
          <span className="text-white font-medium text-sm">سن :</span>

          <span className="text-white font-medium text-sm">86 سال</span>
        </div>
      </div>
      <button className="bg-[#f5ad11] w-full my-5 py-2 rounded-xl font-medium">
        پروفایل IMDB
      </button>
    </div>
  );
}
