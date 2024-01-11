import React, { useEffect } from "react";
import { MdLocalMovies } from "react-icons/md";
import CardMovieSlider from "../CardMoveiSlider/CardMoveiSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieFromServer } from "../../Redux/stors/MoviesReduce";
export default function latestmovies() {
  const dispatch = useDispatch();
  const { AllMovies } = useSelector((state) => state.Movies);
  useEffect(() => {
    dispatch(getMovieFromServer());
  }, []);
  return (
    <div className="container m-auto mt-[50px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <MdLocalMovies className="text-[#f5ad11] text-3xl me-3" />
          اخرین فیلم ها
        </div>
        <Link
          to="/filmokio/movie"
          className="bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3]"
        >
          تمامی فیلم ها
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-evenly  mt-[30px] px-[70px]">
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1226: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper"
        >
          {AllMovies.slice(0, 8).map((movie) => (
            <SwiperSlide>
              <CardMovieSlider {...movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-wrap items-center justify-evenly  mt-[30px] px-[70px]">
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1226: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper"
        >
          {AllMovies.slice(8, 16).map((movie) => (
            <SwiperSlide>
              <CardMovieSlider {...movie} key={movie.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
