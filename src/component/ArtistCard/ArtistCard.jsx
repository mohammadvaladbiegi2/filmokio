import React from "react";
import "./ArtistCard.css";

import { Link } from "react-router-dom";

export default function ArtistCard({
  name,
  jobTitle,
  nameIR,
  DateofBirth,
  age,
  URL,
  image,
}) {
  return (
    <div className="animate__animated animate__fadeInRight  bg-[#111618] w-[280px] sm:w-[320px] px-2 my-8">
      <div className="w-[130px] h-[200px] sm:w-[170px] sm:h-[250px] m-auto mt-[-50px]">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-lg object-cover card__placeholder"
        />
      </div>
      <div className="text-center mt-5 ">
        <h1 className="font-medium text-white text-[1.375rem]">{name}</h1>
        <span className="text-[#ccc] text-sm">{jobTitle}</span>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex justify-between px-2 info_Artist relative">
          <span className="text-white font-medium text-sm">نام فارسی :</span>

          <span className="text-white font-medium text-sm">{nameIR}</span>
        </div>
        <div className="flex justify-between px-2 info_Artist_Date relative">
          <span className="text-white font-medium text-sm">تاریخ تولد :</span>

          <span className="text-white font-medium text-sm">{DateofBirth}</span>
        </div>
        <div className="flex justify-between px-2 info_Artist_Age relative">
          <span className="text-white font-medium text-sm">سن :</span>

          <span className="text-white font-medium text-sm">{age} سال</span>
        </div>
      </div>
      <Link to={URL}>
        <button className="bg-[#f5ad11] w-full my-5 py-2 rounded-xl font-medium">
          پروفایل IMDB
        </button>
      </Link>
    </div>
  );
}
