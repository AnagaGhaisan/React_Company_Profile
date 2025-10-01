import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarSection from "./components/Dashboard/Navbar";
import HeroSection from "./components/Dashboard/HeroSection";
import StatsSection from "./components/Dashboard/Stats";
import ProductsSection from "./components/Dashboard/Product";
import AboutSection from "./components/Dashboard/About";
import ContactSection from "./components/Dashboard/Contact";
import ClientSection from "./components/Dashboard/Client";
import Footer from "./components/Dashboard/Footer";
import ProductDetail from "./components/Page/Ripple10Page"; // bikin halaman detail produk
import Ripple10Page from "./components/Page/Ripple10Page";
import SociomilePage from "./components/Page/SociomilePage";
import SociomationPage from "./components/Page/SociomationPage";

// 🔹 Landing Page (gabungan semua section)
const HomePage: React.FC = () => {
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

const App: React.FC = () => {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route path="/" element={<HomePage />} />

      {/* Halaman detail produk */}
      <Route path="/product/:id" element={<ProductDetail />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/product/ripple10" element={<Ripple10Page />} />
      <Route path="/product/sociomile" element={<SociomilePage />} />
      <Route path="/product/sociomation" element={<SociomationPage />} />
    </Routes>
  );
};

export default App;
