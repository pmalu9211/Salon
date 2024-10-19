import React from "react";
import Image from "next/image";
import moustache from "@/app/images/moustache.png";
import pic1 from "@/app/images/client1.jpg";
import pic2 from "@/app/images/client2.jpg";
import pic3 from "@/app/images/client3.jpg";
import pic4 from "@/app/images/client4.jpg";
export default function Misc() {
  return (
    <div className="p-10 md:p-20">
      <h1 className="text-center text-3xl md:text-5xl text-[#4A4845] font-semibold mt-2 font-[Poppins]">
        Our Clients
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
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-6 ">
        <Image src={pic1} alt="pic1" />
        <Image src={pic2} alt="pic2" />
        <Image src={pic3} alt="pic3" />
        <Image src={pic4} alt="pic4" />
      </div>
    </div>
  );
}
