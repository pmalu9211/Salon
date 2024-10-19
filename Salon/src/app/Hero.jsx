"use client";
import Image from "next/image";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="h-screen">
      <Header />
      <section className="relative flex justify-center pt-2 pb-12 mt-32 overflow-hidden bg-smoke-2">
        <Image
          src={"/img/hero bg.png"}
          alt="Hero bg"
          height="100"
          width="1920"
          className="absolute left-0 w-screen "
        />
        <div className="container flex items-center justify-center pl-40">
          <div className="flex flex-col items-start gap-8 font-display">
            <div className="flex gap-2 pl-2 text-xl font-bold text-theme-1">
              <Image
                src={"/svgs/flower.svg"}
                alt="flower"
                height="25"
                width="25"
              />
              <span>Best Spa Massages Parlor</span>
            </div>
            <h1 className="text-7xl font-black w-[600px]">
              Elevate Your Body And Mind With Our Spa Massages
            </h1>
            <button className="z-20 px-5 py-4 font-sans text-white bg-theme-1 hover:bg-theme-2">
              EXPLORE SERVICES →
            </button>
          </div>
          <div className="relative">
            <Image
              src={"/img/flower.png"}
              alt="Hero flower"
              height="1000"
              width="125"
              className="absolute z-10 left-16"
            />
            <Image
              src={"/img/hero model.png"}
              alt="Hero model"
              height="1000"
              width="750"
              className="relative"
            />
          </div>
        </div>
        <Image
          src={"/img/flower line.png"}
          alt="Hero flower line"
          height="1000"
          width="1920"
          className="absolute -bottom-12 "
        />
      </section>
    </div>
  );
}
