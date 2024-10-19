"use client";

import Image from "next/image";
import Brands from "./Brands";

export default function Footer() {
  return (
    <div>
      <Brands />
      <footer className="flex flex-col justify-between text-white">
        <Image
          src={"/img/footer bg.png"}
          alt="Footer bg"
          height="100"
          width="1920"
          className="absolute left-0 w-screen -z-10 "
        />
        <div className="container flex gap-12 px-40 py-[108px] mx-auto">
          <div className="flex flex-col gap-5 pr-5 w-80">
            <Image
              src={"/svgs/footer logo.svg"}
              alt="Footer Logo"
              width="175"
              height="190"
            />
            <p className="leading-7 text-body">
              Centric applications productize front end portals visualize front
              end is results and value added
            </p>
            <div className="">
              <h3 className="text-xl font-display">We Are Available:</h3>
              <p className="text-body">Mon-Sat: 8.00 am to 15.00 pm</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center justify-center w-12 h-12 p-2 bg-gray-800 hover:bg-theme-1">
                <Image
                  src={"/svgs/facebook white.svg"}
                  alt="facebook"
                  height="10"
                  width="10"
                />
              </button>
              <button className="flex items-center justify-center w-12 h-12 p-2 bg-gray-800 hover:bg-theme-1">
                <Image
                  src={"/svgs/twitter white.svg"}
                  alt="twitter"
                  height="10"
                  width="10"
                />
              </button>
              <button className="flex items-center justify-center w-12 h-12 p-2 bg-gray-800 hover:bg-theme-1">
                <Image
                  src={"/svgs/insta.svg"}
                  alt="insta"
                  height="10"
                  width="10"
                />
              </button>
              <button className="flex items-center justify-center w-12 h-12 p-2 bg-gray-800 hover:bg-theme-1">
                <Image
                  src={"/svgs/linkedin white.svg"}
                  alt="linkedin"
                  height="10"
                  width="10"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-52">
            <div className="">
              <h2 className="mt-4 text-3xl font-display">Quick Links</h2>
              <Image
                src={"/svgs/3 underline.svg"}
                alt="underline"
                height="25"
                width="60"
                className="mt-2"
              />
            </div>
            <ul className="flex flex-col gap-4 text-lg text-body">
              <li className="cursor-pointer hover:text-theme-1"> → About Us</li>
              <li className="cursor-pointer hover:text-theme-1">
                → Work Gallery
              </li>
              <li className="cursor-pointer hover:text-theme-1">
                → Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-theme-1">
                → Our Services
              </li>
              <li className="cursor-pointer hover:text-theme-1">
                → Pricing Plans
              </li>
              <li className="cursor-pointer hover:text-theme-1">
                → Contact Us
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 w-72">
            <div className="">
              <h2 className="mt-4 text-3xl font-display">Contact Details</h2>
              <Image
                src={"/svgs/3 underline.svg"}
                alt="underline"
                height="25"
                width="60"
                className="mt-2"
              />
            </div>
            <div className="">
              <h3 className="text-lg font-bold font-display">Phone Number</h3>
              <div className="flex items-center gap-2">
                <Image
                  src={"/svgs/phone with bg.svg"}
                  alt="phone"
                  height="30"
                  width="30"
                />
                <p className="text-sm text-body">+256 214 203 215</p>
              </div>
            </div>
            <div className="">
              <h3 className="text-lg font-bold font-display">Email address</h3>
              <div className="flex items-center gap-2">
                <Image
                  src={"/svgs/mail with bg.svg"}
                  alt="mail"
                  height="30"
                  width="30"
                />
                <p className="text-sm text-body">info@rasm.com</p>
              </div>
            </div>
            <div className="">
              <h3 className="text-lg font-bold font-display">
                Office Location
              </h3>
              <div className="flex gap-2">
                <Image
                  src={"/svgs/location with bg.svg"}
                  alt="location"
                  height="30"
                  width="30"
                />
                <div className="">
                  <p className="text-sm text-body">25 Street, 145 City Road</p>
                  <p className="text-sm text-body">New Town DD14, USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-80">
            <div className="">
              <h2 className="mt-4 text-3xl font-display">Newsletter</h2>
              <Image
                src={"/svgs/3 underline.svg"}
                alt="underline"
                height="25"
                width="60"
                className="mt-2"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="leading-6 text-body">
                Sign Up to get updates & news about us. Get Latest Deals from
                Walker&apos;s Inbox to our mail address.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  className="p-5 text-sm bg-gray-800"
                  placeholder="Enter your email"
                />
                <button className="py-5 text-sm font-bold bg-theme-1 hover:bg-theme-2">
                  SUBSCRIBE NOW →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#53443D] py-6 ">
          <div className="container flex justify-between px-40 mx-auto">
            <p>© 2023 Rasm. All Rights Reserved.</p>
            <p>Terms & Conditions / Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
