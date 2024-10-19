"use client";
import Image from "next/image";
import React, { useState } from "react";
import telephone from "@/app/images/telephone.png";
import mail from "@/app/images/mail.png";
import facebook from "@/app/images/facebook.png";
import website from "@/app/images/website.png";
import twitter from "@/app/images/twitter.png";
import youtube from "@/app/images/youtube.png";
import logo from "@/app/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 z-10 w-full bg-[#292727B2] bg-opacity-70 text-white">
      <div className="hidden md:flex md:flex-col">
        <div className="flex justify-between items-center py-2 px-6 text-lg	absolute top-0 left-0 w-full">
          <div className="flex items-center gap-1">
            <Image
              src={telephone}
              alt="telephone"
              className="w-6 object-contain h-6"
            />
            <p>+123456789</p>
            <Image src={mail} alt="mail" className="w-6 object-contain h-6" />
            <p>barberz.123@info.com</p>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src={facebook}
              alt="facebook"
              className="w-6 object-contain h-6"
            />
            <Image
              src={website}
              alt="website"
              className="w-6 object-contain h-6"
            />
            <Image
              src={twitter}
              alt="twitter"
              className="w-6 object-contain h-6"
            />
            <Image
              src={youtube}
              alt="youtube"
              className="w-6 object-contain h-6"
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-20 py-4 text-xl font-medium">
          <p className="hover:text-[#CCA34C] cursor-pointer">Home</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">Services</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">About Us</p>
          <div className="relative">
            <Image src={logo} alt="logo" className="w-44 object-contain" />
            <p
              className="uppercase text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5"
              style={{ fontFamily: "Vast Shadow" }}
            >
              barberz
            </p>
          </div>
          <p className="hover:text-[#CCA34C] cursor-pointer">Team</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">Booking</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">Contact Us</p>
        </div>
      </div>
      <div className="md:hidden p-5 flex justify-between items-center">
        <p className="uppercase text-2xl" style={{ fontFamily: "Vast Shadow" }}>
          barberz
        </p>
        <button onClick={handleMenuToggle} className="text-white text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#292727] text-xl flex flex-col items-center space-y-4 py-6">
          <p className="hover:text-[#CCA34C] cursor-pointer">Home</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">Services</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">About Us</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">Team</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">Booking</p>
          <p className="hover:text-[#CCA34C] cursor-pointer">Contact Us</p>
        </div>
      )}
    </header>
  );
};

export default Navbar;
