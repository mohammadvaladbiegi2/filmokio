import React, { useEffect } from "react";
import "./SliderHomepageS1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useSelector, useDispatch } from "react-redux";
import { getSerialFromServer } from "../../Redux/stors/SerialReduce";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
export default function App() {
  const { AllSerial, isLoading } = useSelector((state) => state.Serial);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSerialFromServer());
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
          {AllSerial.slice(0, 4).map((seril) => (
            <SwiperSlide key={seril.id}>
              <Link to={`/filmokio/serial/${seril.id}`}>
                <div className="container-image cursor-pointer">
                  <img
                    src={seril.bgSlider}
                    alt="Your Image"
                    className="image"
                  />
                  <div className="overlay flex flex-col">
                    <p className="text-title">{seril.title}</p>
                    <span className="score  hidden md:flex text-[#f5ad11]">
                      {seril.score}
                    </span>
                    <span className="score2 hidden md:flex">10/</span>
                    <Link
                      to={`/filmokio/serial/${seril.id}`}
                      className="button ms-[-60px] md:ms-0 cursor-pointer"
                    >
                      ادامه + دانلود
                    </Link>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
