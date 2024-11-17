import React from 'react';
import pro from '../assets/11.png';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Container for the Profile Image and Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}  // Start faded out and below the final position
        animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }}  // Duration and easing for smoothness
        className="relative mix-blend-lighten"
      >
        <img
          src={pro}
          alt="Profile"
          className="w-[280px] lg:w-[350px] ml-[0px] rounded-full shadow-lg"
        />
      </motion.div>

      {/* SVG Circle Animation */}
      <motion.div className="absolute w-[280px] lg:w-[400px]">
        <motion.svg
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#0AB2D6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
