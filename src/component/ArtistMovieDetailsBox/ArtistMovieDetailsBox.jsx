import React from "react";

export default function ArtistMovieDetailsBox() {
  return (
    <div className="flex flex-col items-center bgArtist m-auto">
      <img
        className="object-cover rounded-full w-[105px] h-[100px]"
        src="/images/MV5BMjQxOTcyNDEyMV5BMl5BanBnXkFtZTgwMjMzMzYyNTE@._SY600_SX400-105x150.jpg"
        alt=""
      />
      <span className="text-white font-medium">Marton Csokas</span>
      <span className="text-white font-medium hover:text-yellow-500 transition cursor-pointer">
        Colonel Jan Koehorst
      </span>
    </div>
  );
}
