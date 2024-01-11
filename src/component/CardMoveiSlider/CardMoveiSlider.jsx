import React from "react";
import { Link } from "react-router-dom";

export default function CardMoveiSlider({
  id,
  title,
  score,
  shortDesk,
  image,
}) {
  return (
    <Link to={`/filmokio/movie/${id}`}>
      <div className="flex-none mx-auto cursor-pointer  group  w-[230px] m-2 relative ">
        <img
          alt="Stutz 2022 movie poster"
          className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300  card__placeholder"
          height="450"
          src={image}
          style={{
            aspectRatio: "300/450",
            objectFit: "cover",
          }}
          width="300"
        />
        <div className="absolute group-hover:hidden w-full bottom-9 text-[20px] right-1">
          <button
            className="text-white  bg-slate-900 rounded-lg p-1"
            variant="secondary"
          >
            {score}
          </button>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
          <p className="text-white  p-4 mb-2 text-[17px]   text-justify">
            {shortDesk}
          </p>
          <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
            ادامه + دانلود
          </button>
        </div>

        <p className="mt-2 text-center text-white">{title}</p>
      </div>
    </Link>
  );
}
