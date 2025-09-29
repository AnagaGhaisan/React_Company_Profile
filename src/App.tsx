import React from "react";
import NavbarSection from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/Stats";
import ProductsSection from "./components/Product";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import ClientSection from "./components/Client";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <main>
        <HeroSection />
        <StatsSection />
        <ProductsSection />
        <AboutSection />
        <ClientSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
