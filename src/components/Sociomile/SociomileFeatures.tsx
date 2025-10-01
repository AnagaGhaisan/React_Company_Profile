import React from "react";
import { motion } from "framer-motion";

const SociomileFeatures: React.FC = () => (
  <section className="py-5">
    <div className="container">
      <h2 className="text-center fw-bold mb-5">Fitur Utama Sociomile</h2>
      <div className="row g-4">
        {[
          {
            title: "Omnichannel Support",
            desc: "Integrasi WhatsApp, Email, Live Chat, dan Social Media dalam satu dashboard."
          },
          {
            title: "Ticketing System",
            desc: "Kelola setiap interaksi pelanggan menjadi tiket untuk memudahkan tracking."
          },
          {
            title: "Analitik Layanan",
            desc: "Laporan performa layanan pelanggan dengan metrik yang detail."
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

export default SociomileFeatures;
