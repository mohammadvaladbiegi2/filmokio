import React from "react";
export default function BoxMovie({ img }) {
  return (
    <div className="flex-none mx-auto cursor-pointer  group w-[67%] sm:w-[48%] md:w-[30%] lg:w-[15%] aspect-video m-2 relative">
      <img
        alt="Stutz 2022 movie poster"
        className="rounded-lg brightness-100 group-hover:brightness-[0.3] transition duration-300  "
        height="450"
        src={img}
        style={{
          aspectRatio: "300/450",
          objectFit: "cover",
        }}
        width="300"
      />
      <div className="absolute w-full group-hover:hidden  right-2 bottom-10 text-[20px] ">
        <button
          className="text-white  bg-slate-900 rounded-lg p-1"
          variant="secondary"
        >
          7.6/10
        </button>
      </div>

      <div className="absolute  w-full inset-0 flex flex-col items-center overflow-hidden  justify-between opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white text-[15px]  p-4 mb-2  desc  text-justify line-clamp-5 lg:line-clamp-3 xl:line-clamp-5">
          شاهزاده پاندیان رانادهران در قرن هفتم حکومت می‌کرد. سلسله چولا قدرت
          خود را از دست داد و مردم آن مجبور به زندگی در جنگل‌ها شدند.
        </p>

        <button className="bg-[#f5ad11] rounded-lg text-white px-4 py-2 max-[500px]:px-2 max-[500px]:py-1 mb-10">
          ادامه + دانلود
        </button>
      </div>

      <p className="mt-2 text-center text-white">Stutz 2022</p>
    </div>
  );
}
