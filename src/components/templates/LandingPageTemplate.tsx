
import React from "react";
import FooterSection from "../organisms/FooterSection";
import HeroSection from "../organisms/HeroSection";
import Navbar from "../organisms/Navbar";

const LandingPageTemplate: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-teal-400 to-blue-500">
        <Navbar />
        <HeroSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default LandingPageTemplate;
