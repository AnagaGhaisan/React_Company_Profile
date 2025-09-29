import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedWrapper from "./AnimatedWrapper";
import CountUp from "react-countup";

const stats = [
  { value: 5519, suffix: "+", label: "Project Handled" },
  { value: 1300000000, suffix: "+", label: "Stream Crawled" },
  { value: 146000000, suffix: "+", label: "Tickets Handled" },
  { value: 500, suffix: "+", label: "Clients Served" },
];

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-5">
      <Container>
        <Row className="text-center">
          {stats.map((s, i) => (
            <Col md={3} key={i}>
              <AnimatedWrapper delay={i * 0.15}>
                <h2 className="display-6 fw-bold">
                  <CountUp end={s.value} duration={2.5} separator="," />{s.suffix}
                </h2>
                <p className="text-muted text-white-50 mt-2">{s.label}</p>
              </AnimatedWrapper>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
