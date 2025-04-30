"use client";
import { motion } from "motion/react";

const LaunchUI = (props) => (
  // <svg
  //   width={24}
  //   height={24}
  //   viewBox="0 0 24 24"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  //   {...props}>
  //   <path d="M10.5 12.75H3L6 9.75H9L15.75 3H20.25L10.5 12.75Z" fill="currentColor" />
  //   <path d="M11.25 15V13.5L21 3.75V5.25L11.25 15Z" fill="currentColor" />
  //   <path d="M11.25 18V16.5L21 6.75V8.25L11.25 18Z" fill="currentColor" />
  //   <path d="M11.25 21V19.5L15 15.75V17.25L11.25 21Z" fill="currentColor" />
  // </svg>
  // <motion.div className="">
  <motion.img
    src="/logo.png"
    alt=""
    className="w-full h-auto max-h-12"
    initial={{ opacity: 0, scale: 0.8 }} // Initial state
    animate={{ opacity: 1, scale: 1 }} // Final state
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.5, ease: "easeOut" }} // Animation timing
  />
  // </motion.div>
);
export default LaunchUI;
