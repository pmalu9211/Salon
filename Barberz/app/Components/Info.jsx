import Image from "next/image";
import React from "react";
import barber from "@/app/images/barber.png";
import img1 from "@/app/images/img1.jpg";
import img2 from "@/app/images/img2.jpg";
import img3 from "@/app/images/img3.jpg";

export default function Info() {
  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:p-8 md:mb-10">
      <div className="w-full md:w-3/4 mt-10 flex flex-col items-center">
        <p className="text-[#CCA34C] text-2xl md:text-3xl uppercase flex items-end justify-center">
          I<span className="text-xl md:text-2xl">ntroducing</span>
        </p>
        <h1 className="text-center text-3xl md:text-5xl text-[#4A4845] font-semibold mt-2 font-[Poppins]">
          BARBERZ..The Barbershop Since 1990
        </h1>
        <Image
          src={barber}
          alt="info"
          className="object-contain size-14 md:size-24 mt-3"
        />
        <p className="text-center text-lg md:text-xl mt-5 px-4 md:px-0">
          Barber is a person whose occupation is mainly to cut dress groom style
          and shave men&apos;s and boys&apos; hair. A barber&apos;s place of
          work is known as a &quot;barbershop&quot; or a
          &quot;barber&apos;s&quot;. Barbershops are also places of social
          interaction and public discourse. In some instances, barbershops are
          also public forums.
        </p>
        <button className="text-white bg-[#CCA34C] text-lg md:text-2xl px-6 py-2 md:px-10 md:py-3 uppercase mt-6 md:mt-10 rounded">
          more about us
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0">
        <Image
          src={img1}
          alt="Image 1"
          className="absolute top-0 right-0 w-[50%] h-[50%] md:w-[50%] md:h-[50%] object-cover shadow-xl rounded"
        />
        <Image
          src={img2}
          alt="Image 2"
          className="absolute top-[30%] left-[15%] w-[60%] h-[60%] md:w-[60%] md:h-[60%] object-cover shadow-xl rounded"
        />
        <Image
          src={img3}
          alt="Image 3"
          className="absolute bottom-0 right-0 w-[35%] h-[35%] md:w-[35%] md:h-[35%] object-cover shadow-xl rounded"
        />
      </div>
    </div>
  );
}
