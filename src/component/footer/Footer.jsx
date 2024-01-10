import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="my-10">
      <div className="flex justify-center ">
        <div className="w-[50px] mx-3 group h-[50px] bg-[#666] cursor-pointer rounded-[50%] transition duration-300 hover:bg-yellow-500 flex items-center justify-center ">
          <BiLogoTelegram className="text-[25px] group-hover:text-black text-white " />
        </div>
        <div className="w-[50px] mx-3 group h-[50px] bg-[#666] cursor-pointer rounded-[50%] transition duration-300 hover:bg-yellow-500 flex items-center justify-center ">
          <SiInstagram className="text-[25px] group-hover:text-black text-white " />
        </div>
        <div className="w-[50px] mx-3 group h-[50px] bg-[#666] cursor-pointer rounded-[50%] transition duration-300 hover:bg-yellow-500 flex items-center justify-center ">
          <FaTwitter className="text-[25px] group-hover:text-black text-white " />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Link
          to="/filmokio/"
          className="text-[#666] mx-4 hover:text-yellow-500 translate duration-300"
        >
          صفحه نخست{" "}
        </Link>
        <Link
          to="/filmokio/movie"
          className="text-[#666] mx-4 hover:text-yellow-500 translate duration-300"
        >
          فیلم
        </Link>
        <Link
          to="/filmokio/serial"
          className="text-[#666] mx-4 hover:text-yellow-500 translate duration-300"
        >
          سریال
        </Link>
        <Link
          to="/filmokio/artists"
          className="text-[#666] mx-4 hover:text-yellow-500 translate duration-300"
        >
          هنرمندان
        </Link>
      </div>
      <div className="text-center text-[#666] mt-3">
        تمامی حقوق مادی و معنوی این وبسایت متعلق به
        <span className="text-[#f5ad11] px-2">MAMAD</span>
        <span>می باشد </span>
      </div>
    </div>
  );
}
