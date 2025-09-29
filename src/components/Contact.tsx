import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-5">

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-4 fw-bold">Hubungi Kami</h2>
          <p className="text-center text-muted text-white-50 mb-5">
            Silakan isi form di bawah untuk menghubungi kami.
          </p>

          <form
            action="https://formsubmit.co/anaga.ghaisan@gmail.com"
            method="POST"
            className="mx-auto"
            style={{ maxWidth: "600px" }}
          >
            {/* Anti-spam (hidden) */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="mb-3">
              <label className="form-label">Nama</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Pesan</label>
              <textarea
                name="message"
                rows={4}
                className="form-control"
                placeholder="Tulis pesan Anda..."
                required
              ></textarea>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Kirim Pesan
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
