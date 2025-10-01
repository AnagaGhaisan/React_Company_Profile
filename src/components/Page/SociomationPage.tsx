import React from "react";
import Navbar from "../Dashboard/Navbar";
import SociomationHero from "../Sociomation/SociomationHero";
import SociomationFeatures from "../Sociomation/SociomationFeatures";
import SociomationCTA from "../Sociomation/SociomationCTA";
import Footer from "../Dashboard/Footer";

const SociomationPage: React.FC = () => {
  return (
    <>
      <Navbar variant="sociomation" />
      <main>
      <SociomationHero />
      <SociomationFeatures />
      <SociomationCTA />
      </main>
      <Footer />
    </>
  );
};

export default SociomationPage;
