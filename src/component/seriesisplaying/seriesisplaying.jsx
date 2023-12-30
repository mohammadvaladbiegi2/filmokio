import React from "react";
import { MdLocalMovies } from "react-icons/md";
import "./seriesisplaying.css";
import { Link } from "react-router-dom";

export default function seriesisplaying() {
  return (
    <div className="container m-auto mt-[50px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <MdLocalMovies className="text-[#f5ad11] text-3xl me-3" />
          سریال های در حال پخش
        </div>
        <Link
          to="/serial"
          className="bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3]"
        >
          تمامی سریال ها
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-evenly mt-[30px] px-[70px]">
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder ">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
              قسمت 2
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 1
            </button>
            <img
              src="/images/maestra-strings-of-Truth-wallpaper-scaled.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.5/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">
            Maestra: Strings of Truth
          </h5>
        </div>
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
              قسمت 2
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 1
            </button>
            <img
              src="/images/captain-tsubasa-wallpaper.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.2/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">
            Captain Tsubasa
          </h5>
        </div>
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute">
              قسمت 6
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 5
            </button>
            <img
              src="/images/fargo-wallpaper-v5.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.9/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">Fargo</h5>
        </div>
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
              قسمت 2
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 1
            </button>
            <img
              src="/images/percy-jackson-and-the-olympians-wallpaper.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.6/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">
            Percy Jackson and the Olympians
          </h5>
        </div>
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
              قسمت 8
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 1
            </button>
            <img
              src="/images/the-story-of-parks-marriage-contract-wallpaper.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.2/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">
            The Story of Park's Marriage Contract
          </h5>
        </div>
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
              قسمت 9
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 22
            </button>
            <img
              src="/images/family-guy-wallpaper-v2.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.1/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">Family Guy</h5>
        </div>
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
              قسمت 11
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 2
            </button>
            <img
              src="/images/spy-x-family-wallpaper-v3.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.4/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">Spy x Family</h5>
        </div>
        <div className="col cursor-pointer mb-5 ">
          <div className="image-container card__placeholder">
            <button className="button-e bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3] absolute ">
              قسمت 8
            </button>
            <button className="button-s absolute p-1 bg-black text-white rounded-sm">
              فصل 1
            </button>
            <img
              src="/images/my-demon-wallpaper.jpg"
              alt="Maestra Strings of Truth"
              className="image"
            />
            <div className="overlay">
              <p className="text">8.4/10</p>
            </div>
          </div>
          <h5 className="text-white text-center text-[18px]">My Demon</h5>
        </div>
      </div>
    </div>
  );
}
