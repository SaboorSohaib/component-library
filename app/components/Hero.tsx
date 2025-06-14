"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/store/ThemeContext";

const Hero = () => {
  const fadeUpVariant = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  return (
    <div className="overflow-hidden p-4">
      <motion.div
        className="relative"
        variants={fadeUpVariant}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col justify-center items-center gap-4 p-10">
          <h1 className="text-5xl text-center">Component Library</h1>
          <p className="text-center">
            A simple, elegant layout for showcasing content
          </p>
          <button
            className={`p-3 duration-100 rounded-xl cursor-pointer ${
              theme === "dark"
                ? "border border-white"
                : "border border-gray-900 "
            }`}
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
