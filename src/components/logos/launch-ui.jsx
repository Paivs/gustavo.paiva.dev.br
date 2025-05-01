"use client";
import { motion } from "framer-motion"; // Corrigido de "motion/react" para "framer-motion"
import { useTheme } from "next-themes";

const LaunchUI = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const logoSrc = isDark ? "/logo.png" : "/logo-dark.png";

  return (
    <motion.img
      src={logoSrc}
      alt="Logo"
      className="w-full h-auto max-h-12"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
};

export default LaunchUI;
