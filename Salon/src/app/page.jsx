"use client";
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import FunFact from "./FunFacts";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch gap-[120px] relative">
      <Hero />
      <Services />
      <AboutUs />
      <FunFact />
      <Gallery />

      <Footer />
    </div>
  );
}

