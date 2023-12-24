import React from "react";
import "./SliderHomepageS1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-image">
            <img
              src="/images/lauren-cohan-jeffrey-dean-morgan-the-walking-dead-dead-city-645e3c160cff1.jpg"
              alt="Your Image"
              className="image"
            />
            <div className="overlay flex flex-col">
              <p className="text-title">The Walking Dead 2022</p>
              <span className="score text-[#f5ad11]">9.2</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-image">
            <img
              src="/images/1900px_ozymandias_breaking_bad.jpg"
              alt="Your Image"
              className="image"
            />
            <div className="overlay flex flex-col">
              <p className="text-title">Breaking Bad 2013</p>
              <span className="score text-[#f5ad11]">9.4</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-image">
            <img
              src="/images/Game-of-Thrones-Cover.jpg"
              alt="Your Image"
              className="image"
            />
            <div className="overlay flex flex-col">
              <p className="text-title">Game of Thrones 2019</p>
              <span className="score text-[#f5ad11]">7.2</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-image">
            <img src="/images/scale.jpg" alt="Your Image" className="image" />
            <div className="overlay flex flex-col">
              <p className="text-title">the punisher 2019</p>
              <span className="score text-[#f5ad11]">8.5</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-image">
            <img
              src="/images/AAAABTKNltbqj8mwGcjap_syLhMItvTAqvC0YWQB5FS3lb2QtjqW5rG3gXPFONGryHGMVN00Rxf5VWrNFhztgoEWMwjNyiuEhRPsVnZm.jpg"
              alt="Your Image"
              className="image"
            />
            <div className="overlay flex flex-col">
              <p className="text-title">Peaky Blinders 2022</p>
              <span className="score text-[#f5ad11]">8.8</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-image">
            <img
              src="/images/vikings-season-6-promo-2-1622915370289.webp"
              alt="Your Image"
              className="image"
            />
            <div className="overlay flex flex-col">
              <p className="text-title">the vikings 2020</p>
              <span className="score text-[#f5ad11]">8.9</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container-image">
            <img
              src="/images/1_mEMiafsmsUsSs4eD-rd8_Q.jpeg"
              alt="Your Image"
              className="image"
            />
            <div className="overlay flex flex-col">
              <p className="text-title">Reacher 2023</p>
              <span className="score text-[#f5ad11]">7.8</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-image">
            <img
              src="/images/rick-and-morty-season-6-has-to-be-even-bigger-than-the-multiverse-main.jpg"
              alt="Your Image"
              className="image"
            />
            <div className="overlay flex flex-col">
              <p className="text-title">Rick and Morty 2013</p>
              <span className="score text-[#f5ad11]">9.1</span>
              <span className="score2">10/</span>
              <button className="button">ادامه + دانلود</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
