import React from "react";
import { motion } from "framer-motion";

const SociomationHero: React.FC = () => (
  <section className="bg-light text-dark py-5">
    <div className="container text-center">
      <motion.h1
        className="fw-bold display-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sociomation
      </motion.h1>
      <motion.p
        className="lead mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Platform automasi komunikasi untuk meningkatkan engagement
        dengan pelanggan secara efisien.
      </motion.p>
      <motion.a
        href="https://ivosights.com/sociomation"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg mt-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Kunjungi Sociomation →
      </motion.a>
    </div>
  </section>
);

export default SociomationHero;
