import React, { useState, useRef, useEffect } from "react";

import BoxMovie from "../../component/BoxMovie/BoxMovie";

import { useDispatch, useSelector } from "react-redux";
import { getMovieFromServer } from "../../Redux/stors/MoviesReduce";
import Loader from "../../component/Loader/Loader";
import Select from "../../component/Select/Select";
export default function Movie() {
  const [Ordered, setOrdered] = useState("all");
  const [showMovie, setShowMovie] = useState([]);
  const dispatch = useDispatch();
  const { AllMovies, isLoading, isreject } = useSelector(
    (state) => state.Movies
  );

  useEffect(() => {
    dispatch(getMovieFromServer());
  }, [Ordered]);
  useEffect(() => {
    switch (Ordered) {
      case "all":
        setShowMovie(AllMovies);
        break;
      case "drama":
        const filterdram = [...AllMovies].filter(
          (movie) => movie.category === "drama"
        );
        setShowMovie(filterdram);
        break;
      case "comedy":
        const filtercomedy = [...AllMovies].filter(
          (movie) => movie.category === "comedy"
        );
        setShowMovie(filtercomedy);
        break;
      case "action":
        const filteraction = [...AllMovies].filter(
          (movie) => movie.category === "action"
        );
        setShowMovie(filteraction);
        break;
      case "Exciting":
        const filterExciting = [...AllMovies].filter(
          (movie) => movie.category === "Exciting"
        );
        setShowMovie(filterExciting);
        break;
      case "Romantic":
        const filterRomantic = [...AllMovies].filter(
          (movie) => movie.category === "Romantic"
        );
        setShowMovie(filterRomantic);
        break;
      case "Criminal":
        const filterCriminal = [...AllMovies].filter(
          (movie) => movie.category === "Criminal"
        );
        setShowMovie(filterCriminal);
        break;
      case 7:
        const filterscormovieip7 = [...AllMovies].filter(
          (movie) => movie.score > 7
        );
        setShowMovie(filterscormovieip7);
        break;
      case 6:
        const filterscormovieup6 = [...AllMovies].filter(
          (movie) => movie.score > 6
        );
        setShowMovie(filterscormovieup6);
        break;
      case 5:
        const filterscormovieup5 = [...AllMovies].filter(
          (movie) => movie.score > 5
        );
        setShowMovie(filterscormovieup5);
        break;
      case 4:
        const filterscormovieup4 = [...AllMovies].filter(
          (movie) => movie.score > 4
        );
        setShowMovie(filterscormovieup4);
        break;
      case "mostRecent":
        const filtermostRecent = [...AllMovies].sort((a, b) => b.year - a.year);
        setShowMovie(filtermostRecent);
        break;
      case "IMDBScore":
        const filterIMDBScore = [...AllMovies].sort(
          (a, b) => b.score - a.score
        );
        setShowMovie(filterIMDBScore);
        break;
      case "MostPopular":
        const filterMostPopular = [...AllMovies].sort(
          (a, b) => b.popularity - a.popularity
        );
        setShowMovie(filterMostPopular);
        break;

      default:
        break;
    }
  }, [Ordered]);

  return (
    <div className="pt-[200px]">
      <h1 className="font-medium text-center text-white text-5xl">
        همه فیلم ها
      </h1>
      <div className="px-[4.8rem]">
        <div className="flex items-center justify-center md:flex-row  flex-col  mt-10">
          <Select Ordered={Ordered} title="مرتب سازی">
            <div
              onClick={() => setOrdered("all")}
              className="hover:text-yellow-500 py-2"
            >
              همه
            </div>
            <hr />
            <div
              onClick={() => setOrdered("mostRecent")}
              className="hover:text-yellow-500 py-2"
            >
              بروز ترین
            </div>
            <hr />
            <div
              onClick={() => setOrdered("IMDBScore")}
              className="hover:text-yellow-500 py-2"
            >
              امتیاز IMDB
            </div>
            <hr />
            <div
              onClick={() => setOrdered("MostPopular")}
              className="hover:text-yellow-500 py-2"
            >
              محبوب ترین
            </div>
          </Select>
          <Select Ordered={Ordered} title="امتیاز IMDB">
            <div
              onClick={() => setOrdered("all")}
              className="hover:text-yellow-500 py-2"
            >
              همه
            </div>
            <hr />
            <div
              onClick={() => setOrdered(7)}
              className="hover:text-yellow-500 py-2"
            >
              بالا 7
            </div>
            <hr />
            <div
              onClick={() => setOrdered(6)}
              className="hover:text-yellow-500 py-2"
            >
              بالا 6
            </div>
            <hr />
            <div
              onClick={() => setOrdered(5)}
              className="hover:text-yellow-500 py-2"
            >
              بالا 5
            </div>
            <hr />
            <div
              onClick={() => setOrdered(4)}
              className="hover:text-yellow-500 py-2"
            >
              بالا 4
            </div>
          </Select>
          <Select Ordered={Ordered} title="ژانر">
            <div
              onClick={() => setOrdered("all")}
              className="hover:text-yellow-500 py-2"
            >
              همه
            </div>
            <hr />
            <div
              onClick={() => setOrdered("drama")}
              className="hover:text-yellow-500 py-2"
            >
              درام
            </div>
            <hr />
            <div
              onClick={() => setOrdered("comedy")}
              className="hover:text-yellow-500 py-2"
            >
              کمدی
            </div>
            <hr />
            <div
              onClick={() => setOrdered("action")}
              className="hover:text-yellow-500 py-2"
            >
              اکشن
            </div>
            <hr />
            <div
              onClick={() => setOrdered("Exciting")}
              className="hover:text-yellow-500 py-2"
            >
              هیجان انگیز
            </div>
            <hr />
            <div
              onClick={() => setOrdered("Romantic")}
              className="hover:text-yellow-500 py-2"
            >
              عاشقانه
            </div>
            <hr />
            <div
              onClick={() => setOrdered("Criminal")}
              className="hover:text-yellow-500 py-2"
            >
              جنایی
            </div>
          </Select>
        </div>
        <div className="flex justify-center flex-wrap gap-1">
          {isLoading ? (
            <Loader />
          ) : showMovie.length ? (
            showMovie?.map((movie) => <BoxMovie {...movie} key={movie.id} />)
          ) : (
            AllMovies?.map((movie) => <BoxMovie {...movie} key={movie.id} />)
          )}
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
