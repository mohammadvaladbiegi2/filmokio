import React from "react";

export default function VeblagCard({ img, date, title, desc }) {
  return (
    <div className=" aspect-video  w-[320px]  h-80">
      <div className="relative ">
        <img
          src={img}
          className="rounded-lg object-cover card__placeholder"
          alt=""
        />
        <div className="absolute group-hover:hidden top-2 text-[15px] left-[0.5rem]">
          <button
            className="text-white bg-[#000000c2] rounded-lg p-1"
            variant="secondary"
          >
            {date}
          </button>
        </div>
      </div>
      <span className="text-white text-[20px] text-center block h-16">
        {title}
      </span>
      <div className="flex flex-col h-16 overflow-hidden my-2">
        <p className="text-[#aaa] text-[1rem] text-justify line-clamp-1 lg:line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
