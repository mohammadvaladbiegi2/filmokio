import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getMovieFromServer } from "../../Redux/stors/MoviesReduce";
import { getArtistFromServer } from "../../Redux/stors/ArtistsReduce";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ArtistMovieDetailsBox from "../../component/ArtistMovieDetailsBox/ArtistMovieDetailsBox";

import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const { AllMovies } = useSelector((state) => state.Movies);
  const { AllArtist } = useSelector((state) => state.Artist);
  const dispatch = useDispatch();
  const [movieDetails, setmovieDetails] = useState(null);

  useEffect(() => {
    dispatch(getMovieFromServer());
    dispatch(getArtistFromServer());
    let main = AllMovies.find((movie) => movie.id === Number(id));
    setmovieDetails(main);

    window.scroll(0, 0);
  }, []);

  window.scroll(0, 0);
  return (
    <div className="pt-[150px] pb-12">
      <div className=" text-white min-h-screen p-4 ">
        <div className=" mx-auto max-w-[24rem] md:max-w-[47rem] lg:max-w-[58rem] xl:max-w-none flex flex-col md:flex-row bg-Movie">
          <div className="flex-none w-[315px] h-[450px] sm:h-[500px] sm:w-[360px] mx-auto xl:max-w-none ">
            <img
              alt="Blazing Saddles Poster"
              className="w-full h-auto rounded-lg object-cover"
              src={movieDetails?.image}
            />
          </div>
          <div className=" md:max-w-[22rem] lg:max-w-[33rem] xl:max-w-none xl:px-[6%] mt-10">
            <h1 className="text-3xl font-bold  text-center">
              {movieDetails?.title}
            </h1>
            <div className="flex gap-3 items-center justify-center mt-10">
              <span className="text-sm">R</span>
              <li className="text-sm">{movieDetails?.year}</li>
              <li variant="secondary">{movieDetails?.timeE} دقیقه</li>
            </div>

            <div className="flex items-center justify-center gap-5 mt-4">
              <button className="bg-transparent text-white  border-solid border-2 border-[#666] rounded-xl p-2">
                {movieDetails?.category}
              </button>
              <button className="bg-transparent text-white  border-solid border-2 border-[#666] rounded-xl p-2">
                سینمایی
              </button>
            </div>
            <div className="flex items-center justify-evenly md:justify-center space-x-2 mt-4">
              <div className="border-solid border-2 border-[#666] p-4 rounded-xl mt-3 cursor-pointer">
                <IoShareOutline className="text-[#ffd700] w-6 h-6 " />
              </div>
              <div className="border-solid border-2 border-[#666] p-4 rounded-xl mt-3 cursor-pointer">
                <AiOutlineDislike className="text-[#ff0000] w-6 h-6 " />
              </div>
              <div className="border-solid border-2 border-[#666] p-4 rounded-xl mt-3 cursor-pointer">
                <AiOutlineLike className="text-[#00ff2a] w-6 h-6 " />
              </div>
              <div className="flex items-center justify-center flex-col space-x-2 mt-4 border-solid border-2 border-[#666] rounded-xl p-2">
                <div>
                  <span className="text-2xl font-bold text-yellow-400">
                    {movieDetails?.score}
                  </span>
                  <span className="text-2xl font-bold ">/10</span>
                </div>
                <span className="text-sm ps-1">{movieDetails?.Vote}k</span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center xl:gap-8 mt-6">
              <div className="mt-2">
                <span className="font-bold">کارگردان: </span>
                {movieDetails?.writer}
                {"\n          "}
              </div>
              <div className="mt-2">
                <span className="font-bold">ستارگان: </span>
                Cleavon Little, Gene Wilder, Slim Pickens
              </div>
              <div className="mt-2">
                <span className="font-bold">کشور: </span>
                آمریکا
              </div>
            </div>
            <div className="flex gap-3 mt-7">
              <button className="w-full bg-[#f5ad11] p-2 rounded-xl text-black">
                پخش آنلاین
              </button>
              <button className="w-full bg-[#2d5395] p-2 rounded-xl text-white">
                دانلود
              </button>
            </div>
            <p className="text-sm mt-4 font-normal leading-6">
              {movieDetails?.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0c1012] py-5 flex md:justify-evenly justify-center gap-8">
        <span className="text-white font-medium hover:text-yellow-400 transition cursor-pointer ">
          دانلود
        </span>
        <span className="text-white font-medium hover:text-yellow-400 transition cursor-pointer ">
          دیدگاه
        </span>
        <span className="text-white font-medium hover:text-yellow-400 transition cursor-pointer ">
          تریلر
        </span>
        <span className="text-white font-medium hover:text-yellow-400 transition cursor-pointer ">
          سوالات متداول
        </span>
      </div>
      <div className="DownloadLink px-12 sm:px-16 mt-10 gap-6 flex flex-col">
        {movieDetails?.link.map((links) => (
          <div className="flex flex-wrap justify-between items-center bg-[#0c1012] p-5 rounded-md   border-solid border-r-4 border-[#f5ad11]">
            <div className="flex gap-10">
              <div className="flex items-center">
                <span className="text-yellow-400 font-medium">کیفیت: </span>
                <span className="text-white font-medium ps-2">
                  {" "}
                  BluRay {links.Quality}p
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 font-medium">حجم: </span>
                <span className="text-white font-medium ps-2">
                  {" "}
                  {links.Volume} GB
                </span>
              </div>
            </div>
            <button className="bg-[#f5ad11] py-2 px-5 mt-3 w-full sm:w-20 sm:mt-0 rounded-lg">
              دانلود
            </button>
          </div>
        ))}
      </div>
      <div className="writer flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:px-16 px-12 mt-12">
        <div className="rounded-lg border-solid border-4 border-[#0d1113] flex flex-col item-center p-4 justify-center">
          <span className="font-medium text-white m-auto">زبان:</span>
          <span className="font-medium text-yellow-500 mt-5">
            {movieDetails?.Language}
          </span>
        </div>
        <div className="rounded-lg border-solid border-4 border-[#0d1113] flex flex-col item-center p-4 justify-center">
          <span className="font-medium text-white m-auto">نویسنده:</span>
          <span className="font-medium text-yellow-500 mt-5">
            {movieDetails?.writer}
          </span>
        </div>
      </div>

      <div className=" px-[60px]  mt-11 ">
        <div className="title">
          <span className="text-white text-xl font-medium">
            لیست بازیگران تستی
          </span>
          <div className="bg-[#ffa6009f] p-1 w-[215px] mt-[-6px]"></div>
        </div>
        <div className="mt-8">
          <Swiper
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1226: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper"
          >
            {AllArtist?.slice(0, 5).map((artist) => (
              <SwiperSlide>
                <ArtistMovieDetailsBox {...artist} key={artist.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
