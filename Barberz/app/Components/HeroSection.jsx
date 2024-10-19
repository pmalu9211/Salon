import React from "react";
import home_banner from "@/app/images/home_banner.png";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div>
      <Image
        src={home_banner}
        alt="Salon Logo"
        className="w-screen h-screen object-cover brightness-50 contrast-125"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
        <h1 className="font-bold text-5xl md:text-6xl font-[Poppins]">
          Our Hairstyle Enhances Your Smile!!
        </h1>
        <p className="text-xl md:text-3xl w-3/4 mx-auto md:mt-5 mt-2">
          Our barbershop is the territory created purely for males who
          appreciate premium quality, time and flawless look.
        </p>
        <button className="text-white bg-[#CCA34C] md:text-2xl md:px-14 px-6 py-4 uppercase mt-10">
          make an appointment
        </button>
      </div>
    </div>
  );
}
