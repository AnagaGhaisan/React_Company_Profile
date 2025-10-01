import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";


interface NavbarSectionProps {
  variant?: "default" | "ripple10" | "sociomile" | "sociomation";
}

const NavbarSection: React.FC<NavbarSectionProps> = ({ variant = "default" }) => {
  const [scrolled, setScrolled] = useState(false);
   const isDefault = variant === "default";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tentukan logo berdasarkan variant
  let logoSrc;
  switch (variant) {
    case "ripple10":
      logoSrc = "https://placehold.co/120x40.png?text=ripple10+Logo";
      break;
    case "sociomile":
      logoSrc = "https://placehold.co/120x40.png?text=sociomile+Logo";
      break;
    case "sociomation":
      logoSrc = "https://placehold.co/120x40.png?text=sociomation+Logo";
      break;
    default:
      logoSrc = "https://placehold.co/120x40.png?text=Ivosight+Logo";
  }

  // Tentukan class text
  let appliedClass = "text-default"; // default selalu putih
  if (variant !== "default") {
    switch (variant) {
      case "ripple10":
        appliedClass = scrolled ? "text-ripple10-scrolled" : "text-ripple10";
        break;
      case "sociomile":
        appliedClass = scrolled ? "text-sociomile-scrolled" : "text-sociomile";
        break;
      case "sociomation":
        appliedClass = scrolled ? "text-sociomation-scrolled" : "text-sociomation";
        break;
    }
  }

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`app-navbar ${scrolled ? "scrolled" : ""}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className={appliedClass}>
          <img src={logoSrc} alt="Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {["home", "stats", "about", "clients", "contact"].map((s) => (
              <ScrollLink
                key={s}
                to={s}
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                className={`nav-link ${appliedClass}`}
                activeClass="active"
                style={{ cursor: "pointer" }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </ScrollLink>
            ))}
            <NavDropdown
              title={
                <span
                  className={
                    isDefault
                      ? "text-white"
                      : scrolled
                      ? "text-white"
                      : "text-dark"
                  }
                >
                  Products
                </span>
              }
              id="basic-nav-dropdown"
              menuVariant={isDefault ? (scrolled ? "dark" : "light") : scrolled ? "dark" : "light"}
            >
              <NavDropdown.Item as={Link} to="/product/ripple10">Ripple10</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sociomile">Sociomile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sociomation">Sociomation</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSection;
