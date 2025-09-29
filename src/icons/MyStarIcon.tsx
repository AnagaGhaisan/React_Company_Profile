// src/icons/MyStarIcon.tsx
import React from "react";

const MyStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .587l3.668 7.429L24 9.75l-6 5.847L19.335 24 12 20.017 4.665 24 6 15.597 0 9.75l8.332-1.734z" />
  </svg>
);

export default MyStarIcon;
