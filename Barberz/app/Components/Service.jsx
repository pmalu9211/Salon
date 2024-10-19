import React from "react";
import Image from "next/image";
import scissor from "@/app/images/scissor.png";
import moustache from "@/app/images/moustache.png";
import hair_clipper from "@/app/images/hair_clipper.png";
import shaving_brush from "@/app/images/shaving_brush.png";
import hair_dye_brush from "@/app/images/hair_dye_brush.png";

const service = [
  {
    img: scissor,
    title: "Hair Cut",
  },
  {
    img: shaving_brush,
    title: "Shaving",
  },
  {
    img: hair_dye_brush,
    title: "Hair Color",
  },
  {
    img: hair_clipper,
    title: "Beard Trim",
  },
];

export default function Service() {
  return (
    <div className="bg-[#FDF8E9] p-8 md:p-20">
      <p className="text-[#CCA34C] text-xl md:text-3xl uppercase flex items-end justify-center">
        S<span className="text-lg md:text-2xl">ervices</span>
      </p>
      <h1 className="text-center text-3xl md:text-5xl text-[#4A4845] font-semibold mt-2 font-[Poppins]">
        Our Services
      </h1>
      <div className="flex justify-center items-center gap-2 mt-2">
        <hr className="w-24 md:w-36 border-[#D9A536] border" />
        <Image
          src={moustache}
          alt="moustache"
          className="object-cover w-12 h-8 md:w-16 md:h-10"
        />
        <hr className="w-24 md:w-36 border-[#D9A536] border" />
      </div>
      <div className="mt-10 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {service.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4 bg-white rounded-md p-4 border-4 border-white hover:border-[#CCA34C] "
              >
                <Image
                  src={item.img}
                  alt="scissor"
                  className="w-20 h-20 md:w-22 object-contain"
                />
                <p className="text-center font-medium text-lg md:text-2xl">
                  {item.title}
                </p>
                <p className="text-center font-light text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa provident magnam, consequuntur eaque perferendis
                  obcaecati! Eum delectus impedit non illum id beatae quis,
                  quasi commodi! Magnam dolores assumenda ad eligendi!
                </p>
                <button className="text-[#CCA34C] rounded-md border-2 uppercase border-[#CCA34C] px-3 py-2 md:px-4 md:py-2 font-semibold text-sm md:text-base hover:text-white hover:bg-[#CCA34C]">
                  read more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
