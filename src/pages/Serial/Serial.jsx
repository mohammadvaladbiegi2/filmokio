import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSerialFromServer } from "../../Redux/stors/SerialReduce";
import Loader from "../../component/Loader/Loader";
import BoxSerial from "../../component/BoxSerial/BoxSerial";
import Select from "../../component/Select/Select";
export default function Serial() {
  const dispatch = useDispatch();
  const { AllSerial, isLoading, isreject } = useSelector(
    (state) => state.Serial
  );

  const [Ordered, setOrdered] = useState("all");
  const [showMovie, setShowMovie] = useState([]);

  useEffect(() => {
    dispatch(getSerialFromServer());
  }, [Ordered]);
  useEffect(() => {
   const filterdcategory = [...AllSerial].filter(
      (movie) => movie.category === Ordered
    );
    const filterdscore = [...AllSerial].filter(
      (movie) => movie.score > Number(Ordered)
    );
    const filterdpopularity = [...AllSerial].sort(
      (a, b) => b.popularity - a.popularity
    );
    const filterdyear = [...AllSerial].sort((a, b) => b.year - a.year);
    const filterdscoreIMBD = [...AllSerial].sort((a, b) => b.score - a.score);
    filterdcategory.length
      ? setShowMovie(filterdcategory)
      : filterdscore.length
      ? setShowMovie(filterdscore)
      : Ordered === "MostPopular"
      ? setShowMovie(filterdpopularity)
      : Ordered === "mostRecent"
      ? setShowMovie(filterdyear)
      : Ordered === "IMDBScore"
      ? setShowMovie(filterdscoreIMBD)
      : setShowMovie(AllSerial);
  }, [Ordered]);

  return (
    <div className="pt-[200px]">
      <h1 className="font-medium text-center text-white text-5xl">
        همه سریال ها
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
            showMovie?.map((serial) => (
              <BoxSerial {...serial} key={serial.id} />
            ))
          ) : (
            AllSerial?.map((serial) => (
              <BoxSerial {...serial} key={serial.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
