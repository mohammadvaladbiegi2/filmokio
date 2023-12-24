import React from "react";
import { MdLocalMovies } from "react-icons/md";
import "./LastMovie.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Scrollbar, Autoplay } from "swiper/modules";
export default function latestmovies() {
  return (
    <div className="container m-auto mt-[50px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <MdLocalMovies className="text-[#f5ad11] text-3xl me-3" />
          اخرین فیلم ها
        </div>
        <button className="bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3]">
          تمامی فیلم ها
        </button>
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
            <div className="flex-none mx-auto cursor-pointer  group  w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300  "
                height="450"
                src="/images/Yaathisai-2023-Poster.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden  bottom-[3rem] text-[20px] left-[8rem]">
                <button
                  className="text-white  bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BYzUzNzQyYWYtY2RjYy00MmFiLTg1MjAtZjk3OGMzNTMxNTMyXkEyXkFqcGdeQXVyMTE5NTM5NTU5._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BN2ZjNDg4ZGQtZTY4NC00MWVmLTk4ZmEtYjc1NWRkZWRjMWUwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Silent Night 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/the-hunger-games-the-ballad-of-songbirds-snakes-2023-Poster.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Silent Night 2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="The Hunger Games: The Ballad of Songbirds and Snakes movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BOGZhOGJjZTAtOTJmYS00ZTk2LTgxYWEtNjM3ZmUxMjY2NWFiXkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">The Hunger Games</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Thanksgiving 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BYjJhMDk2OTMtOTFhZS00MGI5LTk1MTctYWIxN2NmMjNhZmRiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white group-hover:hidden bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>
              <p className="mt-2 text-center text-white">Thanksgiving 2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BMTIwZWI0Y2YtZGJhZC00MjU4LTliZTUtODVjZjk4Y2FlYzI1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BYTdiYTMxZGMtM2FjOC00NTgzLTllZWQtNTIyY2VkMDE0ZTYzXkEyXkFqcGdeQXVyMTEwNTM5MjE3._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BMTM3Njk3ODA2M15BMl5BanBnXkFtZTcwNzUzOTMxOQ@@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Silent Night 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Silent Night 2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="The Hunger Games: The Ballad of Songbirds and Snakes movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BOTY0OTc3OTkyNV5BMl5BanBnXkFtZTcwMTg4Nzc5MQ@@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">The Hunger Games</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Thanksgiving 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BNzQyZmFmMTgtNWVjNS00ZDY1LTgxMjAtMjM4ZmU2NjhiNzExXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white group-hover:hidden bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>
              <p className="mt-2 text-center text-white">Thanksgiving 2023</p>
            </div>
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
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BMTM3Njk3ODA2M15BMl5BanBnXkFtZTcwNzUzOTMxOQ@@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group  w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300  "
                height="450"
                src="/images/Yaathisai-2023-Poster.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden  bottom-[3rem] text-[20px] left-[8rem]">
                <button
                  className="text-white  bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Thanksgiving 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BNzQyZmFmMTgtNWVjNS00ZDY1LTgxMjAtMjM4ZmU2NjhiNzExXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white group-hover:hidden bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>
              <p className="mt-2 text-center text-white">Thanksgiving 2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BYzUzNzQyYWYtY2RjYy00MmFiLTg1MjAtZjk3OGMzNTMxNTMyXkEyXkFqcGdeQXVyMTE5NTM5NTU5._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BN2ZjNDg4ZGQtZTY4NC00MWVmLTk4ZmEtYjc1NWRkZWRjMWUwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="The Hunger Games: The Ballad of Songbirds and Snakes movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BOGZhOGJjZTAtOTJmYS00ZTk2LTgxYWEtNjM3ZmUxMjY2NWFiXkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">The Hunger Games</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Thanksgiving 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BYjJhMDk2OTMtOTFhZS00MGI5LTk1MTctYWIxN2NmMjNhZmRiXkEyXkFqcGdeQXVyOTg4MDYyNw@@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white group-hover:hidden bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>
              <p className="mt-2 text-center text-white">Thanksgiving 2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BMTIwZWI0Y2YtZGJhZC00MjU4LTliZTUtODVjZjk4Y2FlYzI1XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Stutz 2022 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BYTdiYTMxZGMtM2FjOC00NTgzLTllZWQtNTIyY2VkMDE0ZTYzXkEyXkFqcGdeQXVyMTEwNTM5MjE3._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Stutz 2022</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Silent Night 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Silent Night 2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="The Hunger Games: The Ballad of Songbirds and Snakes movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/MV5BOTY0OTc3OTkyNV5BMl5BanBnXkFtZTcwMTg4Nzc5MQ@@._V1_SX500.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">The Hunger Games</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-none mx-auto cursor-pointer  group w-[230px] m-2 relative">
              <img
                alt="Silent Night 2023 movie poster"
                className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300"
                height="450"
                src="/images/the-hunger-games-the-ballad-of-songbirds-snakes-2023-Poster.jpg"
                style={{
                  aspectRatio: "300/450",
                  objectFit: "cover",
                }}
                width="300"
              />
              <div className="absolute group-hover:hidden bottom-[3rem] text-[20px] left-[8.5rem]">
                <button
                  className="text-white bg-slate-900 rounded-lg p-1"
                  variant="secondary"
                >
                  7.6/10
                </button>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg p-4 mb-2 text-[13.5px]   text-justify">
                  شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا
                  قدرت خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها
                  شدند.
                </p>
                <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 mb-10">
                  ادامه + دانلود
                </button>
              </div>

              <p className="mt-2 text-center text-white">Silent Night 2023</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
