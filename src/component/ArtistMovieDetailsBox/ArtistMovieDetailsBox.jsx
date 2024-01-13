import React from "react";

export default function ArtistMovieDetailsBox({ image, name, nameIR }) {
  return (
    <div className="flex flex-col items-center bgArtist m-auto">
      <img
        className="object-cover rounded-full w-[105px] h-[100px]"
        src={image}
        alt=""
      />
      <span className="text-white font-medium">{name}</span>
      <span className="text-white font-medium hover:text-yellow-500 transition ">
        {nameIR}
      </span>
    </div>
  );
}
