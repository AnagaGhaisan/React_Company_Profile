import React from "react";
import { Container, Button } from "react-bootstrap";
import AnimatedWrapper from "./AnimatedWrapper";
import { Link as ScrollLink } from "react-scroll";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="overlay" />
      <Container className="text-center" style={{ zIndex: 2 }}>
        <AnimatedWrapper>
          <h1 className="display-4 fw-bold">Akselerasi Bisnis Anda di Era Digital</h1>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.25}>
          <p className="lead text-muted text-white-50 mt-2" style={{ maxWidth: 900, margin: "0 auto" }}>
            Solusi customer engagement penuh: monitoring, automation, analytics, & contact center.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.5}>
          <div className="mt-4">
            <Button className="me-3 btn-primary btn-lg" href="#contact">Hubungi Kami</Button>
            <ScrollLink to="products" smooth offset={-80} duration={600} className="btn btn-outline-light btn-lg" style={{ cursor: "pointer" }}>
              Lihat Produk
            </ScrollLink>
          </div>
        </AnimatedWrapper>
      </Container>
    </section>
  );
};

export default HeroSection;
