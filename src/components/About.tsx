import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedWrapper from "./AnimatedWrapper";

const milestones = [
  { year: "2017", desc: "Product launch & seed funding" },
  { year: "2019", desc: "Product improvement & market expansion" },
  { year: "2021", desc: "Official WhatsApp partnership & growth" },
  { year: "2023", desc: "New products with AI features" },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <AnimatedWrapper>
          <h2 className="text-center fw-bold mb-4">Tentang Kami</h2>
        </AnimatedWrapper>

        <Row className="align-items-center">
          <Col md={6}>
            <AnimatedWrapper delay={0.2}>
              <img src="https://placehold.co/600x400.png?text=About+Us"
                   alt="about" className="img-fluid rounded shadow" />
            </AnimatedWrapper>
          </Col>
          <Col md={6}>
            <AnimatedWrapper delay={0.4}>
              <p className="text-muted text-white-50 mt-2">
                Kami menyediakan solusi end-to-end untuk customer engagement: dari monitoring,
                analytics, automation, sampai contact center. Fokus kami: hasil nyata untuk bisnis.
              </p>
            </AnimatedWrapper>

            <div className="mt-4">
              {milestones.map((m, i) => (
                <AnimatedWrapper key={i} delay={0.6 + i * 0.12}>
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      width: 54, height: 54, borderRadius: "50%", background: "var(--primary)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginRight: 16
                    }}>
                      <strong style={{ fontSize: 12 }}>{m.year}</strong>
                    </div>
                    <div>
                      <div className="fw-bold">{m.desc}</div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
