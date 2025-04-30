"use client"

import { motion } from "motion/react"
import Navbar from "./sections/navbar/default";

export default function Header() {
  return (
    <>
      <motion.div className="container mx-auto px-2"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Final state
          transition={{ duration: 0.5, ease: "easeOut" }} // Animation timing
          >
        <Navbar />
      </motion.div>
    </>
  );
}
