import React from "react";
import Navbar from "../Dashboard/Navbar";
import SociomileHero from "../Sociomile/SociomileHero";
import SociomileFeatures from "../Sociomile/SociomileFeatures";
import SociomileCTA from "../Sociomile/SociomileCTA";
import Footer from "../Dashboard/Footer";

const SociomilePage: React.FC = () => {
  return (
    <>
      <Navbar variant="sociomile" />
      <main>
      <SociomileHero />
      <SociomileFeatures />
      <SociomileCTA />
      </main>
      <Footer />
    </>
  );
};

export default SociomilePage;
