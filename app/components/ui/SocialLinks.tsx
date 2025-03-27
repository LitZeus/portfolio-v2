"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/yourusername",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/yourusername",
    color: "hover:text-blue-400",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`text-2xl text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
}; 