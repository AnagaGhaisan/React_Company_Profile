import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";


const NavbarSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`app-navbar ${scrolled ? "scrolled" : ""}`} variant="dark">
      <Container>
        <Navbar.Brand href="#"><img src="https://placehold.co/120x40.png?text=Ivosight+Logo" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {["home", "stats", "products", "about", "clients", "contact"].map((s) => (
              <ScrollLink
                key={s}
                to={s}
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className="nav-link"
                activeClass="active"
                style={{ cursor: "pointer" }}
              >
                {s === "home" ? "Home" : s.charAt(0).toUpperCase() + s.slice(1)}
              </ScrollLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
