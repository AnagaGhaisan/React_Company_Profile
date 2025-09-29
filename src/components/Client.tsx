import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import AnimatedWrapper from "./AnimatedWrapper";

const clients = [
  { name: "Client A", logo: "https://placehold.co/160x80.png?text=Client+A" },
  { name: "Client B", logo: "https://placehold.co/160x80.png?text=Client+B" },
  { name: "Client C", logo: "https://placehold.co/160x80.png?text=Client+C" },
  { name: "Client D", logo: "https://placehold.co/160x80.png?text=Client+D" },
  { name: "Client E", logo: "https://placehold.co/160x80.png?text=Client+E" },
  { name: "Client F", logo: "https://placehold.co/160x80.png?text=Client+F" },
  { name: "Client G", logo: "https://placehold.co/160x80.png?text=Client+G" },
  { name: "Client H", logo: "https://placehold.co/160x80.png?text=Client+H" },
];

// helper buat chunk array jadi grup isi 4
const chunkArray = (arr: typeof clients, size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const ClientSection: React.FC = () => {
  const clientGroups = chunkArray(clients, 4);

  return (
    <section id="clients" className="py-5 bg-light">
      <Container>
        <AnimatedWrapper>
          <h2
            style={{ color: "rgba(2,6,23,0.6)" }}
            className="text-center fw-bold mb-5"
          >
            Dipercaya Oleh
          </h2>
        </AnimatedWrapper>

 <Carousel
  indicators={false}
  controls={true}
  interval={2500}
  pause="hover"
  className="custom-carousel"
>
  {clientGroups.map((group, idx) => (
    <Carousel.Item key={idx}>
      <Row className="justify-content-center align-items-center">
        {group.map((c, i) => (
          <Col
            key={i}
            xs={6}   // ✅ 2 logo per baris di HP
            sm={4}   // ✅ 3 logo per baris di tablet kecil
            md={3}   // ✅ 4 logo per baris di tablet/desktop
            className="mb-4 d-flex justify-content-center"
          >
            <AnimatedWrapper delay={i * 0.15}>
              <img
                src={c.logo}
                alt={c.name}
                className="img-fluid client-logo"
                style={{ maxHeight: 80 }}
              />
            </AnimatedWrapper>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  ))}
</Carousel>


      </Container>
    </section>
  );
};

export default ClientSection;
