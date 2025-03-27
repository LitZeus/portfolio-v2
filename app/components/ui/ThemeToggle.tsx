"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 p-2 rounded-full bg-blue/10 text-blue dark:bg-white/10 dark:text-white transition-colors z-50"
    >
      {theme === "dark" ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
    </motion.button>
  );
}; 