"use client";
import React from "react";
import Image from "next/image";
import moustache from "@/app/images/moustache.png";
import person1 from "@/app/images/person1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Team() {
  const team = [
    {
      name: "david",
      img: person1,
      position: "hair cut specialist",
    },
    {
      name: "paul",
      img: person1,
      position: "beard & trimming",
    },
    {
      name: "charlie",
      img: person1,
      position: "hair color specialist",
    },
    {
      name: "sam",
      img: person1,
      position: "hair cut specialist",
    },
    {
      name: "richard",
      img: person1,
      position: "beard & trimming",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="p-8 md:p-20">
      <p className="text-[#CCA34C] text-xl md:text-3xl uppercase flex items-end justify-center">
        S<span className="text-lg md:text-2xl">pecialists</span>
      </p>
      <h1 className="text-center text-3xl md:text-5xl text-[#4A4845] font-semibold mt-2 font-[Poppins]">
        Our Team
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
      <Slider {...settings} className="mt-10">
        {team.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Image src={item.img} alt={item.name} className="w-80" />
            <div className="p-5 w-80 text-white bg-[#B78E36]">
              <p className="text-2xl font-semibold font-[poppins] uppercase text-center">
                {item.name}
              </p>
              <p className="text-xl font-[poppins] text-center capitalize">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
