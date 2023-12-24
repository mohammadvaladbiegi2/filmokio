import React, { useEffect, useRef, useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import BoxMovie from "../../component/BoxMovie/BoxMovie";
export default function Serial() {
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  const myComponentRef = useRef();

  const handleWindowClick = (event) => {
    if (!myComponentRef.current.contains(event.target)) {
      setshow1(false);
      setshow2(false);
      setshow3(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div className="pt-[200px]">
      <h1 className="font-medium text-center text-white text-5xl">
        همه سریال ها
      </h1>
      <div className="px-[4.8rem]">
        <div
          className="flex items-center justify-center md:flex-row  flex-col  mt-10"
          ref={myComponentRef}
        >
          <div
            className="group cursor-pointer mx-3 my-3 md:my-4"
            onClick={() => {
              setshow1((prev) => !prev);
              setshow2(false);
              setshow3(false);
            }}
          >
            <div
              className={`${
                show1 ? "border-yellow-500" : "border-[#666] "
              } w-[210px] px-2 py-4  border-solid border-2 h-auto  rounded-2xl flex justify-between items-center `}
            >
              <div className="text-white font-medium	 transition duration-300 ">
                مرتب سازی
              </div>

              {!show1 ? (
                <FaAngleDown className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              ) : (
                <IoChevronUpSharp className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              )}
            </div>

            <div
              className={`w-[210px] absolute ${
                show1
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : "hidden"
              }  z-20 p-2 text-justify text-white bg-[#666] h-auto mt-1 rounded-2xl`}
            >
              <div className="hover:text-yellow-500 py-2">بروز ترین</div>
              <hr />
              <div className="hover:text-yellow-500 py-2">امتیاز IMDB</div>
              <hr />
              <div className="hover:text-yellow-500 py-2">محبوب ترین</div>
            </div>
          </div>
          <div
            ref={myComponentRef}
            className="group cursor-pointer mx-3 my-3 md:my-4"
            onClick={() => {
              setshow2((prev) => !prev);
              setshow1(false);
              setshow3(false);
            }}
          >
            <div
              className={`w-[210px] px-2 py-4  border-solid border-2  ${
                show2 ? "border-yellow-500" : "border-[#666]"
              } h-auto  rounded-2xl flex justify-between items-center`}
            >
              <div className="text-white font-medium	 transition duration-300 ">
                امتیاز IMDB
              </div>

              {!show2 ? (
                <FaAngleDown className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              ) : (
                <IoChevronUpSharp className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              )}
            </div>

            <div
              className={`w-[210px] absolute ${
                show2
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : "hidden"
              }  z-20 p-2 text-justify text-white bg-[#666] h-auto mt-1 rounded-2xl`}
            >
              <div className="hover:text-yellow-500 py-2">بالا 9</div>
              <hr />
              <div className="hover:text-yellow-500 py-2">بالا 8</div>
              <hr />
              <div className="hover:text-yellow-500 py-2">بالا 7</div>
              <hr />
              <div className="hover:text-yellow-500 py-2">بالا 6</div>
            </div>
          </div>
          <div
            className="group cursor-pointer mx-3 my-3 md:my-4"
            onClick={() => {
              setshow3((prev) => !prev);
              setshow2(false);
              setshow1(false);
            }}
          >
            <div
              className={`${
                show3 ? "border-yellow-500" : "border-[#666] "
              } w-[210px] px-2 py-4  border-solid border-2  h-auto  rounded-2xl flex justify-between items-center `}
            >
              <div className="text-white font-medium	 transition duration-300 ">
                ژانر
              </div>

              {!show3 ? (
                <FaAngleDown className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              ) : (
                <IoChevronUpSharp className="text-white text-[16px] cursor-pointer   transition duration-300 " />
              )}
            </div>

            <div
              className={`w-[210px] absolute ${
                show3
                  ? "animate__animated animate__fadeInUp animate__faster"
                  : "hidden"
              }  z-20 p-2 text-justify text-white bg-[#666] h-auto mt-1 rounded-2xl`}
            >
              <div className="hover:text-yellow-500 py-2"> درام</div>
              <hr />
              <div className="hover:text-yellow-500 py-2"> کمدی</div>
              <hr />
              <div className="hover:text-yellow-500 py-2"> اکشن</div>
              <hr />
              <div className="hover:text-yellow-500 py-2"> هیجان انگیز</div>
              <hr />
              <div className="hover:text-yellow-500 py-2"> عاشقانه</div>
              <hr />
              <div className="hover:text-yellow-500 py-2"> جنایی</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-1">
          <BoxMovie img="/images/MV5BMWRhZmJkNzAtMzdiNC00ZDAzLWExOWUtYWQ2NzVlNmRhNDlhXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX500.jpg" />
          <BoxMovie img="/images/percy-jackson-and-the-olympians-poster.jpg" />
          <BoxMovie img="/images/MV5BMGE4NGVlNTctYWRiYy00MmYwLTkwZmItZDMwN2QwZDc5MDc0XkEyXkFqcGd-scaled.jpg" />
          <BoxMovie img="/images/MV5BOGQ3ZjhhYzEtNjczZi00YTlhLThlNzctNWU4NTBhMzYxNzg4XkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BNWUzODllZDYtNDEyOC00NzZlLTkzYmMtMWE0YWEwYTA1Y2RhXkEyXkFqcGdeQXVyMTI4ODE4ODA@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BNTA2NmY5MzgtY2ExNC00ZjlhLTk2MWItNDQxNmQwZDU4OTUwXkEyXkFqcGdeQXVyODQyMjM0ODI@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BZmZlZjQ1MzgtNmVjNS00YzUxLTlkMTUtMTU0NDFhNzJjMTkyXkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BMTY2MGEzNmItOGRjOC00Njk1LWJjYjctMGUwOGIwNzk3NzBkXkEyXkFqcGdeQXVyMTk3NDAwMzI@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BZmVhNDY4ODEtMGY2My00MDZjLThjMmItYTE0OGYyMjJjZTkwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BNjIzZDg2YWUtZGEwOS00OGM5LTgwZTgtMGVhMTFiZDhjMjExXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BZDg5OTgzNTEtMDJmOS00MWMzLWFmYmQtNTNlZjg5YjI1YjRiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BMjBiODgyMWMtYzRkZC00MTM3LWI5YWEtMmQ0ZDM0NjgxZGM0XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BZDhiZmQ5MDktODRmNC00NDc3LWFmMTQtNTRmNWZjMDdjMWVkXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX500.jpg" />
          <BoxMovie img="/images/monarch-legacy-of-monsters-poster.jpg" />
          <BoxMovie img="/images/MV5BZjRkM2IyM2UtYzRkYi00ODdlLWFiODktODQzZWNiMmFjZjM1XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX500.jpg" />
          <BoxMovie img="/images/MV5BMTU0MTAxNTUzMl5BMl5BanBnXkFtZTgwMTE0NDg4OTE@._V1_SX500.jpg" />
          <BoxMovie img="/images/vigilante-poster.jpg" />
          <BoxMovie img="/images/MV5BYTRhMWE1NjMtZTc0YS00YTU0LTlkYzgtMzE5MGFlZmVjYTFlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX500.jpg" />
        </div>
        <div className="flex items-center mt-10 justify-center gap-2">
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-2xl px-10 py-5 flex items-center justify-center w-5 h-5">
            قبلی
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-[50%] p-6 flex items-center justify-center w-5 h-5">
            1
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-[50%] p-6 flex items-center justify-center w-5 h-5">
            2
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-[50%] p-6 flex items-center justify-center w-5 h-5">
            3
          </button>
          <button className="bg-[#66666699] cursor-pointer text-white hover:text-yellow-500 rounded-2xl px-10 py-5 flex items-center justify-center w-5 h-5">
            بعدی
          </button>
        </div>
      </div>
    </div>
  );
}
