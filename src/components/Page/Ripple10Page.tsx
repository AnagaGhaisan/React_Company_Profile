import React from "react";
import NavbarSection from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import HeroRipple10 from "../Ripple10/HeroRipple10";
import AboutRipple10 from "../Ripple10/AboutRipple10";
import CTASection from "../Ripple10/CTASection";

const Ripple10Page: React.FC = () => {
  return (
    <>
      <NavbarSection variant="ripple10" />
      <main>
        <HeroRipple10 />
        <AboutRipple10 />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Ripple10Page;
