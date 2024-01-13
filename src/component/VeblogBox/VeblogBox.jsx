import React from "react";
import { Link } from "react-router-dom";

export default function VeblogBox({ id, title, time, image, date }) {
  return (
    <Link to={`/filmokio/veblog/${id}`}>
      <div className="animate__animated animate__zoomIn relative group cursor-pointer  transition duration-300">
        <img
          src={image}
          className="w-[440px] h-[250px] object-cover   rounded-lg "
          alt=""
        />
        <div className="absolute   left-4   top-4  ">
          <button
            className="text-white py-1 px-3  bg-[rgba(0,0,0,.7)] rounded-lg "
            variant="secondary"
          >
            {date}
          </button>
        </div>
        <div className="absolute  overlay">
          <h2 className="text-[17px] group-hover:text-[#f5ad11] transition  text-white w-full font-medium overflow-ellipsis bottom-9 right-1 absolute">
            {title}
          </h2>
          <div className="group-hover:text-[#f5ad11] transition  bottom-2 right-1 absolute text-[#f2f2f2] font-medium">
            {" "}
            زمان مطالعه: {time} دقیقه
          </div>
        </div>
      </div>
    </Link>
  );
}
