import React from "react";
import ProductComponent from "./ProductComponent";
import { CloudIcon, ChartIcon, LockIcon} from "../icons"; 
import AnimatedWrapper from "./AnimatedWrapper";
import { motion } from "framer-motion";

const products = [
  { Icon: CloudIcon, title: "Digital Monitoring Tools", desc: "Pantau percakapan digital untuk memahami tren & opini pelanggan." },
  { Icon: LockIcon, title: "WhatsApp Business API", desc: "Layanan WhatsApp resmi untuk bisnis dengan fitur lengkap." },
  { Icon: ChartIcon, title: "Comprehensive Analytics", desc: "Analisis big data untuk insight yang lebih akurat & strategis." },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <AnimatedWrapper>
          <h2 style={{ color: 'rgba(2,6,23,0.6)' }} className="text-center fw-bold mb-3">
            Produk Kami
          </h2>
          <p className="text-center text-muted mb-5">
            Solusi teknologi engagement pelanggan terbaik dari Ivosights
          </p>
        </AnimatedWrapper>

        {/* Product Grid */}
        <div className="row g-4">
          {products.map(({ Icon, title, desc }, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <AnimatedWrapper delay={idx * 0.15}>
                  <ProductComponent Icon={Icon} title={title} desc={desc} />
                </AnimatedWrapper>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
