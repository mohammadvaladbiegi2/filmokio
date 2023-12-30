import React from "react";
import { MdLocalMovies } from "react-icons/md";
import CardMovieSlider from "../CardMoveiSlider/CardMoveiSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
export default function latestmovies() {
  return (
    <div className="container m-auto mt-[50px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <MdLocalMovies className="text-[#f5ad11] text-3xl me-3" />
          اخرین فیلم ها
        </div>
        <Link
          to="/movie"
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
          <SwiperSlide>
            <CardMovieSlider img="/images/Yaathisai-2023-Poster.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BYzUzNzQyYWYtY2RjYy00MmFiLTg1MjAtZjk3OGMzNTMxNTMyXkEyXkFqcGdeQXVyMTE5NTM5NTU5._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BN2ZjNDg4ZGQtZTY4NC00MWVmLTk4ZmEtYjc1NWRkZWRjMWUwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/the-hunger-games-the-ballad-of-songbirds-snakes-2023-Poster.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BOGZhOGJjZTAtOTJmYS00ZTk2LTgxYWEtNjM3ZmUxMjY2NWFiXkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BYjJhMDk2OTMtOTFhZS00MGI5LTk1MTctYWIxN2NmMjNhZmRiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BMTIwZWI0Y2YtZGJhZC00MjU4LTliZTUtODVjZjk4Y2FlYzI1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BYTdiYTMxZGMtM2FjOC00NTgzLTllZWQtNTIyY2VkMDE0ZTYzXkEyXkFqcGdeQXVyMTEwNTM5MjE3._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BMTM3Njk3ODA2M15BMl5BanBnXkFtZTcwNzUzOTMxOQ@@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BOTY0OTc3OTkyNV5BMl5BanBnXkFtZTcwMTg4Nzc5MQ@@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BNzQyZmFmMTgtNWVjNS00ZDY1LTgxMjAtMjM4ZmU2NjhiNzExXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX500.jpg" />
          </SwiperSlide>
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
          <SwiperSlide>
            <CardMovieSlider img="/images/Yaathisai-2023-Poster.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BYzUzNzQyYWYtY2RjYy00MmFiLTg1MjAtZjk3OGMzNTMxNTMyXkEyXkFqcGdeQXVyMTE5NTM5NTU5._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BN2ZjNDg4ZGQtZTY4NC00MWVmLTk4ZmEtYjc1NWRkZWRjMWUwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/the-hunger-games-the-ballad-of-songbirds-snakes-2023-Poster.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BOGZhOGJjZTAtOTJmYS00ZTk2LTgxYWEtNjM3ZmUxMjY2NWFiXkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BYjJhMDk2OTMtOTFhZS00MGI5LTk1MTctYWIxN2NmMjNhZmRiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BMTIwZWI0Y2YtZGJhZC00MjU4LTliZTUtODVjZjk4Y2FlYzI1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BYTdiYTMxZGMtM2FjOC00NTgzLTllZWQtNTIyY2VkMDE0ZTYzXkEyXkFqcGdeQXVyMTEwNTM5MjE3._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BMTM3Njk3ODA2M15BMl5BanBnXkFtZTcwNzUzOTMxOQ@@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BOTY0OTc3OTkyNV5BMl5BanBnXkFtZTcwMTg4Nzc5MQ@@._V1_SX500.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CardMovieSlider img="/images/MV5BNzQyZmFmMTgtNWVjNS00ZDY1LTgxMjAtMjM4ZmU2NjhiNzExXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX500.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
