import React from "react";
import { Link } from "react-router-dom";

export default function VeblagCard({ id, date, image, title }) {
  return (
    <Link to={`/filmokio/veblog/${id}`}>
      <div className=" aspect-video cursor-pointer  w-[320px]  h-80">
        <div className="relative ">
          <img
            src={image}
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis fugiat deleniti impedit
          </p>
        </div>
      </div>
    </Link>
  );
}
