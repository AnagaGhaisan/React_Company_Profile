import React from "react";
import { AppIcon } from "../types";

type ProductProps = {
  Icon: AppIcon;
  title: string;
  desc: string;
};

export default function ProductComponent({ Icon, title, desc }: ProductProps) {
  return (
    <div className="card h-100 border-0 text-center p-4 shadow-sm">
      <div className="text-primary mb-3">
        <Icon size={40} color="blue" /> {/* ✅ sekarang aman */}
      </div>
      <h5>{title}</h5>
      <p className="text-muted">{desc}</p>
    </div>
  );
}
