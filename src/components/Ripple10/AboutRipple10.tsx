import React from "react";
import { motion } from "framer-motion";

const Ripple10Features: React.FC = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center fw-bold mb-5">Fitur Utama Ripple10</h2>
      <div className="row g-4">
        {[
          {
            title: "Real-Time Monitoring",
            desc: "Pantau percakapan digital di berbagai platform secara instan untuk memahami tren dan opini pelanggan."
          },
          {
            title: "Analisis Sentimen",
            desc: "Identifikasi opini positif, negatif, atau netral untuk strategi komunikasi yang lebih tepat."
          },
          {
            title: "Laporan Otomatis",
            desc: "Hasil monitoring disajikan dalam laporan otomatis yang mudah dipahami untuk pengambilan keputusan."
          }
        ].map((feature, idx) => (
          <div key={idx} className="col-md-4">
            <motion.div
              className="card shadow-lg border-0 h-100 p-4 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ripple10Features;
