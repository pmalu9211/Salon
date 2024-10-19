import React from "react";
import Image from "next/image";
import moustache from "@/app/images/moustache.png";
export default function PricePlan() {
  const pricePlan = [
    {
      name: "hair cut",
      price: "$10",
    },
    {
      name: "shaving",
      price: "$40",
    },
    {
      name: "hair styling",
      price: "$25",
    },
    {
      name: "beard trimming",
      price: "$25",
    },
    {
      name: "hair trimming",
      price: "$30",
    },
    {
      name: "face cleaning",
      price: "$60",
    },
    {
      name: "kids hair cut",
      price: "$15",
    },
    {
      name: "mustache trim",
      price: "$12",
    },
  ];
  return (
    <div className="bg-[#FDF8E9] p-8 md:p-20">
      <h1 className="text-center capitalize text-3xl md:text-5xl text-[#4A4845] font-semibold mt-2 font-[Poppins]">
        barbershop pricing plan
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
      <div>
        <div className="flex flex-col md:grid md:grid-cols-2 justify-items-center w-full gap-y-6 mt-5">
          {pricePlan.map((item, index) => {
            return (
              <div key={index} className="md:w-3/5">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl md:text-3xl font-medium capitalize text-[#35312F]">
                    {item.name}
                  </h1>
                  <div className="flex-grow mx-4 border-b-2 border-dashed border-[#D9A536]"></div>
                  <p className="text-2xl md:text-3xl font-semibold text-[#D9A536] font-[Poppins] capitalize">
                    {item.price}
                  </p>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            );
          })}
        </div>
        <button className="text-white bg-[#D9A536] text-sm px-6 py-2 md:px-5 md:py-2 uppercase mt-6 md:mt-10 rounded block w-fit mx-auto">
          view more
        </button>
      </div>
    </div>
  );
}
