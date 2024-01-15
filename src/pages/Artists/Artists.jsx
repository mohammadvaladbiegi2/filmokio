import React, { useState, useEffect } from "react";

import ArtistCard from "../../component/ArtistCard/ArtistCard";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../component/Loader/Loader";
import { getArtistFromServer } from "../../Redux/stors/ArtistsReduce";
import Select from "../../component/Select/Select";

export default function Artists() {
  const dispatch = useDispatch();
  const { AllArtist, isLoading, isreject } = useSelector(
    (state) => state.Artist
  );

  const [Ordered, setOrdered] = useState("all");
  const [showArtist, setShowArtist] = useState([]);

  useEffect(() => {
    dispatch(getArtistFromServer());
  }, [Ordered]);
  useEffect(() => {
   const filtergender = [...AllArtist].filter(
      (artist) => artist.gender === Ordered
    );
    const filterprofession = [...AllArtist].filter(
      (artist) => artist.profession === Ordered
    );
    filtergender.length
      ? setShowArtist(filtergender)
      : filterprofession.length
      ? setShowArtist(filterprofession)
      : setShowArtist(AllArtist);
  }, [Ordered]);
  return (
    <div className="pt-[200px]">
      <h1 className="font-medium text-center text-white text-5xl">
        آرشیو هنرمندان
      </h1>
      <div className="px-[4.8rem]">
        <div className="flex items-center justify-center md:flex-row  flex-col  mt-10">
          <Select Ordered={Ordered} title="جنسیت">
            <div
              onClick={() => setOrdered("all")}
              className="hover:text-yellow-500 py-2"
            >
              هردو
            </div>
            <hr />
            <div
              onClick={() => setOrdered("Man")}
              className="hover:text-yellow-500 py-2"
            >
              مرد
            </div>
            <hr />
            <div
              onClick={() => setOrdered("Woman")}
              className="hover:text-yellow-500 py-2"
            >
              زن
            </div>
          </Select>
          <Select Ordered={Ordered} title="پیشه">
            <div
              onClick={() => setOrdered("all")}
              className="hover:text-yellow-500 py-2"
            >
              هردو
            </div>
            <hr />
            <div
              onClick={() => setOrdered("Actor")}
              className="hover:text-yellow-500 py-2"
            >
              بازیگر
            </div>
            <hr />
            <div
              onClick={() => setOrdered("Director")}
              className="hover:text-yellow-500 py-2"
            >
              کارگردان
            </div>
          </Select>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-5 mt-20">
          {isLoading ? (
            <Loader />
          ) : showArtist.length ? (
            showArtist.map((artist) => (
              <ArtistCard {...artist} key={artist.id} />
            ))
          ) : (
            AllArtist.map((artist) => (
              <ArtistCard {...artist} key={artist.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
