import React from "react";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "../icons";

const socialLinks = [
  { href: "https://facebook.com", Icon: FacebookIcon, color: "#3b5998" },
  { href: "https://twitter.com", Icon: TwitterIcon, color: "#00acee" },
  { href: "https://linkedin.com/", Icon: LinkedinIcon, color: "#0077b5" },
];

export default function Footer() {
  return (
    <footer className="text-white py-4 text-center">
      <div className="d-flex justify-content-center gap-3">
        {socialLinks.map(({ href, Icon, color }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.1)",
              transition: "all 0.3s ease", // Removed color from here
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = color;
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Icon size={22} color="white" />
          </a>
        ))}
      </div>
      <p className="mt-3 mb-0 small">© {new Date().getFullYear()} . All rights reserved.</p>
    </footer>
  );
}
