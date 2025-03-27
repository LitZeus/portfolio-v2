"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaChevronDown className="w-6 h-6 text-blue/80" />
      </motion.div>
    </motion.div>
  );
}; 