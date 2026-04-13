import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutProject from "../components/AboutProject";
import AmenitiesSection from "../components/AmenitiesSection";
import ConnectivitySection from "../components/ConnectivitySection";
import TownshipSlider from "../components/TownshipSlider";
import FloorPlans from "../components/FloorPlans";
import VideoSection from "../components/VideoSection";
import AboutDeveloper from "../components/AboutDeveloper";
import ConstructionUpdates from "../components/ConstructionUpdates";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
export default function PublicSite() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutProject />
      <AmenitiesSection />
      <ConnectivitySection />
      <TownshipSlider />
      <FloorPlans />
      <VideoSection />
      <AboutDeveloper />
      <ConstructionUpdates />
      <FAQSection />
      <Footer />
    </div>
  );
}