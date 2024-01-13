import React, { useEffect } from "react";

import VeblogBox from "../../component/VeblogBox/VeblogBox";
import { useDispatch, useSelector } from "react-redux";
import { getWeblogsFromServer } from "../../Redux/stors/WeblogsReduce";
import Loader from "../../component/Loader/Loader";
export default function VeblogPage() {
  const dispatch = useDispatch();
  const { AllWeblogs, isLoading, isreject } = useSelector(
    (state) => state.Weblogs
  );
  useEffect(() => {
    dispatch(getWeblogsFromServer());
  }, []);
  window.scroll(0, 0);
  return (
    <div className="pt-[200px]">
      <h1 className="font-medium text-center text-white text-5xl">وبلاگ</h1>
      <div className="px-[4.8rem]">
        <div className="flex justify-center items-center flex-wrap gap-5 mt-16">
          {isLoading ? (
            <Loader />
          ) : (
            AllWeblogs.map((weblog) => (
              <VeblogBox key={weblog.id} {...weblog} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
