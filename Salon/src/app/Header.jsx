"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-20 flex w-screen shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] ">
      <div className="px-20 py-8 bg-theme-1">
        <Image src={"/svgs/logo.svg"} alt="Logo" width="190" height="200" />
      </div>
      <div className="flex flex-col grow">
        <div className="py-4 pr-48 text-sm font-normal bg-black text-body pl-7">
          <div className="container flex justify-between mx-auto">
            <ul className="flex gap-4">
              <li className="flex gap-2">
                <Image
                  src={"/svgs/phone.svg"}
                  alt="phone"
                  height="15"
                  width="15"
                />
                +256 214 293 215
              </li>
              <li>|</li>
              <li className="flex gap-2">
                <Image
                  src={"/svgs/email.svg"}
                  alt="email"
                  height="15"
                  width="15"
                />
                infor@rasm.com
              </li>
              <li>|</li>
              <li className="flex gap-2">
                <Image
                  src={"/svgs/clock.svg"}
                  alt="clock"
                  height="15"
                  width="15"
                />
                Mon - Sat: 8 AM - 15 PM Sunday Off
              </li>
            </ul>
            <ul className="flex items-center gap-3">
              <li>Follow Us:</li>
              <li>
                <Image
                  src={"/svgs/facebook.svg"}
                  alt="facebook"
                  height="10"
                  width="10"
                />
              </li>
              <li>
                <Image
                  src={"/svgs/twitter.svg"}
                  alt="twitter"
                  height="15"
                  width="15"
                />
              </li>
              <li>
                <Image
                  src={"/svgs/linkedin.svg"}
                  alt="linkedin"
                  height="15"
                  width="15"
                />
              </li>
              <li>
                <Image src={"/svgs/yt.svg"} alt="yt" height="15" width="15" />
              </li>
              <li>
                <Image
                  src={"/svgs/skype.svg"}
                  alt="skype"
                  height="15"
                  width="15"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between pr-48 text-sm font-medium bg-white pl-7 grow">
          <ul className="flex gap-7">
            <li className="cursor-pointer hover:text-theme-1">HOME +</li>
            <li className="cursor-pointer hover:text-theme-1">ABOUT US +</li>
            <li className="cursor-pointer hover:text-theme-1">PORTFOLIO +</li>
            <li className="cursor-pointer hover:text-theme-1">PAGES +</li>
            <li className="cursor-pointer hover:text-theme-1">SHOP +</li>
            <li className="cursor-pointer hover:text-theme-1">BLOG +</li>
            <li className="cursor-pointer hover:text-theme-1">CONTACT US </li>
          </ul>
          <div className="flex gap-5">
            <Image
              src={"/svgs/search.svg"}
              alt="search"
              height="45"
              width="45"
              className="cursor-pointer"
            />
            <Image
              src={"/svgs/cart.svg"}
              alt="cart"
              height="45"
              width="45"
              className="cursor-pointer"
            />
            <Image
              src={"/svgs/grid menu.svg"}
              alt="grid menu"
              height="45"
              width="45"
              className="cursor-pointer"
            />
            <button className="px-5 py-4 text-white bg-theme-1 hover:bg-theme-2">
              APPOINTMENT NOW →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
