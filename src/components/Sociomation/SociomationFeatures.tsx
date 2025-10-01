import React from "react";
import { motion } from "framer-motion";

const SociomationFeatures: React.FC = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center fw-bold mb-5">Fitur Utama Sociomation</h2>
      <div className="row g-4">
        {[
          {
            title: "Campaign Automation",
            desc: "Otomatisasi pesan marketing melalui berbagai saluran komunikasi."
          },
          {
            title: "Customer Segmentation",
            desc: "Kelompokkan pelanggan sesuai perilaku dan kebutuhan mereka."
          },
          {
            title: "Performance Tracking",
            desc: "Analisis efektivitas campaign dengan dashboard real-time."
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

export default SociomationFeatures;
