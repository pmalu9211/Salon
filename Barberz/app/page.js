import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Info from "./Components/Info";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import PricePlan from "./Components/PricePlan";
import Team from "./Components/Team";
import Misc from "./Components/Misc";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Info />
      <Service />
      <Team />
      <PricePlan />
      <Misc />
      <Footer />
    </div>
  );
}
