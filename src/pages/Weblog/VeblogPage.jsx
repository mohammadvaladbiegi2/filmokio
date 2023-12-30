import React from "react";
import ParticlsJS from "../../component/particls/ParticlsJS";
import VeblagCard from "../../component/VeblagCard/VeblagCard";
import VeblogBox from "../../component/VeblogBox/VeblogBox";

export default function VeblogPage() {
  return (
    <div className="pt-[200px]">
      <ParticlsJS />

      <h1 className="font-medium text-center text-white text-5xl">وبلاگ</h1>
      <div className="px-[4.8rem]">
        <div className="flex justify-center items-center flex-wrap gap-5 mt-16">
          <VeblogBox />
          <VeblogBox />
          <VeblogBox />
          <VeblogBox />
          <VeblogBox />
          <VeblogBox />
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