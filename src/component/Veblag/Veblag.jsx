import React, { useEffect } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import VeblagCard from "../VeblagCard/VeblagCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWeblogsFromServer } from "../../Redux/stors/WeblogsReduce";
export default function Veblag() {
  const dispatch = useDispatch();
  const { AllWeblogs } = useSelector((state) => state.Weblogs);
  useEffect(() => {
    dispatch(getWeblogsFromServer());
  }, []);
  return (
    <div className="container m-auto mt-[80px]">
      <div className="title flex justify-between px-[70px]">
        <div className="flex items-center text-white text-1xl">
          <IoNewspaperOutline className="text-[#f5ad11] text-3xl me-3" />
          وبلاگ
        </div>
        <Link
          to="/filmokio/weblog"
          className="bg-[#f5ad11] p-2 rounded-sm hover:bg-[#f5ad11d3]"
        >
          وبلاگ ها
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-evenly mt-[50px] px-[70px]">
        {AllWeblogs.slice(0, 4).map((weblog) => (
          <VeblagCard {...weblog} key={weblog.key} />
        ))}
      </div>
    </div>
  );
}
