import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`app-navbar ${scrolled ? "scrolled" : ""}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://placehold.co/120x40.png?text=Ivosight+Logo"
            alt="Ivosights Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ripple10">Ripple10</Nav.Link>
            <Nav.Link as={Link} to="/sociomile">Sociomile</Nav.Link>
            <Nav.Link as={Link} to="/sociomation">Sociomation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ProductNavbar;
