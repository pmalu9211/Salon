"use client";
import Image from "next/image";

function ServicesCards({ no, title, desc }) {
  return (
    <div className="relative flex flex-col items-center gap-3 px-4 pt-16 text-center select-none w-72 pb-7 bg-smoke-3">
      <Image
        src={`/svgs/services${no}.svg`}
        alt="services icon"
        height="25"
        width="100"
        className="absolute top-0 -translate-y-1/2"
      />
      <h3 className="text-2xl font-bold font-display">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="container flex flex-col items-center gap-10 mx-auto">
      <Image
        src={"/img/services bg.png"}
        alt="Services bg"
        height="100"
        width="1920"
        className="absolute left-0 w-screen "
      />
      <div className="flex flex-col items-center gap-2 text-xl font-bold text-theme-1 font-display">
        <h2>What We Do</h2>
        <Image
          src={"/svgs/arrow circles underline.svg"}
          alt="title underline"
          height="25"
          width="275"
          className=""
        />
      </div>
      <h1 className="text-5xl font-bold font-display">
        Professional Spa and Beauty Service
      </h1>
      <div className="flex gap-8 pt-12">
        <ServicesCards
          no="1"
          title="Body Massages"
          desc="Whether you're seeking a rejuvenating facial, a soothing massage body treatment"
        />
        <ServicesCards
          no="2"
          title="Oil Therapy"
          desc="At our beauty spa salon, we offer a wide range of services tailored to meet"
        />
        <ServicesCards
          no="3"
          title="Aroma Therapy"
          desc="We also offer private rooms for more intimate treatments and couples"
        />
        <ServicesCards
          no="4"
          title="Waxing"
          desc="Relax in our serene lounge area, sip on herbal teas, and immerse yourself"
        />
      </div>
      <Image
        src={"/svgs/arrow circles underline separate.svg"}
        alt="title underline"
        height="25"
        width="300"
        className=""
      />
    </section>
  );
}
