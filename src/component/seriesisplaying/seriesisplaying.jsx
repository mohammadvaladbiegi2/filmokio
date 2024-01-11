import React, { useEffect } from "react";
import { MdLocalMovies } from "react-icons/md";
import "./seriesisplaying.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSerialFromServer } from "../../Redux/stors/SerialReduce";
import SerialBoxplaying from "../SerialBoxplaying/SerialBoxplaying";
export default function seriesisplaying() {
  const dispatch = useDispatch();
  const { AllSerial } = useSelector((state) => state.Serial);
  useEffect(() => {
    dispatch(getSerialFromServer());
  }, []);
  return (
    <div className="container m-auto mt-[50px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <MdLocalMovies className="text-[#f5ad11] text-3xl me-3" />
          سریال های در حال پخش
        </div>
        <Link
          to="/filmokio/serial"
          className="bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3]"
        >
          تمامی سریال ها
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-evenly mt-[30px] px-[70px]">
        {AllSerial.slice(0, 8).map((serial) => (
          <SerialBoxplaying {...serial} key={serial.id} />
        ))}
      </div>
    </div>
  );
}
