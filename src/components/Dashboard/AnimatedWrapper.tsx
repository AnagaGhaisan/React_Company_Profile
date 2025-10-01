import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedWrapper: React.FC<Props> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
