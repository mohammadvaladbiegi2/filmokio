import React from "react";

export default function VeblogBox() {
  return (
    <div className="relative group cursor-pointer hover:-translate-y-3  transition duration-300">
      <img
        src="/images/john-wick-4.jpg"
        className="w-[440px] h-[250px] object-cover   rounded-lg "
        alt=""
      />
      <div className="absolute   left-4   top-4  ">
        <button
          className="text-white py-1 px-3  bg-[rgba(0,0,0,.7)] rounded-lg "
          variant="secondary"
        >
          ۷ دی ۱۴۰۲
        </button>
      </div>
      <div class="absolute  overlay">
        <h2 className="text-[17px] group-hover:text-[#f5ad11] transition  text-white w-full font-medium overflow-ellipsis bottom-9 right-1 absolute">
          معرفی پنج فیلم برتر ژانر اکشن در سال ۲۰۲۳
        </h2>
        <div class="group-hover:text-[#f5ad11] transition  bottom-2 right-1 absolute text-[#f2f2f2] font-medium">
          {" "}
          زمان مطالعه: 7 دقیقه
        </div>
      </div>
    </div>
  );
}
