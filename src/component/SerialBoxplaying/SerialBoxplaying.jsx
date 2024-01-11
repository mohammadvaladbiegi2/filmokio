import { Link } from "react-router-dom";
import React from "react";

export default function SerialBoxplaying({ id, title, score, image }) {
  return (
    <Link to={`/filmokio/movie/${id}`}>
      <div className="col cursor-pointer mb-5 ">
        <div className="image-container card__placeholder">
          <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
            قسمت 8
          </button>
          <button className="button-s absolute p-1 bg-black text-white rounded-sm">
            فصل 1
          </button>
          <img
            src={image}
            alt="Maestra Strings of Truth"
            className="image object-fill"
          />
          <div className="overlay">
            <p className="text">{score}/10</p>
          </div>
        </div>
        <h5 className="text-white text-center text-[18px]">{title}</h5>
      </div>
    </Link>
  );
}
