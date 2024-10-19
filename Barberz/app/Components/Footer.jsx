import React from "react";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import bg from "@/app/images/footer_bg.png";
import scissor from "@/app/images/scissor.png";
import mail from "@/app/images/golden_mail.png";
import location from "@/app/images/location.png";
import facebook from "@/app/images/facebook.png";
import twitter from "@/app/images/twitter.png";
import youtube from "@/app/images/youtube.png";
import instagram from "@/app/images/instagram.png";
import moustache from "@/app/images/moustache.png";
import telephone from "@/app/images/golden_tele.png";

export default function Footer() {
  return (
    <div className="bg-[#35312F]">
      <div className="w-full text-white py-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-4 ">
        <div className="text-center md:text-left">
          <div className="relative mx-auto md:mx-0">
            <Image
              src={logo}
              alt="logo"
              className="w-32 md:w-44 object-contain mx-auto"
            />
            <p
              className="uppercase text-xl md:text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5"
              style={{ fontFamily: "Vast Shadow" }}
            >
              barberz
            </p>
          </div>
          <p className="text-center capitalize text-sm md:text-base font-normal mt-2 md:mb-10 mb-6">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <form action="" className="flex flex-col gap-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              className="px-2 py-1"
            />
            <button className="bg-[#CCA34C] text-white px-5 py-1 border border-white font-medium w-fit mx-auto rounded-full uppercase hover:bg-white hover:text-black">
              subscribe
            </button>
          </form>
        </div>
        <div className="font-medium font-[Poppins] uppercase mt-8 md:mt-10 text-center md:text-left md:mx-auto md:w-4/5 md:ml-24">
          <h1 className="text-lg md:text-2xl">Quick Links</h1>
          <div className="flex justify-center md:justify-start items-center gap-1 my-2">
            <hr className="w-8 md:w-12 border-[#D9A536] border" />
            <Image
              src={moustache}
              alt="moustache"
              className="object-cover w-6 h-2.5 md:w-9 md:h-3.5"
            />
            <hr className="w-8 md:w-12 border-[#D9A536] border" />
          </div>
          <div className="flex flex-col gap-3 w-3/4 md:w-3/5 mx-auto md:mx-0">
            {["Home", "About Us", "Gallery", "Contact Us"].map((link, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-5">
                <Image
                  src={scissor}
                  alt="scissor"
                  className="object-cover w-4 md:w-5 rotate-90"
                />
                <p className="text-sm md:text-base">{link}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="font-medium font-[Poppins] uppercase mt-8 md:mt-10 text-center md:text-left md:mx-auto md:w-fit">
          <h1 className="text-lg md:text-2xl">Services</h1>
          <div className="flex justify-center md:justify-start items-center gap-1 my-2">
            <hr className="w-8 md:w-12 border-[#D9A536] border" />
            <Image
              src={moustache}
              alt="moustache"
              className="object-cover w-6 h-2.5 md:w-9 md:h-3.5"
            />
            <hr className="w-8 md:w-12 border-[#D9A536] border" />
          </div>
          <div className="flex flex-col gap-3 w-3/4 md:w-3/5 mx-auto md:mx-0">
            {["Hairs", "Beauty", "Spa", "Massage"].map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-5">
                <Image
                  src={scissor}
                  alt="scissor"
                  className="object-cover w-4 md:w-5 rotate-90"
                />
                <p className="text-sm md:text-base">{service}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="font-medium font-[Poppins] uppercase mt-8 md:mt-10 text-center md:text-left">
          <h1 className="text-lg md:text-2xl">Contact</h1>
          <div className="flex justify-center md:justify-start items-center gap-1 my-2">
            <hr className="w-8 md:w-12 border-[#D9A536] border" />
            <Image
              src={moustache}
              alt="moustache"
              className="object-cover w-6 h-2.5 md:w-9 md:h-3.5"
            />
            <hr className="w-8 md:w-12 border-[#D9A536] border" />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 w-3/4 md:w-3/5 mx-auto md:mx-0">
            <div className="flex items-center gap-3 md:gap-5">
              <Image
                src={telephone}
                alt="telephone"
                className="object-cover w-6 md:w-8"
              />
              <p className="text-sm md:text-base">+4125987645</p>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <Image
                src={mail}
                alt="mail"
                className="object-cover w-6 md:w-8"
              />
              <p className="lowercase text-sm md:text-base">
                barberz.123@info.com
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-5">
              <Image
                src={location}
                alt="location"
                className="object-cover w-6 md:w-8"
              />
              <p className="text-sm md:text-base">
                Golden Street, Chinatown, San Francisco
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-3 md:gap-5 mt-5">
            {[facebook, twitter, youtube, instagram].map((icon, idx) => (
              <div key={idx} className="bg-[#D9A536] p-1">
                <Image
                  src={icon}
                  alt="social media"
                  className="object-contain w-5 h-5 md:w-6 md:h-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-white text-sm md:text-base py-2">
        Copyright© 2021 All Rights Reserved
      </p>
    </div>
  );
}
